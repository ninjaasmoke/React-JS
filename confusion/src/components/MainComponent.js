import React from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';

class Main extends React.Component {
    constructor(props) {
        super();
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail
                    dishComponent={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                {/* filter is similar to `for each` */}
            </div >
        );
    }
}

export default Main;
