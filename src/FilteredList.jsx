import React, {Component} from "react";
import {DropdownButton, Dropdown} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component{
    constructor(props){
        super(props);
        this.state={
            search: "",
            type: "All"
            //TODO: Add a new key/value pair in the state to keep track of type
        };
    }
    onSearch = (event) => {
        this.setState({search: event.target.value.toLowerCase()});
    }
    filterItem = (item) => {
        //Checks if the currrent search term is contained in this item
        //TODO: Add condition to check item's type
        //return item.name.toLowerCase().search(this.state.search) !== -1;
        return (
            (item.name.toLowerCase().search(this.state.search) !== -1) &&
            (this.state.type === "All" || item.type === this.state.type)
        );
    }
    /* TODO: Add an event handling method for when an item in dropdown is selected
    Per the DropdownButton documentation, this function should take in an eventKey and event
    */
    handleSelect = (eventKey, event) => {
        // Event handling method for when an item in dropdown is selected
        this.setState({ type: eventKey });
    }

    // render(){
    //     return(
    //         <div className="filter-list">
    //             <h1>Produce Search</h1>
    //             <input type="text" placeholder="Search" onChange={this.onSearch}/>
    //             <List items = {this.props.items.filter(this.filterItem)}/>
    //         </div>
    //     )
    // }
    render() {
        return (
            <div className="filter-list">
                <h1>Produce Search</h1>
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                <DropdownButton
                    title={`Filter by Type: ${this.state.type}`}
                    id="dropdown-basic"
                    onSelect={this.handleSelect}
                >
                    <Dropdown.Item eventKey="All">All</Dropdown.Item>
                    <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
                    <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
                </DropdownButton>
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        )
    }
}

export default FilteredList