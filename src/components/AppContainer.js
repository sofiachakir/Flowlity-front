import React, { Component } from 'react';
import ProductsDropdown from './ProductsDropdown';
import InventoryLevel from './InventoryLevel';
import Navbar from './Navbar';
import axios from 'axios';

class AppContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedProductId: null,
            selectedProductName: null,
            inventoryLevels: []
        }
    }   

    handleClick(i, name) {
        const url = 'api/v1/products/'+ i + '/inventory_levels'
        axios.get(url)
        .then(response => {
            console.log(response)
            this.setState({
                selectedProductId: i,
                selectedProductName: name,
                inventoryLevels: response.data
            })
        })
        .catch(error => console.log(error))
    }


    render() {

        return (
            <>
            <Navbar />
            <div className="container my-5">
                <ProductsDropdown onClick={(i, name) => this.handleClick(i, name)} />
                <InventoryLevel 
                    selectedProductId={this.state.selectedProductId} 
                    selectedProductName={this.state.selectedProductName}
                    inventoryLevels={this.state.inventoryLevels}
                />
            </div>
            </>
        )
    }
    
}

export default AppContainer;