import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import React from 'react'; 
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { saveQuestions } from '../actions/user'
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from '../config'; 

export class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFileCloudinaryUrl: ''
        };
    }

    onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });
        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
    
          if (response.body.secure_url !== '') {
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            });

            let user = {}
            user.username = this.props.username; 
            user.picture = response.body.secure_url
            this.props.dispatch(saveQuestions(user))
            this.props.onUploadSuccess(); 
          }
        });
    }

    render() {
        return (
            <div> 
                <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>
                    <p className="center">Drop an image or click to select a file to upload.</p>
                </Dropzone>
                <div className="FileUpload">
                </div>
            </div>
        ); 
    }
}

export const mapStateToProps = (state) => {
    console.log('State in ImageUpload: ', state)
    return {
      loggedIn: state.auth.currentUser !== null,
      username: state.auth.currentUser ? state.auth.currentUser.username : null
    }
  }
  
export default connect(mapStateToProps)(ImageUpload);