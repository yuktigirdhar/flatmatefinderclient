import React from 'react';
import { connect } from 'react-redux';
import '../styles/login-form.css';
import '../styles/apartment.css';
import {Link, Redirect} from 'react-router-dom';


export function Apartment(props) {
        // return (
        //     <div>
        //         <h1>Login</h1>
        //     </div>
        // );

        return (
        <div>
            <Link  to="/find-apartments">
                {/* <div onClick={() => this.click("find_a_room")} className="section"> */}
                <div >
                    <h3 id="1"><center>Find Apartments</center></h3>
                </div>
            </Link>
            <Link  to="/list-apartments">
                <div >
                    <h3 id="1"><center>List Apartment</center></h3>
                </div>
            </Link>
            <Link  to="/your-listings">
                {/* <div onClick={() => this.click("find_a_room")} className="section"> */}
                <div >
                    <h3 id="1"><center>Your Listings</center></h3>
                </div>
            </Link>

        </div>

        );
    }

    const mapStateToProps = state => ({
        loggedIn: state.auth.currentUser !== null
    });

    export default connect(mapStateToProps)(Apartment);
