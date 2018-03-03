import React from 'react';
import {Search,SearchResult} from './Search';

export class SearchApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data : ['Arul' , 
            'Murugavel', 
            'Sivapriya', 
            'Sajeev', 
            'Ajeesh']}
        this.state.searchText = '';
        this.search = this.search.bind(this);
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
            <SearchResult data={this.state.data} searchText={this.state.searchText} />
            </div>
        )
    }
}