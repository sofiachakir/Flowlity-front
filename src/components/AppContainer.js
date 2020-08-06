import React, { Component } from 'react';
import ProductsDropdown from './ProductsDropdown';
import InventoryLevel from './InventoryLevel';
import axios from 'axios';

class AppContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedProduct: null,
            inventoryLevels: []
        }
    }   

    handleClick(i) {
        this.setState({
            selectedProduct: i
        })
        const url = 'api/v1/products/'+ i
        axios.get(url)
        .then(response => {
            console.log(response)
            this.setState({
                inventoryLevels: response.data
            })
        })
        .catch(error => console.log(error))
    }


    render() {

        return (
            <>
            <ProductsDropdown onClick={i => this.handleClick(i)} />
            <InventoryLevel 
                selectedProductId={this.state.selectedProduct} 
                inventoryLevels={this.state.inventoryLevels}
            />
            </>
        )
    }
    
}

export default AppContainer;