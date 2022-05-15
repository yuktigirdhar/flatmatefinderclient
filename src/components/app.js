import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Start from './start';
import LoginForm from './login-form';
import Dashboard from './dashboard';
import Questions from './questions';
import UserProfile from './user-profile';
import RegistrationPage from './registration-page';
import searchUserProfile from './search-user-profile'; 
import {refreshAuthToken} from '../actions/auth';
import { Transition } from 'react-transition-group'; 
import '../styles/app.css'; 

export class App extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {

        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 }
        }

        return (
            <Transition in={true} timeout={600} appear={true}>
            {(state) => (
                <div className="app" style={{
                    ...transitionStyles[state]
                }}>
                    <HeaderBar />
                    <div className="view-window">
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/login" component={LoginForm} />
                        <Route exact path="/start" component={Start} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/register" component={RegistrationPage} />
                        <Route exact path="/questions" component={Questions} />
                        <Route exact path="/profile" component={UserProfile} />
                        <Route exact path="/search-user-profile" component={searchUserProfile} />
                    </div>
                </div>
            )}
            </Transition>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
