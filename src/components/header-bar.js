import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';
import '../styles/header-bar.css';  

export class HeaderBar extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            mobileNavDisplayed: false
        }
    }

    handleMobileNav() {
        this.setState({mobileNavDisplayed: !this.state.mobileNavDisplayed})
    }

    handleLogOut() {
        this.handleMobileNav();
        this.logOut(); 
    }
    
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <p className="nav-item" onClick={() => this.logOut()}>Log out</p>
            );
        }
        let questionsButton; 
        if (this.props.loggedIn) {
            questionsButton = (
                <p className="nav-item"><Link to="/questions">Questions</Link></p>
            )
        }
        let dashboardButton; 
        if(this.props.loggedIn) {
            dashboardButton = (
                <p className="nav-item"><Link to="/dashboard">Dashboard</Link></p>
            )
        }
        let profileButton; 
        if(this.props.loggedIn) {
            profileButton = (
                <p className="nav-item"><Link to="/profile">Profile</Link></p>
            )
        }

        // let mobileNav; 
        // if(this.state.mobileNavDisplayed && this.props.loggedIn) {
        //     mobileNav = <div className="mobile-nav">
        //         <p className="nav-item-mobile" onClick={() => this.handleLogOut()}>Log out</p>
        //         <p className="nav-item-mobile" onClick={() => this.handleMobileNav()}><Link to="/questions">Questions</Link></p>
        //         <p className="nav-item-mobile" onClick={() => this.handleMobileNav()}><Link to="/dashboard">Dashboard</Link></p>
        //         <p className="nav-item-mobile" onClick={() => this.handleMobileNav()}><Link to="/profile">Profile</Link></p>
        //     </div>
        // }

        const mobileNavClasses = ['mobile-nav'];
        const mobileNavItemClasses = ['nav-item-mobile']; 
        if (this.state.mobileNavDisplayed && this.props.loggedIn) {
            mobileNavClasses.push('show');
            mobileNavItemClasses.push('show')
        }

        let hamburger; 
        if(this.props.loggedIn) {
            hamburger = <div onClick={() => this.handleMobileNav()} className="hamburger-container">
                <div id="ham1" className="hamburger-stripe">
                </div>
                <div id="ham2" className="hamburger-stripe">
                </div>
                <div id="ham3" className="hamburger-stripe">
                </div>                        
            </div>
        }

        return (
            <div>
                <div className="header-bar">
                        {logOutButton}
                        {questionsButton}
                        {dashboardButton}
                        {profileButton}
                        {hamburger}
                </div>
                <div className={mobileNavClasses.join(' ')}>
                    <p className={mobileNavItemClasses.join(' ')} onClick={() => this.handleLogOut()}>Log out</p>
                    <p className={mobileNavItemClasses.join(' ')} onClick={() => this.handleMobileNav()}><Link to="/questions">Questions</Link></p>
                    <p className={mobileNavItemClasses.join(' ')} onClick={() => this.handleMobileNav()}><Link to="/dashboard">Dashboard</Link></p>
                    <p className={mobileNavItemClasses.join(' ')} onClick={() => this.handleMobileNav()}><Link to="/profile">Profile</Link></p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
