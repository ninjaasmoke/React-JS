import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderMenuComponent({ dish, onClick }) { // functional component
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
                <CardTitle><h4>{dish.name}</h4></CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <RenderMenuComponent dish={dish} onClick={props.onClick}></RenderMenuComponent>
            </div>
        );
    });


    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;