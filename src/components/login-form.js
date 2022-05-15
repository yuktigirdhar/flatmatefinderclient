import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Link, Redirect} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {getSelectedUser} from '../actions/user';
import { PulseLoader } from 'react-spinners'; 
import '../styles/login-form.css'; 

export class LoginForm extends React.Component {
    
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password))
        .then(() => this.props.dispatch(getSelectedUser(values.username)))
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div className="limited-width login-container">
                <h1>Login</h1>
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}
                    <div className="form-section-small">
                        <Field
                            component={Input}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            validate={[required, nonEmpty]}
                        />
                    </div>    
                    <div className="form-section">
                        <Field
                            component={Input}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            validate={[required, nonEmpty]}
                        />
                    </div>
                    <button className="button-blue" disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                    <PulseLoader color={'#fff'} loading={this.props.loading} className="loading-graphic" />
                    
                </form>
                <p><Link className="login-link" to="/">Back</Link></p>
                <p><Link className="login-link" to="/start">Create Account</Link></p>   
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    loading: state.auth.loading
});

export default compose(
    connect(mapStateToProps),
    reduxForm({ form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')) 
}))(LoginForm);
