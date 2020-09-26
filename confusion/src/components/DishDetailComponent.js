import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem, ModalHeader, Button, Modal, ModalBody, Label, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


// checking for errors
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommmentForm extends Component {
    constructor(props) {
        super();
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.props.addComment(this.props.dishId, values.rating, values.authorname, values.message);
        this.toggleModal();
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add a comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Col className="form-group">

                                <Label htmlFor="rating"><h5>Rating</h5></Label>
                                <Control.select model=".rating"
                                    className="form-control"
                                    defaultValue="5"
                                    name="rating">
                                    <option>5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                </Control.select>
                                <br></br>

                                <Label htmlFor="authorname"><h5>Your Name</h5></Label>
                                <Control.text model=".authorname" id="authorname" name="authorname"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    placeholder="Enter your name" />
                                <Errors
                                    className="text-danger"
                                    model=".authorname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 3 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                                <br></br>

                                <Label htmlFor="feedback"><h5>Your Feedback</h5></Label>
                                <Control.textarea rows={6} model=".message" id="message" name="message"
                                    className="form-control" />
                                <br></br>

                                <Button type="submit" color="primary">
                                    Post
                                    </Button>
                            </Col>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Submit Comment</Button>
            </div>
        )
    }
}


function RenderDish({ dish }) {
    if (dish !== null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}></CardImg>
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


function RenderComments({ comments, addComment, dishId }) {

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
            <CommmentForm
                addComment={addComment}
                dishId={dishId} />
        </div>
    );
}

const DishDetail = (props) => {
    if (props.dishComponent === null || props.dishComponent === undefined || props.isLoading)
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    else if (props.err) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.err}</h4>
                </div>
            </div>
        );
    }
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
                <div className="row">
                    <RenderDish dish={props.dishComponent}></RenderDish>
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dishComponent.id}></RenderComments>
                </div>
            </div>
        );
    }
}

export default DishDetail;
