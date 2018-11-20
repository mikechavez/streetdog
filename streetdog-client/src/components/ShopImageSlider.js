import React from 'react';
import Slider from 'react-slick';

const ShopImageSlider = ({ settings }) => (
  <Slider {...settings}>
    <div><img src="https://images.unsplash.com/photo-1524412529635-a258ed66c010?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=916728c49c3739ec0e9c4e063b9a2c9e&auto=format&fit=crop&w=985&q=80" alt="" /></div>
    <div><img src="https://images.unsplash.com/photo-1514843319620-4f042827c481?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f4cd9decc955455d26471cb54dc6dad5&auto=format&fit=crop&w=1050&q=80" alt="" /></div>
    <div><img src="https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8479a73ae3b8e556bada71a2b661adac&auto=format&fit=crop&w=1050&q=80" alt="" /></div>
  </Slider>
);

export default ShopImageSlider;