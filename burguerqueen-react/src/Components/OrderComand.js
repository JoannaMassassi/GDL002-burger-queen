import React, { Component } from 'react';



export class OrderComand extends Component {
    constructor(props){
        super(props);
        this.state={
            order:[],
            cant:[],
            total: 0
        };
    }
    add(name, price){
        let isNew= true;
        let order= {
            cant: 1,
            name: name,
            price: price
        }
    }

    
    render(){
        return(
            <div className="menu">
            <div className='logo'>
            <h1>Burger Queen</h1>
            </div>
        
                <div className="screenOrder">
                <h1>Pedidos</h1>
                    <table>
                        <tr>
                            <th>Cantidad</th>
                            <th>Producto</th>       
                            <th>Precio</th><th></th>
                        </tr>
                        {this.state.order.map((menu, i) =>
                            <tr>
                                <td>{menu.cant}</td>
                                <td>{menu.name}</td>
                                <td>${menu.price}</td>
                            </tr>
                        )}
                        <tr>
                                <td>
                                    Total
                                </td>
                                <td>${this.state.total}</td>
                        </tr>
                           
                        </table>
                  </div>
                  <div>
                  </div>
            </div>
                                 
        )
    }
   
}

