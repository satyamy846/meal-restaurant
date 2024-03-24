import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { IMAGE_CDN_URL } from '../config';
import UserContext from '../ContextAPI/UserContext';

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const cartItems = useSelector((state) => state.cartSlice.items);
    const {user} = useContext(UserContext);
    useEffect(() => {
        setCartData(cartItems);
    }, [cartItems])
    return (
        <div id='cart' style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", paddingTop:"40px"}}>
            <div>hello I am {user?.username}</div>
            {
                cartData && cartData.map((item) => (
                    <>
                        <div className='card' style={{width:"20%"}}>
                            <img src={item.cloudinaryImageId ? IMAGE_CDN_URL + item.cloudinaryImageId : "No image"} alt="" />
                            <h3>{item.name}</h3>
                            <h4>{item.cuisines.join(" ,")}</h4>
                            <h4>{item.avgRating}</h4>
                            <h4>{item.costForTwo} </h4>
                            <h4>{item.sla.delivaryTime}</h4>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default Cart