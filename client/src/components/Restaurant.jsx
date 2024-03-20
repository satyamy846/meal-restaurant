import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import mockData from '../utils/mockData';
import './styles/Restaurant.css'


const Restaurant = () => {
    let [restLists, setRestLists] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    async function handleSearch(e){
      e.preventDefault();
      const filteredLists = restLists.filter((item) => item.info.name.toLowerCase().includes(searchValue.toLowerCase()));
        setRestLists(filteredLists);
    }

    useEffect( () =>{
        // const fetchSwiggyData = async() =>{
        //     const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //     const response = await res.json();
        //     console.log(response.data);
        // }
        // fetchSwiggyData();
        
        setRestLists(mockData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(mockData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }, [])
  return (
    <>
    {console.log("res = ", restLists)}
    <div className='restaurant'>
    <div className="search-container">
    <input type="text" name='search' 
    className='search-filter' 
    placeholder='Search by Name' 
    value={searchValue} 
    onChange={(e) => setSearchValue(e.target.value)}/>
    <button onClick={(e) => handleSearch(e)} className='search-btn'>Search</button>
    </div>
    <div className='card-container'>
    {
      restLists.map((restaurant, index) => (
          <RestaurantCard restaurant={restaurant} key={index}/>
      ))
    }
    </div>
    
    </div>
    </>
  )
}

export default Restaurant