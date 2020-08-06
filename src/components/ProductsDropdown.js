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
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Product
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                {this.state.products.map( product => {
                    return (
                        <div className="dropdown-item" key={product.id}>
                            <h4>{product.name}</h4>
                        </div>
                    )
                })}
              </div>
            </div>
        )
    }
}

export default ProductsDropdown;