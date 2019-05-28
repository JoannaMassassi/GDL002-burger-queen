import React, { Component, Fragment } from 'react';
import meal from '../data/mealMenu.json';

class Meal extends Component {

    render() {

        return (
            <Fragment>
                {meal.map((mealItem) => {
                    return <button className="ButtonStyle">{mealItem.name} {mealItem.price}</button>
                })}
            </Fragment>
    
        )
    }
}


export default Meal;
