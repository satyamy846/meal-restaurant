import React, { useDebugValue } from 'react'
import { IMAGE_CDN_URL } from '../config';
import './styles/RestaurantCard.css'
import { useDispatch, useSelector } from 'react-redux';
import {addItemToCart} from '../features/cartSlice';
const RestaurantCard = (props) => {
  const dispatch = useDispatch();

    const {restaurant} = props;
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo
    } = restaurant.info;
    const {delivaryTime} = restaurant.info.sla;
    function handleCart(e){
      e.preventDefault();
      dispatch(addItemToCart(restaurant.info));
    }
  return (
    
    <div className='card'>
        <img src={cloudinaryImageId ? IMAGE_CDN_URL + cloudinaryImageId :"No image"} alt="" />
        <h3>{name}</h3>
        <h4>{cuisines.join(" ,")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo} </h4>
        <h4>{delivaryTime}</h4>
        <button className='card-btn' onClick={(e) => handleCart(e)}>Add To Card</button>
    </div>
  )
}

export default RestaurantCard