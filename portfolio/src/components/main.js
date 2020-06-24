import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Highlights from './highlights';
import Portraiture from './portraiture';
import Contact from './contact';
import Locations from './locations';

//Rendered de componenten om door naar de URL te kijken.
const Main = () => (
    <Switch>
        <Route exact path="/buildP" component={Highlights} />
        <Route path="/buildP/portraiture" component={Portraiture} />
        <Route path="/buildP/contact" component={Contact} />
        <Route path="/buildP/locations" component={Locations} />
    </Switch>
)

export default Main;