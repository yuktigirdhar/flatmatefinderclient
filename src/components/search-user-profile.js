import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'; 
import { saveCurrentChat } from '../actions/user'
import '../styles/chat-form.css'; 
import '../styles/profile.css'; 
import ChatForm from './chat-form'; 

export class SearchUserProfile extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        displayed: false
      }
  }

  toggleChat() {
    this.setState({
      displayed: !this.state.displayed
    });
  }

  render() {

    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }

    let name; 
    if(this.props.firstName && this.props.lastName){
      name = <div className="search-user-profile-name"><h1>{this.props.firstName} {this.props.lastName}</h1></div>
    }
    let age; 
    if(this.props.age){
      age = <div className="search-user-profile-age"><strong>Age:</strong> {this.props.age}</div>
    }
    let bio; 
    if(this.props.bio){
      bio = <div className="search-user-profile-bio"><strong>Bio:</strong> {this.props.bio}</div>
    }
    let interests; 
    if(this.props.interests){
      interests = <div className="search-user-profile-interests"><strong>Interests:</strong> {this.props.interests}</div>
    }
    let music; 
    if(this.props.music){
      music = <div className="search-user-profile-music"><strong>Music:</strong> {this.props.music}</div>
    }
    let movies; 
    if(this.props.movies){
      movies = <div className="search-user-profile-movies"><strong>Movies:</strong> {this.props.movies}</div>
    }
    let tv; 
    if(this.props.tv){
      tv = <div className="search-user-profile-tv"><strong>TV:</strong> {this.props.tv}</div>
    }
    let looking_for; 
    if(this.props.looking_for){
      if (this.props.looking_for === 'fill_a_room') {
        looking_for = <div className="search-user-profile-looking-for"><strong>Status: </strong>Has a room available for rent</div> 
      } else if (this.props.looking_for === 'find_a_room') {
        looking_for = <div className="search-user-profile-looking-for"><strong>Status: </strong>Looking for a room to rent</div>
      } else {
        looking_for = <div className="search-user-profile-looking-for"><strong>Status: </strong>Looking for a roommate</div>
      }
    }

    let sectionStyle = {
      backgroundImage: `url(${this.props.picture})`, 
    };

    let matchPercentage; 
    if(this.props.match >= 85) {
      matchPercentage = 'match-green';
    }
    else if (this.props.match < 85 && this.props.match >= 75) {
      matchPercentage = 'match-yellow';
    }
    else if (this.props.match < 75 && this.props.match >= 55) {
      matchPercentage = 'match-orange';
    }
    else if (this.props.match < 55) {
      matchPercentage = 'match-red';
    }

    return (
      <div className="search-user-profile">
        <div className="left-section">
          <div style={sectionStyle} className="profile-picture">
          </div>

          <div className="match-section">
            <div className={matchPercentage}>
              <p>{this.props.match}%</p>
            </div>
            <div>
              <p className="match-label">&nbsp;&nbsp;Match</p>
            </div>
            <div className="profile-info-section"> 
              <p>Smokes Cigarettes {this.props.cigarattes ? <i className="fa fa-check yes" aria-hidden="true"></i> : <i className="fa fa-times no" aria-hidden="true"></i>}
              <br />
              Drinks Alcohol {this.props.alcohol ? <i className="fa fa-check yes" aria-hidden="true"></i> : <i className="fa fa-times no" aria-hidden="true"></i>}
              <br />
              Loud Music {this.props.loud_music ? <i className="fa fa-check yes" aria-hidden="true"></i> : <i className="fa fa-times no" aria-hidden="true"></i>}
              <br />
              Has Pets {this.props.pets_have ? <i className="fa fa-check yes" aria-hidden="true"></i> : <i className="fa fa-times no" aria-hidden="true"></i>}
              <br />
              </p>
            </div>
          </div>
        </div>
        <div className="right-section">
          { name }
          <p><strong>Location:</strong> {this.props.city}, {this.props.state}
          <br />
          {age}
          { looking_for }</p>
          <p>
          { bio }
          { interests }
          { music }
          { movies }
          { tv }
          </p>
          <br />
          <button onClick={() => this.toggleChat()} className="button-blue">Message</button>
          <ChatForm displayed={this.state.displayed} onHandleClose={() => this.toggleChat()}/>
          </div>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  if (state.auth.currentUser) {
    return {
      loggedIn: state.auth.currentUser !== null,
      id: state.user.selectedUser.id,
      firstName: state.user.selectedUser.firstName,
      lastName: state.user.selectedUser.lastName,
      city: state.user.selectedUser.city,
      state: state.user.selectedUser.state,
      age: state.user.selectedUser.age,
      bio: state.user.selectedUser.bio,
      interests: state.user.selectedUser.interests,
      music: state.user.selectedUser.music,
      movies: state.user.selectedUser.movies,
      tv: state.user.selectedUser.tv, 
      picture: state.user.selectedUser.picture,
      looking_for: state.user.selectedUser.looking_for, 
      match: state.user.selectedUserMatch,
      username: state.auth.currentUser.username,
      selectedUsername: state.user.selectedUser.username, 
      cigarettes: state.user.selectedUser.cigarettes,
      marijuana: state.user.selectedUser.alt_smoking, 
      pets_have: state.user.selectedUser.pets_have, 
      loud_music: state.user.selectedUser.loud_music, 
      alcohol: state.user.selectedUser.drinking_day_per_week
    }
  }
  return {
    loggedIn: state.auth.currentUser !== null
  }
};

export default connect(mapStateToProps)(SearchUserProfile);