import { useSelector } from 'react-redux';
import ShoppingCart from '../assets/shopping-cart (3).png';
import './styles/Header.css';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
const Header = () => {
    const [cartData, setCartData] = useState([]);
    const cartItems = useSelector((state) => state.cartSlice.items);

    const navigate = useNavigate();
    useEffect(()=>{
        setCartData(cartItems);
    }, [cartItems])
    return (
        <>

        {

        console.log(cartData)
        }
        <div id="header">
            <ul className="header-container" >
                <li onClick={()=> navigate("/")}>Home</li>
                <li onClick={() => navigate("/login")}>Login</li>
                <li>SignUp</li>
                <li className='cart-item' onClick={()=> navigate("/cart")}>


                    <img src={ShoppingCart} alt="shopping-cart" />
                    {
                        cartData && (
                            <p>{cartData.length}</p>
                        )
                    }
                </li>
            </ul>
        </div>
        </>
    )
}

export default Header