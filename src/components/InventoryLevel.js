import React from 'react';

function InventoryLevel(props) {
    return (            
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Product Id</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Inventory Level</th>
                </tr>
            </thead>
            <tbody>
                {props.inventoryLevels.map( level => {
                    return (
                        <tr key={level.id}> 
                            <td>{level.product_id}</td>
                            <td>{props.selectedProductName}</td>
                            <td>{level.date}</td>
                            <td>{level.inventory_level}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table> 
    )
}

export default InventoryLevel;