import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link,Redirect ,useHistory} from "react-router-dom";

import "./css/basket.css";
import Item from "./Item";
export default function Cart({ addBasket, removeBasket }) {
  const select = useSelector((state) => state.home);
  const data = select.cart;
  let totalPrice = 0;
  const history=useHistory()
  const checkoutPage=()=>{
    let val="/checkout"
    if(select.currUser==null){
      alert("login first")
      val="/login"
    }
      history.push(val)
  }
  
  return (
    <div className="basketPage">
      <div className="cartItems">
        <h1>Cart</h1>
        {/* {data.map((obj) => {
          return (
            <div className="catagoryItems">
              <img src={obj.filename} />
              <h6>{obj.title}</h6>
              <div className="price">
                <span>
                  <b>price</b> : {obj.price}
                </span>
                <div className="quantity">
                  <h6>Qty : </h6>
                </div>
                <div className="addRemove">
                  <button
                    onClick={() => removeBasket(obj)}
                    className="btn btn-danger addCart"
                  >
                    -
                  </button>
                  <h6>{obj.qty}</h6>
                  <button
                    onClick={() => addBasket(obj)}
                    className="btn btn-primary addCart add"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })} */}
        <Item items={data} />
      </div>
      <div className="amountDetail">
        <h1>dj</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price </th>
              <th scope="col">QTY</th>
              <th scope="col">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((obj) => {
              totalPrice = totalPrice + obj.qty * obj.price;
              return (
                <tr>
                  <th scope="row">{obj.title}</th>
                  <td>{obj.price}</td>
                  <td>{obj.qty}</td>
                  <td>{obj.qty * obj.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div class="row lastRow">
          <div class="col-5">Total price</div>
          <div class="col-5">{totalPrice}</div>
        </div>
       
          <button className="btn btn-danger checkoutBtn" onClick={checkoutPage}>Checkout</button>
        
      </div>
    </div>
  );
}
