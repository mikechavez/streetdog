import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewProfile } from '../store/actions/profile';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        location: '',
        hours: '',
        days: '',
        description: ''
    };
  }

  handleNewProfile = e => {
    e.preventDefault();
    this.props.postNewProfile(this.state);
    this.props.history.push('/users/shop');
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, location, hours, days, description } = this.state;
    const { errors } = this.props;
    return (
      <form onSubmit={this.handleNewProfile}>
        {errors.message && (
          <div className="alert alert-danger">{errors}</div>
        )}
        <label htmlFor="name">Name:</label>
        <input
          className="form-control"
          id='name'
          name='name'
          onChange={this.handleChange}
          value={name}
          type="text"
        />
        <label htmlFor="location">Location:</label>
        <input
          className="form-control"
          id='location'
          name='location'
          onChange={this.handleChange}
          value={location}
          type="text"
        />
        <label htmlFor="hours">Hours:</label>
        <input
          className="form-control"
          id='hours'
          name='hours'
          onChange={this.handleChange}
          value={hours}
          type="text"
        />
        <label htmlFor="days">Days:</label>
        <input
          className="form-control"
          id='days'
          name='days'
          onChange={this.handleChange}
          value={days}
          type="text"
        />
        <label htmlFor="description">Description:</label>
        <input
          className="form-control"
          id='description'
          name='description'
          onChange={this.handleChange}
          value={description}
          type="text"
        />
        <button className="btn btn-success">
          Create my profile!
        </button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps, { postNewProfile })(ProfileForm);