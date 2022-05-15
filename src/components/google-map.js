import React from "react"
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import { connect } from 'react-redux';
import TextBox from './text-box';
import MarkerWrapper from './marker-wrapper';

const FaAnchor = require("react-icons/lib/fa/anchor");

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBwm2UUsvnLbL_1gCtrqQeFCIZhMimijQA",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  return <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: props.lat, lng: props.long }}
  >
    {props.profileMatches.map((profile, index) => {
    return <MarkerWrapper
    profile={profile}
    key={index}>
    </MarkerWrapper>
 
})}

  </GoogleMap>
})

class DisplayMap extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }


  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({})
    }, 3000)
  }


  render() {
    return (
      <MyMapComponent
      lat={this.props.lat}
      long={this.props.long}
      profileMatches={this.props.profileMatches}
        isMarkerShown={this.state.isMarkerShown}
      />
    )
  }
}

const mapStateToProps = state => (
  {
  long: state.auth.currentUser.long,
  lat: state.auth.currentUser.lat,
  profileMatches: state.user.profileMatches
  }
);

export default connect(mapStateToProps)(DisplayMap);