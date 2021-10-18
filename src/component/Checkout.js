import React from 'react'
import { useSelector } from 'react-redux'
import "./css/checkout.css"
export default function Checkout() {
    const select=useSelector(state=>state.home)
    
    return (
        <div className="mainContainer">
            <div className="checkoutPage">
                <h1>Checkout</h1>
                 <div className="checkoutItems">

                 </div>
                 <div className='checkoutAddress'>

                 </div>
            </div>

        </div>
    )
}
