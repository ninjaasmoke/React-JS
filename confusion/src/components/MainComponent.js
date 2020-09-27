import React from 'react';
import Header from './HeaderComponent';
import FooterComponent from './FooterComponent';
import Home from "./HomeComponent";
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from "./AboutUsComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { postComment, fetchComments, fetchDishes, fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) },
    fetchLeaders: () => { dispatch(fetchLeaders()) },
    postFeedback:
        (firstname, lastname, telnum, email, agree, contactType, message) => { dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)) }
});

class Main extends React.Component {

    constructor(props) {
        super();
        // moved state to redux
    }

    componentDidMount() { // after component is mounted
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();

    }

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMes={this.props.dishes.err}
                    promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMes={this.props.promotions.err}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMes={this.props.leaders.err}
                />
            );
        };

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dishComponent={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMes={this.props.dishes.err}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMes={this.props.comments.err}
                    postComment={this.props.postComment}>
                </DishDetail>
            );
        }

        const AboutUs = () => {
            return (
                <About
                    leaders={this.props.leaders.leaders}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMes={this.props.leaders.err}></About>
            );
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={400}>
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                            {/* use exact to only go to /menu when there is no param */}
                            <Route path="/menu/:dishId" component={DishWithId} />
                            <Route exact path="/contactus" component={() => <Contact
                                resetFeedbackForm={this.props.resetFeedbackForm}
                                postFeedback={this.props.postFeedback} />} />
                            <Route path="/aboutus" component={AboutUs}></Route>
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <FooterComponent />
            </div >
        );
    }
}

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(Main)));
