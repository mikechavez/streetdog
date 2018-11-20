import React, { Component } from "react";
import { connect } from "react-redux";
// import {  withRouter } from 'react-router-dom';
// import ShopImageSlider from "../components/ShopImageSlider";
import ShopInfo from "../components/ShopInfo";
import ShopDescription from "../components/ShopDescription";
import { fetchProfile } from "../store/actions/profile";
import { removeError } from "../store/actions/errors";

class ShopData extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    const { shop, errors } = this.props;
    // let slickSliderSettings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };

    return (
      <div>
        <div>
          {errors.message && (
            <div className="alert alert-danger">{errors.message}</div>
          )}
          {shop && (
            <div>
              <div className="image-slider-container">
                {/* <ShopImageSlider settings={slickSliderSettings} /> */}
              </div>
              <ShopInfo name={shop.name} hours={shop.hours} days={shop.days} />
              <ShopDescription description={shop.description} />
              <button>Browser Our Offerings</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shop: state.userProfile.shop,
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  { fetchProfile, removeError }
)(ShopData);
