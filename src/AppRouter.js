import React from 'react';
import Main from './Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
let AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Main} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;