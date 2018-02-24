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
    this.state = {results: props.results};
  }

  render() {
    return (
      <div>
          <li> search Result {this.props.result} </li>
      </div> 
    )
  }
} 