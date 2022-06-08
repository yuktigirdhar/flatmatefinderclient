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
                    <p>This application was constructed using ES6, React, Node, Express, MongoDB, Mongoose, Cloudinary, Google Maps API, Mailgun.
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
                        For more information contact bunkup@uci.edu
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
                <div>
                    <div className="cater3-movingBG">
                        <div className="flyinTxtCont">
                            <div className="flyIn lineOne">Bunk Up</div>
                            {/*<div className="flyIn lineTwo">Find your perfect apartment and roommates</div>*/}
                            {/*<div className="flyIn lineThree">Your personal real estate assistant</div>*/}
                            <div className="flyIn lineFour">Find your perfect apartment and roommates</div>
                            <div className="flyIn lineFive">
                                <Link to="/start"><button className="button-blue">Get Started</button></Link>

                                <div>
                                    <p>Already have an account? <span className="login-link"><Link to="/login">Login</Link></span></p>
                                </div>
                            </div>


                        </div>
                    </div>
                <br/>
                    {/*<nav className="navbar navbar-expand-lg">*/}

                    {/*    <div className="container">*/}
                    {/*        <a className="navbar-brand text-white" href="#"><i*/}
                    {/*            className="fa fa-home fa-lg mr-2"></i>BUNK UP</a>*/}
                    {/*        <button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                    {/*                data-target="#nvbCollapse" aria-controls="nvbCollapse">*/}
                    {/*            <span className="navbar-toggler-icon"></span>*/}
                    {/*        </button>*/}

                    {/*        <div className="collapse navbar-collapse" id="nvbCollapse">*/}
                    {/*            <ul className="navbar-nav ml-auto">*/}
                    {/*                <li className="nav-item pl-1">*/}
                    {/*                    <a className="nav-link" href="#"><i className="fa fa-user fa-fw mr-1"></i>Your personal real estate assistant</a>*/}
                    {/*                </li>*/}

                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</nav>*/}

                </div>
                {/*<nav className="navbar navbar-expand-lg navbar-light fixed-top">*/}
                {/*</nav>*/}
                {/*<div className="landing-page">*/}
                {/*    <div className="text-section">*/}

                {/*        <div className="bunkup-logo">*/}

                {/*        </div>*/}
                {/*        <p>Find your home away from home</p>*/}
                {/*        <Link to="/start"><button className="button-blue">Get Started</button></Link>*/}
                {/*        <div>*/}
                {/*            <p>Already have an account? <span className="login-link"><Link to="/login">Login</Link></span></p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-700" src="https://i.postimg.cc/Xv4TpZ9c/darkhouse3.jpg" alt="First slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>
                                        All In One Platform </h5>
                                    <p className="carousel-text-content">
                                        Single-stop platform for finding apartments as well as roommates </p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-700" src="https://i.postimg.cc/fyKWp47Y/darkhouse7.jpg" alt="Second slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>
                                        Forget about your moving stress
                                        </h5>
                                    <p className="carousel-text-content">
                                        Hassle-free search with relevant, quick results.</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-700" src="https://i.postimg.cc/MHcj8pT1/darkhouse4.jpg" alt="Third slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>
                                        Match scores</h5>
                                    <p className="carousel-text-content">
                                       Provides percentage match score of your relevant matches</p>
                                </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


                <div>
                    {buttons}
                    {howItWorks}

                </div>
                <div className="footer-basic">
                    <footer>
                        <div className="social"><a href="#"><i className="fa fa-instagram"></i></a><a
                            href="#"><i className="fa fa-snapchat"></i></a><a href="#"><i
                            className="fa fa-twitter"></i></a><a href="#"><i
                            className="fa fa-facebook"></i></a></div>
                        <p className="copyright">bunkup@uci.edu</p>
                    </footer>
                </div>
            </div>
        );
    }
}

