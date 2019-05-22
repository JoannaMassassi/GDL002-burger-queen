import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TakingOrder } from './TakeOrder';
import { PageNotFound } from './NotFound';
import { OrdersList } from './Kitchen';

const Routes = () => (
    <BrowserRouter>
    <Switch>
    <Route path="/order" component={TakingOrder} exact={true}/>
    <Route path="/kitchen" component={OrdersList} />
    <Route component={PageNotFound}/>
    </Switch>
      
    </BrowserRouter>
  
  );

  export default Routes;