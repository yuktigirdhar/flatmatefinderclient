import React from "react"
import { Marker, InfoWindow} from "react-google-maps"
import TextBox from './text-box';

export default class MarkerWrapper extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isOpen: false
    }
    this.onToggleOpen = this.onToggleOpen.bind(this)
  }
      
  onToggleOpen(){

this.setState({
  isOpen: !this.state.isOpen
})

  }
  
      render() {


   
          return (
            <Marker 
            position={{ lat: this.props.profile.lat, lng: this.props.profile.long }} 
            onClick={this.onToggleOpen}
          > 
          {this.state.isOpen && <InfoWindow > 
          <TextBox profile={this.props.profile}/>
          </InfoWindow>} 
          </Marker> 
          )
        }
  }

