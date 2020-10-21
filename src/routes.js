import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Landing from './pages/Landing/Landing';
import NotFound from './pages/NotFound/NotFound';

export default function Routes(){
    return(
        <Switch>
            <Route path='/' component={Main} exact></Route>
            <Route path='/presentation' component={Landing} exact></Route>
            <Route path='*' component={NotFound} exact></Route>
        </Switch>
    );
}