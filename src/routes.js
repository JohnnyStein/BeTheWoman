import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';

export default function Routes(){
    return(
        <Switch>
            <Route path='/' component={Main} exact></Route>
        </Switch>
    );
}