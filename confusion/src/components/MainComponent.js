import React from 'react';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import FooterComponent from './FooterComponent';
import Home from "./HomeComponent";
import Menu from './MenuComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            dishes: DISHES
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent />
            </div >
        );
    }
}

export default Main;
