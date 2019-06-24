import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './shared/Dishes';
import './App.css';
import Menu from './components/Menu';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
         <div className="container">
          <NavbarBrand href="#">Anakara Raki Balikyar</NavbarBrand>
         </div>
        </Navbar>
  
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}
export default App;
