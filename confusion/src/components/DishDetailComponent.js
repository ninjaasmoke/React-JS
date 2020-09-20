import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

// class DishDetail extends React.Component {


function RenderDish({ dish }) {
    if (dish !== null) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle><h4>{dish.name}</h4></CardTitle>
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


function RenderComments({ comments }) {
    return comments.map((comment) => {
        return (
            <div key="comment.id">
                <CardBody>
                    <CardText>{comment.comment}</CardText>
                    <CardText>-{comment.author},
                         {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</CardText>
                </CardBody>
            </div>
        );
    });
}

const DishDetail = (props) => {
    if (props.dishComponent === null || props.dishComponent === undefined)
        return (
            <div></div>
        );
    else {
        return (
            <div className="container">
                <h1>Selected Dish</h1>
                <div className="row">
                    <Card className='col-12 col-md-5 m-1 p-0'>
                        <RenderDish dish={props.dishComponent}></RenderDish>
                    </Card>
                    <Card className='col-12 col-md-5 m-1'>
                        <h4 >Comments</h4>
                        <RenderComments comments={props.dishComponent.comments}></RenderComments>
                    </Card>
                </div>
            </div>
        );
    }
}

export default DishDetail;