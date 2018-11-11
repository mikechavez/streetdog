import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import ShopDescription from '../components/ShopDescription';
import { fetchProfile } from '../store/actions/profile';
import { removeError } from '../store/actions/errors';


class ShopData extends Component {

  componentDidMount () {
    this.props.fetchProfile();
  }

  render() {
    
    const { userProfile, errors, history } = this.props;
    return (
      <div>
        {errors.message && (
          <div className="alert alert-danger">{errors.message}</div>
        )}
        <ShopDescription description={userProfile.description}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userProfile: state.userProfile,
    errors: state.errors
  }
}


export default withRouter(
  connect(mapStateToProps,{ fetchProfile, removeError })(ShopData)
) 