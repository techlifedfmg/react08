import React, { Component } from 'react'; 
import './App.css'; 
import FilteredList from './FilteredList';

const produce = [
  {name:"Apple", type:"Fruit"},
  {name:"Pineapple", type:"Fruit"},
  {name:"Banana", type:"Fruit"},
  {name:"Pear", type:"Fruit"},
  {name:"Strawberry", type:"Fruit"},
  {name:"Orange", type:"Fruit"},
  {name:"Lettuce", type:"Vegetable"},
  {name:"Eggplant", type:"Vegetable"},
  {name:"Squash", type:"Vegetable"},
  {name:"Bell pepper", type:"Vegetable"},
  {name:"Oninon", type:"Vegetable"},
]
class App extends Component { render() {
     return (
       <div className="App">
         <FilteredList items={produce}/>
         <h3>" https://github.com/React-coding-dev/Search-App-in-React"</h3>
       </div>
     );
   }
}
export default App;
