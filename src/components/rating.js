import React from 'react'; 

export default class Rating extends React.Component {
    constructor(props){
      super(props)
    }
  
    render() {
      let error;
      if (this.props.meta.touched && this.props.meta.error) {
          error = <div className="form-error">{this.props.meta.error}</div>;
      }
      return (
        <div>
          <label htmlFor={this.props.input.name}>
              {this.props.label}
              {error}
          </label>
          <select value={this.props.input.value} onChange={this.props.input.onChange}>
              <option value="" disabled selected>Select your option</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
          </select>	
        </div>
      )
    }
  
  }
  