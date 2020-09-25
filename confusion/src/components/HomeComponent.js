import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({ item, isLoading, err }) {
    if (isLoading) {
        return (
            <Loading />
        );
    } else if (err) {
        return (
            <h4>{err}</h4>
        );
    }
    else
        return (
            <Card>
                <CardImg src={item.image} alt={item.name}></CardImg>
                <CardBody>
                    <CardTitle><h4>{item.name}</h4></CardTitle>
                    {item.designation ? <CardSubtitle><h6>{item.designation}</h6></CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
}

function Home(props) {

    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard
                        item={props.dish}
                        isLoading={props.dishesLoading}
                        err={props.dishesErrMes}></RenderCard>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}></RenderCard>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}></RenderCard>
                </div>
            </div>
        </div>
    )
}

export default Home;