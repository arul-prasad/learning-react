import React from 'react';
import {Search,SearchResult} from './Search';
import axios from 'axios';

export class SearchApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {experts : []};
        //this.state  = {};
        this.search = this.search.bind(this);
    }

    componentWillMount() {
        axios.get('/experts')
            .then(function(response) {
                console.log(response);
                this.setState(
                    { experts: response.data.experts }
                );
            }.bind(this));
    }

    search(searchText){
        console.log('search Text in UP state=', searchText);
        this.setState ({
            searchText : searchText
        });
    }

    render() {
        return (
            <div>
            <Search search={this.search}/>
            <SearchResult data={this.state.experts} searchText={this.state.searchText} />
            </div>
        )
    }
}