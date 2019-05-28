import React, { Component, Fragment } from 'react';
import Breakfast from './Breakfast';
import Meal from './Meal';
import { OrderComand } from './OrderComand';


export class TakingOrder extends Component {
    

  state= {
    isBreakfastHidden: true,
    isMealHidden: false,
  }


  hideBreakfast = () => {
    this.setState({ isBreakfastHidden: !this.state.isBreakfastHidden})
  }

  showMeal = () => {
    this.setState({ isMealHidden: !this.state.isMealHidden})
  }

  render() {
    return (
      
      <Fragment id="container" className="ButtonContainer">
        <button className="ButtonStyle-1"onClick={this.hideBreakfast}>Desayunos
        </button>
        { !this.state.isBreakfastHidden && <Breakfast/> }
        
        <button className="ButtonStyle-1" onClick={this.showMeal}>Comidas
        </button>
        { this.state.isMealHidden && <Meal/> }
        <OrderComand/>
        </Fragment>
        

    );
  }
}

