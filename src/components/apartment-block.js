import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {getSelectedUser, setSelectedUserMatch} from '../actions/user';
import {Redirect, Link} from 'react-router-dom';

import '../styles/match.css';

export class ApartmentBlock extends React.Component {

    handleMatchClick() {
        this.props.dispatch(getSelectedUser(this.props.apartmentuser.username))
            .then(() => this.props.dispatch(setSelectedUserMatch(this.props.apartmentuser.score)))
    }
    render() {
        if (this.props.redirectDisplayed) {
            return <Redirect to="/search-user-profile" />;
        }
        console.log("apartment-block");
        console.log(this.props);
        return (
            <div>
                <div className="member">
                    <img src={this.props.apartmentuser.apartmentpicture} className="img-find-apartments"
                         alt="Responsive image"/>
                    <div>
                        <br/>
                        <b> Address </b>
                            <br/>
                            {this.props.apartmentuser.address}
                            <br/>
                            {this.props.apartmentuser.state} {this.props.apartmentuser.zipcode}
                            <br/><br/>
                        <b> Price : $</b> {this.props.apartmentuser.max_price}
                        <br/><br/>
                        <div onClick={() => this.handleMatchClick()} className="contact-block">
                        <b> Contact : </b> {this.props.apartmentuser.firstName} {this.props.apartmentuser.lastName} <br/><br/>{this.props.apartmentuser.email}
                        </div>
                    </div>
                </div>
           </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        redirectDisplayed: state.user.redirectDisplayed,
        username: state.auth.currentUser ? state.auth.currentUser.username : null,
    };
};

export default (connect(mapStateToProps)(ApartmentBlock));
