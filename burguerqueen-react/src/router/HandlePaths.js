import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TakingOrder } from '../Components/TakingOrder';
import { PageNotFound } from './NotFoundRender';
import { OrdersList } from './KitchenRender';

const Routes = () => (
    <BrowserRouter>
    <Switch>
    <Route path="/" component={TakingOrder} exact={true}/>
    <Route path="/order" component={TakingOrder}/>
    <Route path="/kitchen" component={OrdersList} />
    <Route component={PageNotFound}/>
    </Switch>
      
    </BrowserRouter>
  
  );

  export default Routes;