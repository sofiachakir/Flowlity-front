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
        const url = 'api/v1/products' 
        axios.get(url)
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
                 {this.state.products.map( product => {
                    return (
                        <div className="single-list" key={product.id}>
                            <h4>{product.name}</h4>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ProductsDropdown;