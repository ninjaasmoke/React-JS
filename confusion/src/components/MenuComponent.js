import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuComponent({ dish }) { // functional component
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                {/* use back quotes to add params */}
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardImgOverlay>
                    <CardTitle><h4>{dish.name}</h4></CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <RenderMenuComponent dish={dish}></RenderMenuComponent>
            </div>
        );
    });


    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active="true">Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;