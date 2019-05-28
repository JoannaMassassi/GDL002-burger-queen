import React, { Component, Fragment } from 'react';
import breakfast from '../data/breakfastMenu.json';
import { OrderComand } from './OrderComand';


class Breakfast extends Component {

    render() {
        return (
            <Fragment >
                {breakfast.map((breakfastItem) => {
                    return <button onClick={OrderComand} className="ButtonStyle" >{breakfastItem.name} {breakfastItem.price}</button>
                })}
            </Fragment>
    
        )
    }
}

export default Breakfast;
