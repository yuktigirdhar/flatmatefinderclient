import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {setLookingFor} from '../actions/user';
import '../styles/start.css'; 

export  class Start extends React.Component {

    click(looking_for) {
        this.props.dispatch(setLookingFor(looking_for));
    }

    render(){
        return (
            <div>

        <div id="ourBox" className="start-it">
            <br/>
             <Link  to="/register">
                {/* <div onClick={() => this.click("find_a_room")} className="section"> */}
                <div className="ourBoxItem" onClick={() => this.click("find_a_room")} >
                    <h3 id="1"><center>Looking For Apartment?</center></h3>
                </div>
            </Link>
            <br/>
            <Link  to="/register">
                {/* <div onClick={() => this.click("fill_a_room")} className="section"> */}
                <div className="ourBoxItem" onClick={() => this.click("fill_a_room")} >
                    <h3 id="2"><center>List Apartment</center></h3>
                </div>
            </Link>
            <br/>
            <Link  to="/register">
            {/* <div onClick={() => this.click("fill_a_room")} className="section"> */}
                <div className="ourBoxItem" onClick={() => this.click("find_a_roommate")} >
                    <h3 id="3"><center>Find your perfect Roommate</center></h3>
                </div>
            </Link>
            <br/>
        </div>

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
        );
    }
}

export default connect()(Start);

