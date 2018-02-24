import React from 'react';
import {Search,SearchResult} from './Search';

export class SearchApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchResult : "no results"}
        this.search = this.search.bind(this);
    }

    search(searchText){
        console.log('search Text in UP state=', searchText);
        this.setState ({searchResult : "search Result for:" + searchText});
    }

    render() {
        return (
            <div>
            <Search search={this.search}/>
            <SearchResult result={this.state.searchResult}/>
            </div>
        )
    }
}