import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

class DishDetail extends React.Component {

    constructor(props) {
        super();
        this.state = {};
    }

    renderComments(comments) {
        return comments.map((comment) => {
            return (
                <div key="comment.id">
                    <CardBody>
                        <CardText>{comment.comment}</CardText>
                        <CardText>-{comment.author}, {comment.date}</CardText>
                    </CardBody>
                </div>
            );
        });
    }

    render() {
        if (this.props.dishComponent === null)
            return (
                <div></div>
            );
        else {
            return (
                <div className="container">
                    <h1>Selected Dish</h1>
                    <div className="row">
                        <Card className='col-12 col-md-5 m-1 p-0'>
                            <CardImg width="100%" src={this.props.dishComponent.image} alt={this.props.dishComponent.name}></CardImg>
                            <CardBody>
                                <CardTitle>{this.props.dishComponent.name}</CardTitle>
                                <CardText>{this.props.dishComponent.description}</CardText>
                            </CardBody>
                        </Card>
                        <Card className='col-12 col-md-5 m-1'>
                            <h4 >Comments</h4>
                            {this.renderComments(this.props.dishComponent.comments)}
                        </Card>
                    </div>
                </div>
            );
        }
    };
}

export default DishDetail;