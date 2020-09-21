import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    if (dish !== null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle><h4>{dish.name}</h4></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}


function RenderComments({ comments }) {
    // return comments.map((comment) => { // my code
    //     return (
    //         <div key={comment.id}>
    //             <CardBody>
    //                 <CardText>{comment.comment}</CardText>
    //                 <CardText>-{comment.author},
    //                      {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</CardText>
    //             </CardBody>
    //         </div>
    //     );
    // }); 

    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const DishDetail = (props) => {
    console.log(props.dishComponent);
    if (props.dishComponent === null || props.dishComponent === undefined)
        return (
            <div></div>
        );
    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dishComponent.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dishComponent.name}</h3>
                    </div>
                </div>
                <h1>Selected Dish</h1>
                <div className="row">
                    <RenderDish dish={props.dishComponent}></RenderDish>
                    <RenderComments comments={props.comments}></RenderComments>
                </div>
            </div>
        );
    }
}

export default DishDetail;