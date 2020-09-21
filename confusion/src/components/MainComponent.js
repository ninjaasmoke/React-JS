import React from 'react';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import Header from './HeaderComponent';
import FooterComponent from './FooterComponent';
import Home from "./HomeComponent";
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from "./AboutUsComponent";

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dishComponent={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}>
                </DishDetail>
            );
        }

        const AboutUs = () => {
            return (
                <About leaders={this.state.leaders}></About>
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    {/* use exact to only got to /menu when there is no param */}
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route path="/aboutus" component={AboutUs}></Route>
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent />
            </div >
        );
    }
}

export default Main;
