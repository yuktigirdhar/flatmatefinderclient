import React from "react"
import {connect} from 'react-redux';
import {getSelectedUser, setSelectedUserMatch} from '../actions/user'; 

export class TextBox extends React.Component {
    handleMatchClick(username, score) {
        this.props.dispatch(getSelectedUser(username))
            .then(() => this.props.dispatch(setSelectedUserMatch(score)))
    }
      render() {
          return (
              <div onClick={event => this.handleMatchClick(this.props.profile.username, this.props.profile.score)} className="textBox">
              {"Name: "}{this.props.profile.firstName + ' ' + this.props.profile.lastName}
              <br/>
              {"Score: "}{this.props.profile.score}
              </div>
          );
      }
  }

export default (connect()(TextBox));