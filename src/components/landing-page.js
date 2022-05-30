import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import '../styles/landing-page.css'; 
import LoginForm from './login-form';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            howItWorksDisplayed: false, 
            aboutUsDisplayed: false,
            technologyDisplayed: false, 
            buttonsDisplayed: true
        }
    }

    handleHowItWorksDisplay() {
        this.setState({
            howItWorksDisplayed: !this.state.howItWorksDisplayed,
            buttonsDisplayed: !this.state.buttonsDisplayed
        }); 
    }

    handleAboutUsDisplay() {
        this.setState({
            aboutUsDisplayed: !this.state.aboutUsDisplayed,
            howItWorksDisplayed: false,
            technologyDisplayed: false,
            buttonsDisplayed: !this.state.buttonsDisplayed
        }); 
    }

    handleTechnologyDisplay() {
        this.setState({
            technologyDisplayed: !this.state.technologyDisplayed,
            aboutUsDisplayed: false,
            howItWorksDisplayed: false,
            buttonsDisplayed: !this.state.buttonsDisplayed
        }); 
    }
    
    render() {
        let howItWorks, buttons, aboutUs, Technology; 
        if(this.state.howItWorksDisplayed) {
            howItWorks = (
                <div className="popout-section">
                    <h1>Know more</h1>
                    <p>
                    To start the process, create an account using the links above or by clicking <Link className="login-link" to="/start">here</Link>.
                    </p>
                    <button className="button-dark" onClick={() => this.handleHowItWorksDisplay()}>Close</button>
                </div>
            )
        }
        if(this.state.technologyDisplayed) {
            howItWorks = (
                <div className="popout-section">
                    <h1>Tools Used</h1>
                    <p>This application was constructed using ES6, React, Redux, Node, Express, MongoDB, Mongoose, Cloudinary, Google Maps API, Mailgun.
                    </p>
                    <button className="button-dark" onClick={() => this.handleTechnologyDisplay()}>Close</button>
                </div>
            )
        }
        if(this.state.aboutUsDisplayed) {
            howItWorks = (
                <div className="popout-section">
                    <h1>Contact Us</h1>
                    <p>
                        For more information contact flatmatefinder@uci.edu
                    </p>
                    <button className="button-dark" onClick={() => this.handleAboutUsDisplay()}>Close</button>
                </div>
            )
        }
        if(this.state.buttonsDisplayed) {
            buttons = (
            <div className="button-outer-wrapper">
                <div onClick={() => this.handleHowItWorksDisplay()} className="button-wrapper">
                    <div className="button-inner-left">
                        <i className="fa-solid fa-brain-circuit" aria-hidden="true"></i>
                    </div>
                    <div className="button-inner-right">
                        <h2 className="button-label" onClick={() => this.handleHowItWorksDisplay()}>Know more</h2>
                    </div>
                </div>
                <div onClick={() => this.handleTechnologyDisplay()} className="button-wrapper">
                    <div className="button-inner-left">
                        <i className="fa-solid fa-brain-circuit" aria-hidden="true"></i>
                    </div>
                    <div className="button-inner-right">
                        <h2 className="button-label" onClick={() => this.handleTechnologyDisplay()}>Tools Used</h2>
                    </div>
                </div>
                <div onClick={() => this.handleAboutUsDisplay()} className="button-wrapper">
                    <div className="button-inner-left">
                        <i className="fa-solid fa-brain-circuit" aria-hidden="true"></i>
                    </div>
                    <div className="button-inner-right">
                        <h2 className="button-label" onClick={() => this.handleAboutUsDisplay()}>Contact Us</h2>
                    </div>
                </div>
            </div>
            ); 
        }
        return (
            <div>
            {buttons}
            {howItWorks}
            <div className="padding20">
            </div>
                <div className="landing-page">
                    <div className="text-section">

                        <div className="bunkup-logo">

                        </div>
                        <p>Find your home away from home</p>
                        <Link to="/start"><button className="button-blue">Get Started</button></Link>
                        <div>
                        <p>Already have an account? <span className="login-link"><Link to="/login">Login</Link></span></p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

