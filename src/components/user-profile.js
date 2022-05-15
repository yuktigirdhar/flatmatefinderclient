import React from 'react';
import { connect } from 'react-redux';
import { saveQuestions } from '../actions/user';
import {Redirect} from 'react-router-dom'; 
import '../styles/profile.css';
import ImageUpload from './image-upload'; 

export class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityInputDisplayed: false,
      stateInputDisplayed: false,
      ageInputDisplayed: false,
      bioInputDisplayed: false,
      interestsInputDisplayed: false,
      musicInputDisplayed: false,
      movieInputDislayed: false,
      tvInputDisplayed: false,
      pictureInputDisplayed: false,
    }
  }
  


  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
  }
    const user = {}
    user.username = this.props.username
    this.props.dispatch(saveQuestions(user))
  }

  closeForm(){
    this.setState({
      cityInputDisplayed: false,
      stateInputDisplayed: false,
      ageInputDisplayed: false,
      bioInputDisplayed: false,
      interestsInputDisplayed: false,
      musicInputDisplayed: false,
      movieInputDislayed: false,
      tvInputDisplayed: false, 
      pictureInputDisplayed: false
    }); 
  }
 
  handleFormSubmit(event, nextField) {
    event.preventDefault();
    const user = {}
    if (nextField === 'state') {
      user.state = this.stateInput.value
    } else if (nextField === 'picture') {
      user[nextField] = this.state.file
      user.username = this.props.username
      return this.closeForm();
    } else {
      user[nextField] = this[nextField].value
    }
    user.username = this.props.username
    this.props.dispatch(saveQuestions(user))
    this.closeForm(); 
  }

  handleCityInputToggle() {
    this.closeForm();
    this.setState({ cityInputDisplayed: !this.state.cityInputDisplayed })
  }
  handleStateInputToggle() {
    this.closeForm(); 
    this.setState({ stateInputDisplayed: !this.state.stateInputDisplayed })
  }
  handleAgeInputToggle() {
    this.closeForm();
    this.setState({ ageInputDisplayed: !this.state.ageInputDisplayed })
  }
  handleBioInputToggle() {
    this.closeForm();
    this.setState({ bioInputDisplayed: !this.state.bioInputDisplayed })
  }
  handleInterestsInputToggle() {
    this.closeForm();
    this.setState({ interestsInputDisplayed: !this.state.interestsInputDisplayed })
  }
  handleMusicInputToggle() {
    this.closeForm();
    this.setState({ musicInputDisplayed: !this.state.musicInputDisplayed })
  }
  handleMovieInputToggle() {
    this.closeForm();
    this.setState({ movieInputDislayed: !this.state.movieInputDislayed })
  }
  handleTvInputToggle() {
    this.closeForm();
    this.setState({ tvInputDisplayed: !this.state.tvInputDisplayed })
  }
  handlePictureInputToggle() {
    this.closeForm();
    this.setState({ pictureInputDisplayed: !this.state.pictureInputDisplayed })
  }
  
  render() {

    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }

    // controls form display for all inputs
    let state, city, age, movies, music, tv, interests, bio, nextField, picture;
    if (this.state.cityInputDisplayed) {
      nextField = 'city'
      city = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" placeholder="City" ref={input => this.city = input}></input>
        <button className="button-inline" type="submit">Save</button>
        <i className="fa fa-times-circle" aria-hidden="true" onClick={() => this.closeForm()}></i>
      </form>   
    } else {
      city = <div className="profile-section">
        <p className="profile-field">City: {this.props.city}</p>
        <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={() => this.handleCityInputToggle()}></i>
      </div>
    }
    if (this.state.stateInputDisplayed) {
      nextField = 'state'
      state = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <select ref={input => this.stateInput = input}>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option> 
        </select>	
        <button className="button-inline" type="submit">Save</button>
        <i className="fa fa-times-circle" aria-hidden="true" onClick={() => this.closeForm()}></i>
      </form>
    } else {
      state = <div>
        <p className="profile-field">State: {this.props.state}</p>
        <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={() => this.handleStateInputToggle()}></i>
      </div>;
    }
    if (this.state.ageInputDisplayed) {
      nextField = 'age'
      age = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" placeholder="Age" ref={input => this.age = input}></input>
        <button className="button-inline" type="submit">Save</button>
        <i className="fa fa-times-circle" aria-hidden="true" onClick={() => this.closeForm()}></i>
      </form>
    } else {
      age = <div>
        <p className="profile-field">Age: {this.props.age}</p>
        <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={() => this.handleAgeInputToggle()}></i>
      </div>;
    }
    if (this.state.bioInputDisplayed) {
      nextField = 'bio'
      bio = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <textarea className="input" placeholder="Bio" ref={input => this.bio = input}></textarea>
        <button className="button-inline" type="submit">Save</button>
        <i className="fa fa-times-circle" aria-hidden="true" onClick={() => this.closeForm()}></i>
      </form>
    } else {
      bio = <div>
        <p className="profile-field">Bio: {this.props.bio}</p>
        <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={() => this.handleBioInputToggle()}></i>
      </div>;
    }
    if (this.state.interestsInputDisplayed) {
      nextField = 'interests'
      interests = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" placeholder="Interests" ref={input => this.interests = input}></input>
        <button className="button-inline" type="submit">Save</button>
        <i className="fa fa-times-circle" aria-hidden="true" onClick={() => this.closeForm()}></i>
      </form>
    } else {
      interests = <div>
        <p className="profile-field">Interests: {this.props.interests}</p>
        <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={() => this.handleInterestsInputToggle()}></i>
      </div>;
    }
    if (this.state.movieInputDislayed) {
      nextField = 'movies'
      movies = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" placeholder="Movies" ref={input => this.movies = input}></input>
        <button className="button-inline" type="submit">Save</button>
        <i className="fa fa-times-circle" aria-hidden="true" onClick={() => this.closeForm()}></i>
      </form>
    } else {
      movies = <div>
        <p className="profile-field">Movies: {this.props.movies}</p>
        <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={() => this.handleMovieInputToggle()}></i>
      </div>;
    }
    if (this.state.musicInputDisplayed) {
      nextField = 'music'
      music = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" placeholder="Music" ref={input => this.music = input}></input>
        <button className="button-inline" type="submit">Save</button>
        <i className="fa fa-times-circle" aria-hidden="true" onClick={() => this.closeForm()}></i>
      </form>
    } else {
      music = <div>
        <p className="profile-field">Music: {this.props.music}</p>
        <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={() => this.handleMusicInputToggle()}></i>
      </div>;
    }
    if (this.state.tvInputDisplayed) {
      nextField = 'tv'
      tv = <form onSubmit={e => this.handleFormSubmit(e, nextField)}>
        <input className="input" placeholder="TV" ref={input => this.tv = input}></input>
        <button className="button-inline" type="submit">Save</button>
        <i className="fa fa-times-circle" aria-hidden="true" onClick={() => this.closeForm()}></i>
      </form>
    } else {
      tv = <div>
        <p className="profile-field">TV: {this.props.tv}</p>
        <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={() => this.handleTvInputToggle()}></i>
      </div>;
    }
    if (this.state.pictureInputDisplayed) {
      nextField = 'picture'
      picture = <ImageUpload onUploadSuccess={() => this.closeForm()}/>
    } else {
      // sets this.props.picture to background of div through styling
      let sectionStyle = {
        backgroundImage: `url(${this.props.picture})`, 
      };
      picture = <div className="profile-picture" style={sectionStyle}>
          <i className="fa fa-pencil-square-o edit-picture" aria-hidden="true" onClick={() => this.handlePictureInputToggle()}></i>
        </div>;
    }

    let fullName = `${this.props.firstName} ${this.props.lastName}`;

    return (
      <div className="search-user-profile">
        <div className="left-section">
          { picture }
        </div>
        <div className="right-section">
          <div className="search-user-profile-name">
            <h1>{fullName}</h1>
          </div>
          <div className="search-user-profile-city">
            {city}
          </div>
          <div className="search-user-profile-state">
            {state}
          </div>
          <div className="search-user-profile-age">
            {age}
          </div>
          <div className="search-user-profile-interests">
            {interests}
          </div>
          <div className="search-user-profile-music">
            {music}
          </div>
          <div className="search-user-profile-movies">
            {movies}
          </div>
          <div className="search-user-profile-tv">
            {tv}
          </div>
          <div className="search-user-profile-bio">
            {bio}
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.currentUser !== null,
    firstName: state.auth.currentUser ? state.auth.currentUser.firstName : null,
    lastName: state.auth.currentUser ? state.auth.currentUser.lastName : null,
    city: state.auth.currentUser ? state.auth.currentUser.city : null,
    state: state.auth.currentUser ? state.auth.currentUser.state : null,
    age: state.auth.currentUser ? state.auth.currentUser.age : null,
    bio: state.auth.currentUser ? state.auth.currentUser.bio : null,
    interests: state.auth.currentUser ? state.auth.currentUser.interests : null,
    music: state.auth.currentUser ? state.auth.currentUser.music : null,
    movies: state.auth.currentUser ? state.auth.currentUser.movies : null,
    tv: state.auth.currentUser ? state.auth.currentUser.tv : null,
    username: state.auth.currentUser ? state.auth.currentUser.username : null, 
    picture: state.auth.currentUser ? state.auth.currentUser.picture : ''
  }
}

export default connect(mapStateToProps)(UserProfile);

