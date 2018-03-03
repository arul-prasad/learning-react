import React from 'react';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchText: ''};
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    var searchElement = document.getElementById("searchText");
    console.log('searchValue =' , searchElement.value);
    this.setState({searchText : searchElement.value});
    this.props.search(searchElement.value);
  }

  componentDidUpdate() {
    console.log('trying in did update will make a cycle !!!' , this.state.searchText);
    //this.props.search(this.state.searchText);
  }

  render() {
    console.log('rendering with search text = ', this.state.searchText);
    return (
      <div>
      <input type="text" id="searchText"  />
      <button onClick={this.onSearch}> Search </button>
      </div>  
    )
  }
}

export class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const filteredData = 
      this.props.data.filter(function(data) {
      if(this.props.searchText) {
        return (data.indexOf(this.props.searchText) != -1);
      } else {
        return true;
      }
    }.bind(this))

    const listData = filteredData.map(function(data) {
      return <li> {data} </li>; 
    });

    return (
      <div>
        { listData }
      </div> 
    )
  }
} 