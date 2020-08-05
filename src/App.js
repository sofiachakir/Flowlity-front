import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsDropdown from './components/ProductsDropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Flowlity</h1>
      </header>
      <ProductsDropdown />
    </div>
  );
}

export default App;
