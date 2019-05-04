import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
       <div className="container">
        <NavbarBrand href="#">Anakara Raki Balikyar</NavbarBrand>
       </div>
      </Navbar>

      <Menu></Menu>
    </div>
  );
}



export default App;
