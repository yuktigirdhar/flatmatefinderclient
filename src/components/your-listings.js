import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import { getAllApartments } from '../actions/user';
import {getSelectedUser, setSelectedUserMatch} from '../actions/user';
import ApartmentBlock from './apartment-block';


export class yourListings extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
         this.props.dispatch(getSelectedUser(this.props.username))
    }

    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/login" />;
        }
        // if (this.props.updatedUser) {
        //     return <Redirect to="/dashboard"/>;
        // }
        // if (this.props.loggedIn) {
        //     return <Redirect to="/dashboard" />;
        // }
        console.log("Find apartments page");
        console.log(this.props);

        let images_list = [
                    "https://media.gettyimages.com/photos/building-apartments-picture-id1288941678?k=20&m=1288941678&s=612x612&w=0&h=qOI5byfxYmRVgWpjnI4_7d1k5nq1YH4zXI8JqhrnsDQ=",
                    "https://media.gettyimages.com/photos/luxury-apartments-along-millennium-promenade-in-bristol-picture-id843165570?k=20&m=843165570&s=612x612&w=0&h=nBnh0cKpBXMDczXbQAkRdrlkQplYBIzLKEQDDEdDu5M=",
                    "https://media.gettyimages.com/photos/residential-buildings-near-paulista-street-picture-id160380432?k=20&m=160380432&s=612x612&w=0&h=awkUgC8VrqzHlxCPHd72t7DRoxNTh1OU4tD5w2wr6VI=",
                    "https://media.gettyimages.com/photos/white-south-beach-condo-with-palm-trees-picture-id170615066?k=20&m=170615066&s=612x612&w=0&h=XFUzeGdqoD9U4bVz-uy-QaSC2Cu6OURrEgv0MLKVUuA=",
                    "https://media.gettyimages.com/photos/condominiums-with-swimming-pool-picture-id165581203?k=20&m=165581203&s=612x612&w=0&h=i6Q9KEZ_pDLDZsvqlpIvFSI9HC8No7_6fknbhFJWO3Q=",
                    "https://media.gettyimages.com/photos/row-of-suburban-townhouses-on-summer-day-picture-id108220043?k=20&m=108220043&s=612x612&w=0&h=9UI-_S7KvBeQiyjHqoi3mhQVsl4SuKpvmhv1dzOEBAk="
         ]
        console.log(images_list[0]);

        let userData = this.props.currentUser
        let image = images_list[0]
        let picture;
        let sectionStyle = {
            backgroundImage: `url(${this.props.apartmentpicture})`,
        };
        picture = <div className="profile-picture" style={sectionStyle}>
        </div>;
        return (
                <div>
                  <div className="search-user-profile">
                    <div className="left-section">
                       {picture}
                    </div>
                    <div className="right-section">
                       <div>
                            <br/>
                            <b> Address </b>
                               <br/>
                               {userData.address}
                               <br/>
                               {userData.state} {userData.zipcode}

                           <br/><b> Number of rooms : </b>
                           {userData.numberofrooms}
                           <br/><b> Amenities : </b>
                           {userData.amenities}
                            <b> Price : $</b> {userData.max_price}
                            <br/><br/>
                       </div>
                    </div>
                  </div>
                </div>
        );
    }
}

// state is the global state returned from the reducer used

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    console.log(state.auth.currentUser.numberofrooms);
    console.log(state.auth.currentUser.amenities);
    return {
        loggedIn: state.auth.currentUser !== null,
        username: state.auth.currentUser ? state.auth.currentUser.username : null,
        name: state.auth.currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : null,
        protectedData: state.protectedData.data,
        profileMatches: state.user.profileMatches,
        currentUser: state.auth.currentUser,
        apartments: state.user.apartmentsList,
        apartmentpicture: state.auth.currentUser ? state.auth.currentUser.apartmentpicture : null,
        numberofrooms: state.auth.currentUser ? state.auth.currentUser.numberofrooms : null,
        amenities: state.auth.currentUser ? state.auth.currentUser.amenities : null

    };
};

export default (connect(mapStateToProps)(yourListings));