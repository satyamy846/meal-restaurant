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
    <div className="card-img-wrapper">
    <img src={cloudinaryImageId ? IMAGE_CDN_URL + cloudinaryImageId :"No image"} alt="" />

    </div>
    <div className="card-content-wrapper">
    <h3 className='heading'>{name}</h3>
        <p className='cuisine-names'>{cuisines.join(" ,")}</p>
        <p className='rating'>{avgRating}</p>
        <p className='cost-for-two'>{costForTwo} </p>
        <p className='delivery-time'>{delivaryTime}</p>
    </div>
        <div className='card-btn-wrapper'>
        <button className='card-btn' onClick={(e) => handleCart(e)}>Add To Card</button>
        </div>
        
        
    </div>
  )
}

export default RestaurantCard