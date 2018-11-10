import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShopDescription from '../components/ShopDescription';


class ShopProfile extends Component {
  
  // componentDidMount () {
  //   this.props.fetchProfile();
  // }

  render() {

    return(
      <div>
        <ShopDescription />
      </div>
    )
  }
}

export default ShopProfile;