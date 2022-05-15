import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Input from './input';
import { Field, reduxForm, focus } from 'redux-form';
import { compose } from 'redux';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import { saveQuestions } from '../actions/user';
import '../styles/questions.css'; 
import { lookupLatLong, lookupLatLong2 } from '../actions/user';
import StateSelect from './state-select'; 
import Rating from './rating'; 


export class Questions extends React.Component {

  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
  }

  onSubmit(values) {
    const { firstName, lastName, age, gender, gender_bothered, city, state, max_distance,
      max_price, pets_have, pets_bothered, loud_music, loud_music_bothered, cigarettes, cigarettes_bothered,
      drinking_day_per_week, drinking_bothered, alt_smoking, alt_smoking_bothered, hour_awake, hours_bothered,
      guests_frequency, guests_bothered, cleanliness, cleanliness_bothered, address, zipcode, common_areas, common_areas_bothered } = values;
    const user = {
      firstName, lastName, age, gender, gender_bothered, city, state, max_distance,
      max_price, pets_have, pets_bothered, loud_music, loud_music_bothered, cigarettes, cigarettes_bothered,
      drinking_day_per_week, drinking_bothered, alt_smoking, alt_smoking_bothered, hour_awake, hours_bothered,
      guests_frequency, guests_bothered, cleanliness, cleanliness_bothered, address, zipcode, common_areas, common_areas_bothered
    };
    user.username = this.props.currentUser.username
    if (this.props.currentUser.looking_for === "find_a_room" || this.props.currentUser.looking_for === "find_a_roommate") {
      return this.props.dispatch(lookupLatLong2(city, state))
      .then(() => {
        user.lat = this.props.latLong.lat
        user.long = this.props.latLong.lng
        this.props.dispatch(saveQuestions(user))
      })
    }
    else {
      return this.props.dispatch(lookupLatLong(city, state, address))
    .then(() => {
      user.lat = this.props.latLong.lat
      user.long = this.props.latLong.lng
      this.props.dispatch(saveQuestions(user))
    })
  }
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }
    if (this.props.updatedUser) {
      return <Redirect to="/dashboard"/>;
    }

    const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
    const minValue18 = minValue(18)
    const minValue1 = minValue(1)
    const minValue100 = minValue(100)

    const normalizeBoolean = value => {
      if (value === "true") {
        return true;
      }
      if (value === "false") {
        return false;
      }
      return value;
    };


    let lookingFor;
    if (this.props.currentUser.looking_for === "find_a_room" || this.props.currentUser.looking_for === "find_a_roommate") {
      lookingFor = <div className="form-container"><h2>Apartment Criteria</h2>
        <div className="form-section">
          <label htmlFor="city">City</label>
          <Field
            component={Input}
            type="text"
            name="city"
            validate={[required, nonEmpty, isTrimmed]}
          />
        </div>
        <div className="form-section">
          <label htmlFor="state">State</label>
        </div>
        <div className="form-section">
          <Field
            component={StateSelect}
            type="text"
            name="state"
            validate={[required, nonEmpty, isTrimmed]}
          />
        </div>
        <div className="form-section">
          <label htmlFor="max_distance">Search Radius(miles)</label>
          <Field
            component={Input}
            type="number"
            name="max_distance"
            validate={[required, nonEmpty, minValue1]}
          />
        </div>
        <div className="form-section">
          <label htmlFor="max_price">Maximum Price</label>
          <Field
            component={Input}
            type="number"
            name="max_price"
            validate={[required, nonEmpty, minValue100]}
          />
        </div>
      </div>
    }
    else if (this.props.currentUser.looking_for === "fill_a_room") {
      lookingFor = <div className="form-container"><h2>Apartment Listing</h2>
        <div className="form-section">
          <label htmlFor="address">Address</label>
          <Field
            component={Input}
            type="text"
            name="address"
            validate={[required, nonEmpty, isTrimmed]}
          />
        </div>
        <div className="form-section">
          <label htmlFor="city">City</label>
          <Field
            component={Input}
            type="text"
            name="city"
            validate={[required, nonEmpty, isTrimmed]}
          />
        </div>
        <div className="form-section">
          <label htmlFor="state">State</label>
        </div>
        <div className="form-section">
          <Field
            component={StateSelect}
            type="text"
            name="state"
            validate={[required]}
          />
        </div>
        <div className="form-section">
          <label htmlFor="zipcode">Zip Code</label>
          <Field
            component={Input}
            type="number"
            name="zipcode"
            validate={[required, nonEmpty]}
          />
        </div>
        <div className="form-section">
          <label htmlFor="max_price">Room Price</label>
          <Field
            component={Input}
            type="number"
            name="max_price"
            validate={[required, nonEmpty]}
          />
        </div>
      </div>
    }

    return (
      <div>
        <form className="profile" onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values))}>
          <h1 className="center" >Match Questions</h1>
          <p className="center" >To help us better match you with potential roommates, please tell us a little bit about yourself and what you're looking for.</p>
          <br />
          <div className="form-container">
            <h2>Basic Info</h2>
            <div className="form-section">
              <label htmlFor="firstName">First Name</label>
              <Field
                component={Input}
                type="text"
                name="firstName"
                id="firstName"
                validate={[required, nonEmpty, isTrimmed]}
              />
            </div>
            <div className="form-section">
              <label htmlFor="lastName">Last Name</label>
              <Field
                component={Input}
                type="text"
                name="lastName"
                validate={[required, nonEmpty, isTrimmed]}
              />
            </div>
            <div className="form-section">
              <label htmlFor="age">Age</label>
              <Field
                component={Input}
                type="number"
                name="age"
                validate={[required, nonEmpty, minValue18]}
              />
            </div>
            <div className="form-section">
              <label>Sex</label>
            </div>
            <div className="form-section">
                <label> Male</label>
                <Field name="gender" component="input" type="radio" value="male" id="gender_male" label="male" />
            </div>
            <div className="form-section">
                <label>Female</label>
                <Field name="gender" component="input" type="radio" value="female" />  
            </div>
          </div>


          {lookingFor}

          <h2>Personality Profile</h2>
          <div className="form-section">
            <label>Do you own pets?</label>
          </div>
          <div className="form-section">
            <label>Yes</label>
            <Field name="pets_have" component="input" type="radio" value="true" />
          </div>
          <div className="form-section">
            <label>No</label>
            <Field name="pets_have" component="input" type="radio" value="false" />     
          </div>
          <div className="form-section">
            <label htmlFor="pets_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who doesn't have pets?</label>
          </div>
          <div className="form-section">
          <Field
              component={Rating}
              type="text"
              name="pets_bothered"
              validate={[required]}
            />
          </div>
          <div className="form-section">
            <label>Do you listen to loud music, tv, or movies in your living space?</label>
          </div>
          <div className="form-section">
              <label>Yes</label>
              <Field name="loud_music" component="input" type="radio" value="true" />  
          </div>
          <div className="form-section">
            <label>No</label>
            <Field name="loud_music" component="input" type="radio" value="false" />
          </div>
          <div className="form-section">
            <label htmlFor="loud_music_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who is quiet?</label>
          </div>
          <div className="form-section">
            <Field
              component={Rating}
              type="text"
              name="loud_music_bothered"
              validate={[required]}
            />
          </div>
          <div className="form-section">
            <label>Do you smoke cigarettes?</label>
          </div>
          <div className="form-section">
            <label>Yes</label>
            <Field name="cigarettes" component="input" type="radio" value="true" />
          </div>
          <div className="form-section">
            <label>No</label>
            <Field name="cigarettes" component="input" type="radio" value="false" />      
          </div>
          <div className="form-section">
            <label htmlFor="cigarettes_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who doesn't smokes cigarettes?</label>
          </div>
          <div className="form-section">
            <Field
              component={Rating}
              type="text"
              name="cigarettes_bothered"
              validate={[required]}
            />
          </div>
          <div className="form-section">
            <label>Do you consume alcohol?</label>
          </div>
          <div className="form-section">
              <label> Yes</label>
                <Field name="drinking_day_per_week" component="input" type="radio" value="true" />
          </div>
          <div className="form-section">   
              <label>No</label>
              <Field name="drinking_day_per_week" component="input" type="radio" value="false" />
          </div>
          <div className="form-section"> 
            <label htmlFor="drinking_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who doesn't drink alcohol?</label>
          </div>
          <div className="form-section">   
            <Field
              component={Rating}
              type="text"
              name="drinking_bothered"
              validate={[required]}
            />
          </div>
          <div className="form-section"> 
            <label>Do you smoke marijuana?</label>
          </div>
          <div className="form-section"> 
              <label>Yes</label>
              <Field name="alt_smoking" component="input" type="radio" value="true" />
          </div>
          <div className="form-section">     
            <label>No</label>
            <Field name="alt_smoking" component="input" type="radio" value="false" />
          </div>
          <div className="form-section"> 
            <label htmlFor="alt_smoking_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who doesn't smokes marijuana?</label>
          </div>
          <div className="form-section"> 
            <Field
              component={Rating}
              type="text"
              name="alt_smoking_bothered"
              validate={[required]}
            />
          </div>
          <div className="form-section"> 
            <label>Are you awake at odd hours of the morning/evening?</label>
          </div>
          <div className="form-section"> 
            <label>Yes</label>
            <Field name="hour_awake" component="input" type="radio" value="true" />
          </div>
          <div className="form-section"> 
            <label>No</label>
            <Field name="hour_awake" component="input" type="radio" value="false" />
          </div>
          <div className="form-section"> 
            <label htmlFor="hours_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who is on a 9-5 schedule?</label>
          </div>
          <div className="form-section"> 
            <Field
              component={Rating}
              type="text"
              name="hours_bothered"
              validate={[required]}
            />
          </div>

          <div className="form-section"> 
            <label>Do you have guests over frequently, including but not limited to, significant others?</label>
          </div>
          <div className="form-section"> 
            <label>Yes</label>
            <Field name="guests_frequency" component="input" type="radio" value="true" />    
          </div>
          <div className="form-section"> 
            <label>No</label>
            <Field name="guests_frequency" component="input" type="radio" value="false" />
          </div>
          <div className="form-section"> 
            <label htmlFor="guests_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who doesn't have guests over?</label>
          </div>
          <div className="form-section"> 
            <Field
              component={Rating}
              type="text"
              name="guests_bothered"
              validate={[required]}
            />
          </div>
          <div className="form-section"> 
            <label>Would you consider yourself a slob? (Be honest!)</label>
          </div>
          <div className="form-section"> 
            <label>Yes</label>
            <Field name="cleanliness" component="input" type="radio" value="true" />    
          </div>
          <div className="form-section"> 
            <label>No</label>
            <Field name="cleanliness" component="input" type="radio" value="false" />
          </div>
          <div className="form-section"> 
            <label htmlFor="cleanliness_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who is clean?</label>
          </div>
          <div className="form-section"> 
            <Field
              component={Rating}
              type="text"
              name="cleanliness_bothered"
              validate={[required]}
            />
          </div>
          <div className="form-section"> 
            <label>Do you spend a lot of time in common areas such as the kitchen and living room?</label>
          </div>
          <div className="form-section"> 
              <label>Yes</label>
              <Field name="common_areas" component="input" type="radio" value="true" />                
          </div>
          <div className="form-section"> 
              <label>No</label>
              <Field name="common_areas" component="input" type="radio" value="false" />  
          </div>
          <div className="form-section"> 
            <label htmlFor="common_areas_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone who keeps to themself?</label>
          </div>
          <div className="form-section">
            <Field
              component={Rating}
              type="text"
              name="common_areas_bothered"
              validate={[required]}
            />
          </div>
          <div className="form-section"> 
            <label htmlFor="gender_bothered">On a scale from 1-5, where 1 is not important and 5 is very important, how important is it to live with someone of the same sex?</label>
          </div>
          <div className="form-section"> 
            <Field
              component={Rating}
              type="text"
              name="gender_bothered"
              validate={[required]}
            />
          </div>
          <button
            type="submit"
            className="button-blue"
            disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser,
  looking_for: state.auth.currentUser ? state.auth.currentUser.looking_for : null,
  latLong: state.user.latLong,
  updatedUser: state.auth.updatedUser 
});

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'questions',
    onSubmitFail: (errors, dispatch) => dispatch(focus('questions'))
  }))(Questions)
