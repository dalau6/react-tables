import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Radio extends Component {
	constructor() {
        super()
		this.state = {
			radioClick: "name"
		};
	}

	onChange(type) {
		// on radio state change handler
		this.props.sortBy(type)
		this.setState(({radioClick}) => ({
      radioClick: radioClick === 'name' ? 'date' : 'name'
    }))
	}

	render() {
		return (
  <div className='radioButtons'>
    <div className='left'>
      <input type='radio' value = 'name' onChange={(e) => this.onChange(e.target.value)} checked={this.state.radioClick === 'name'}/>
      <label>&nbsp;&nbsp;Sort by name</label>
    </div>
    <div className='right'>
      <input type='radio' value = 'date' onChange={(e) => this.onChange(e.target.value)} checked={this.state.radioClick === 'date'}/>
      <label>&nbsp;&nbsp;Sort by age</label>
    </div>
  </div>
);

	}
}

// Uncomment the snippet below
 Radio.propTypes = {
 	sortBy: PropTypes.func
 }

export default Radio;
