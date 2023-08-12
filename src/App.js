import React, {Component} from "react";
import CardList from './CardList';
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import './App.css'
import 'tachyons'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    render(){

        const searchChangeFilter = this.state.robots.filter((r) => {
            return r.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="rb">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={searchChangeFilter} />
            </div>
        )
    }
}

export default App;