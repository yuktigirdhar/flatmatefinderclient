import React from 'react'; 
import { connect } from 'react-redux';
import '../styles/chat-form.css';
import { submitContactForm } from '../actions/chat';   

export class ChatForm extends React.Component {
    
    handleClose() {
        this.props.onHandleClose()
    }

    handleSubmitForm(e) {
        e.preventDefault()
        this.props.dispatch(submitContactForm(this.props.currentUser.email, this.props.selectedUser.email, this.formInput.value))
        this.props.onHandleClose() 
    }

    render() {
        if(this.props.displayed === true ) {
            return (
                <div className="backdrop">
                    <div className="chat-form">
                        <i className="fa fa-times close-form-button" aria-hidden="true" onClick={() => this.handleClose()}></i>
                        <form method="POST" action="#" onSubmit={e => this.handleSubmitForm(e)}> 
                            <textarea className="input" id="message" placeholder="Write your message here" ref={textarea => this.formInput = textarea}></textarea>
                            <button className="button-blue">Submit</button>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}

export const mapStateToProps = state => ({
    currentUser: state.auth.currentUser, 
    selectedUser: state.user.selectedUser
})

export default connect(mapStateToProps)(ChatForm); 