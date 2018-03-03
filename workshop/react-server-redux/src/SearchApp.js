import React from 'react';
import {Search,SearchResult} from './Search';
import axios from 'axios';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return { experts: state.experts };
};

const fetchExperts = function(filterData) {
    return {
        type : 'FETCH_CUSTOMER',
        payLoad : filterData
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetch: filterData => {
          console.log('throwing fetch with payload', filterData); 
          dispatch(fetchExperts(filterData))
      }
    };
};

class SearchApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {experts : []};
        //this.state  = {};
        this.search = this.search.bind(this);
    }

    componentWillMount() {
       /* axios.get('/experts')
            .then(function(response) {
                console.log(response);
                this.setState(
                    { experts: response.data.experts }
                );
            }.bind(this)); */
    }

    search(searchText){
        console.log('search Text in UP state=', searchText);
        this.props.fetch(searchText);
        this.setState ({
            searchText : searchText
        });
    }

    render() {
        return (
            <div>
            <Search search={this.search}/>
            <SearchResult data={this.props.experts} searchText={this.state.searchText} />
            </div>
        )
    }
}

const connectedSearchApp = connect(mapStateToProps,mapDispatchToProps)(SearchApp);
export default connectedSearchApp;