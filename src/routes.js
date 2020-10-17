import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Landing from './pages/Landing/Landing';

export default function Routes(){
    return(
        <Switch>
            <Route path='/' component={Main} exact></Route>
            <Route path='/presentation' component={Landing} exact></Route>

        </Switch>
    );
}