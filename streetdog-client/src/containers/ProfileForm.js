import React, { Component } from "react";
import { connect } from "react-redux";
import {
  postNewProfile,
  fetchProfile,
  updateProfile
} from "../store/actions/profile";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      hours: "",
      days: "",
      description: "",
      profileNotLoaded: true,
      file: null
    };
  }

  componentDidMount(prevProps) {
    if (this.props.shopData) {
      this.props.fetchProfile();
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.shopData) {
      // if(props.shopData.profileNotLoaded !== state.profileNotLoaded) {
      if (state.profileNotLoaded) {
        return {
          name: props.shopData.name,
          location: props.shopData.location,
          hours: props.shopData.hours,
          days: props.shopData.days,
          description: props.shopData.description,
          profileNotLoaded: false
        };
      }
      // return null;
    }
  }

  handleNewProfile = e => {
    e.preventDefault();
    // if(this.state.profileNotLoaded) {
    //   this.props
    //   .postNewProfile(this.state)
    //   .then(() => {
    //     this.props.history.push('/users/shop');
    //   })
    //   .catch(() => {
    //     return;
    //   })
    // }
    this.props
      .updateProfile(this.state)
      .then(() => {
        this.props.history.push("/users/shop");
      })
      .catch(() => {
        return;
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, location, hours, days, description } = this.state;
    const { errors, shopData } = this.props;

    return (
      <form onSubmit={this.handleNewProfile}>
        {errors.message && (
          <div className="alert alert-danger">{errors.message}</div>
        )}
        <label htmlFor="name">Name:</label>
        <input
          className="form-control"
          id="name"
          name="name"
          onChange={this.handleChange}
          value={name}
          type="text"
        />
        <label htmlFor="location">Location:</label>
        <input
          className="form-control"
          id="location"
          name="location"
          onChange={this.handleChange}
          value={location}
          type="text"
        />
        <label htmlFor="hours">Hours:</label>
        <input
          className="form-control"
          id="hours"
          name="hours"
          onChange={this.handleChange}
          value={hours}
          type="text"
        />
        <label htmlFor="days">Days:</label>
        <input
          className="form-control"
          id="days"
          name="days"
          onChange={this.handleChange}
          value={days}
          type="text"
        />
        <label htmlFor="description">Description:</label>
        <input
          className="form-control"
          id="description"
          name="description"
          onChange={this.handleChange}
          value={description}
          type="text"
        />
        <label htmlFor="shopPicture">Shop Photo:</label>
        <input className="form-control" id="shopPicture" type="file" />
        <button className="btn btn-success">
          {shopData ? "Save Changes" : "Create my Profile"}
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
    shopData: state.userProfile.shop
  };
}

export default connect(
  mapStateToProps,
  { postNewProfile, fetchProfile, updateProfile }
)(ProfileForm);
