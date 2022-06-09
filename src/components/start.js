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
        <div id="ourBox" className="start">
             <Link  to="/register">
                {/* <div onClick={() => this.click("find_a_room")} className="section"> */}
                <div onClick={() => this.click("find_a_room")} >
                    <h3 id="1"><center>Looking For Apartment?</center></h3>
                </div>
            </Link>
            <Link  to="/register">
                {/* <div onClick={() => this.click("fill_a_room")} className="section"> */}
                <div onClick={() => this.click("fill_a_room")} >
                    <h3 id="2"><center>List Apartment</center></h3>
                </div>
            </Link>
            <Link  to="/register">
            {/* <div onClick={() => this.click("fill_a_room")} className="section"> */}
                <div onClick={() => this.click("find_a_roommate")} >
                    <h3 id="3"><center>Find your perfect Roommate</center></h3>
                </div>
            </Link>
        </div>
        );
    }
}

export default connect()(Start);

