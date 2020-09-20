import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from "reactstrap";
// import DishDetail from './DishDetailComponent';

class Menu extends React.Component {


    constructor(props) {
        super();

        this.state = {
            // selectedDish: null // moved to maincomponent
        };

    };

    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish });
    // }

    renderDish(dish) {
        if (dish !== null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });


        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {/* <DishDetail dishComponent={this.state.selectedDish}></DishDetail> */}
            </div>
        );


    }
}

export default Menu;