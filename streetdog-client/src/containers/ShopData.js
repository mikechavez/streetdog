import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {  withRouter } from 'react-router-dom';
import ShopDescription from '../components/ShopDescription';
import { fetchProfile } from '../store/actions/profile';
import { removeError } from '../store/actions/errors';


class ShopData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchProfileSuccess: null
    }
    
  }

  componentDidMount() {
    this.props.fetchProfile();
  }



  

  render() {
    
    const { shop, errors } = this.props;

    return (
      <div>
    
        <div>
        {errors.message && (
          <div className="alert alert-danger">{errors.message}</div>
        )}
        {shop &&
        <ShopDescription description={shop.description}/>
        }
        </div>
      
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    shop: state.userProfile.shop,
    errors: state.errors
  }
}


export default connect(mapStateToProps, { fetchProfile, removeError })(ShopData)
