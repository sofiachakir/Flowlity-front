import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React from 'react';
import './App.css';
import ProductsDropdown from './components/ProductsDropdown';

function App() {
  return (
    <div className="App">
      
      <ProductsDropdown />
    </div>
  );
}

export default App;
