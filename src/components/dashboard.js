import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import { getAllUsers } from '../actions/user';
import { resetUpdatedUser } from '../actions/auth';
import { Redirect, Link } from 'react-router-dom';
import '../styles/dashboard.css';
import Match from './match';
import DisplayMap from './google-map';

export class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            dataPerPage: 5
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    handleNext() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }
    handlePrevious() {
        this.setState({
            currentPage: this.state.currentPage - 1
        });
    }
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        this.props.dispatch(resetUpdatedUser())
        const user = this.props.currentUser
        this.props.dispatch(getAllUsers(user));
    }

    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/login" />;
        }

        let currentMatches = this.props.profileMatches.map((match, index) => (
            <Match key={index} user={match} />
        ));

        const { currentPage, dataPerPage } = this.state;
        for (let i = 0; i < currentMatches.length; i++) {
                if(currentMatches[i].props.user.username == this.props.currentUser.username)
                    var spliced = currentMatches.splice(i, 1);
        }
        const indexOfLastData = currentPage * dataPerPage;
        const indexOfFirstData = indexOfLastData - dataPerPage;

        let renderCurrent;
        if (this.props.profileMatches.length === 0){
           renderCurrent = <p>Sorry, there are no apartments or roommates that match your search critera.</p>
        }
        else {
            renderCurrent = currentMatches.slice(indexOfFirstData, indexOfLastData);
        }

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(currentMatches.length / dataPerPage); i++) {
            pageNumbers.push(i);
        }
        const next = (pageNumbers.length > currentPage) ? <i className="fa fa-arrow-circle-right pagination-navigation" onClick= {() => this.handleNext()} aria-hidden="true"></i> : null;
        const previous = (currentPage > 1) ? <i className="fa fa-arrow-circle-left pagination-navigation" onClick= {() => this.handlePrevious()} aria-hidden="true"></i>: null;


        let renderPageNumbers;
        if (pageNumbers.length > 1) {
        renderPageNumbers = pageNumbers.map(number => {
                return (
                    <li className="pagination-number" key={number} id={number} onClick={this.handleClick}>
                        {number}
                    </li>
                );
            });
        }

        let displayMap;
        if (this.props.currentUser.lat === undefined){
            displayMap = <div className="message-container">
                <h1>Get Started</h1>
                <p> Please fill out the question form in navigation bar or <Link to="/questions">here</Link>.</p>
            </div>
        }
        else {
            displayMap = <div className="map-container" id="js-map"><DisplayMap/></div>
        }

        return (

            <div>
            <div className="start-dashboard">
            <div className="abc">FIND YOUR COMFORT ZONE</div><br/>
            <div className="abc">
              <span>WITH BUNK UP</span>
            </div>
            </div>



            <div className="top-box">
            <div className="top">Our flatmate/apartment finder platform helps users who want to relocate to<br/>
             a foreign land by providing a one-stop platform to find compatible apartments/flatmates based on<br/>
             their preferences and assisting them to have a smooth, stress-free transition<br/>
             to their desired destination.</div>
</div>
            <br/><br/><br/>
            <div>
            <div className="slideshow">
               <div className="content">
                  <div className="slider-content">
                     <div className="shadow pic1"></div>
                     <div className="shadow pic2"></div>
                     <div className="shadow pic3"></div>
                     <div className="shadow pic4"></div>
                     <div className="shadow pic5"></div>
                     <div className="shadow pic6"></div>
                     <div className="shadow pic7"></div>
                     <div className="shadow pic8"></div>
                     <div className="shadow pic9"></div>
                     <div className="shadow pic10"></div>
                  </div>
               </div>
            </div>
            </div>
            <div className="mid">



            </div>




                <br/>
                <div> {displayMap}</div>

                {/*<div class="row">*/}
                {/*    <br/><br/>*/}
                {/*    <h2> Your matches </h2>*/}
                {/*    {renderCurrent}*/}
                {/*    <ul id='page-numbers'>*/}
                {/*        {previous}*/}
                {/*        {renderPageNumbers}*/}
                {/*        {next}*/}
                {/*    </ul>*/}
                {/*</div>*/}

            <div> <br/> </div>

<br/><br/><br/>
                <div className="dashboard">
                <h2><b><center>YOUR MATCHES</center></b></h2>
                <br/>
                    <div className="matches">

                    {renderCurrent}
                    <ul id='page-numbers'>
                        {previous}
                        {renderPageNumbers}
                        {next}
                    </ul>
                </div>
                </div>

            </div>
            <div className="videoContent">
                            <video id="background-video" autoPlay loop muted poster="https://i.postimg.cc/Cxv074xk/home.jpg">
                                <source src="https://rr4---sn-a5mekn6s.googlevideo.com/videoplayback?expire=1654776091&ei=u4yhYoqDHpOa2_gPhv6TwAw&ip=209.107.196.27&id=o-AFc105mFhoajK7VRp_GBFIo7PreviBBVgrOqXDhywM0z&itag=134&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&spc=4ocVCxjPBL_u42kxzKeK6VfCDvR7Xtw&vprv=1&mime=video%2Fmp4&ns=9pjzhng0_MhwR32u5GWqeRQG&gir=yes&clen=2395203&otfp=1&dur=31.464&lmt=1605187957789558&keepalive=yes&fexp=24001373,24007246&c=WEB&n=C94C5mwOnIAh9Q&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cotfp%2Cdur%2Clmt&sig=AOq0QJ8wRAIgTBbcETVP8J_lxM_hFa_Ro7Gwo4JJiAHdvoJtDaS05gACIAyExS65CbsQQ-1QkWPByjCWYtmp08fkwRlE3FNLEm3J&redirect_counter=1&cm2rm=sn-5uakl76&req_id=e15935df525fa3ee&cms_redirect=yes&cmsv=e&mh=Xq&mip=2600:8802:270d:9800:b1da:fa3f:758e:10f8&mm=34&mn=sn-a5mekn6s&ms=ltu&mt=1654754436&mv=m&mvi=4&pl=35&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgHFxJMyH4t0-6wQrj-_X1P44H_Qnk21inlP0nyRHMT84CIArKFUpIExpZwl2d_-Vh3Qaw4G6tEejv7A05lbWwCT5y" type="video/mp4"/>
                            </video>

                            {/*<h1>THIS IS A RIVER.</h1>*/}
                            {/*<h2>How majestic.</h2> */}
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

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        loggedIn: state.auth.currentUser !== null,
        username: state.auth.currentUser ? state.auth.currentUser.username : null,
        name: state.auth.currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : null,
        protectedData: state.protectedData.data,
        profileMatches: state.user.profileMatches,
        currentUser: state.auth.currentUser
    };
};

export default (connect(mapStateToProps)(Dashboard));
