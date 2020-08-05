import React, { Component } from 'react';
import axios from 'axios';

class ProductsDropdown extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }    

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/products.json')
        .then(response => {
            console.log(response)
            this.setState({
                products: response.data
            })
        })
        .catch(error => console.log(error))
    }    

    render() {
        return (
            <div className="Lists-container">
                {this.state.products}
            </div>
        )
    }
}

export default ProductsDropdown;