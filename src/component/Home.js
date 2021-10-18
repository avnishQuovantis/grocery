import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./css/Home.css";
import Search from "./Search";
import Item from "./Item";
import Rows from "./Rows";
export default function Home({ addBasket, removeBasket }) {
  let state = useSelector((state) => state.home);
  let dispatch = useDispatch();
  console.log(state.currUser);

  const allGroceries = [...state.data];
  return (
    <div className="mainContainer">
      {/* {state.search != 0 ? (
        <Search />
      ) : (
        <> */}
          <div className="catagory">
            <Link to="/catagory/fruit">
              <div className="catagoryItem">
                <img src="https://tvm.biggro.com/content/images/thumbs/0007367_fresh-fruits_300.jpeg" />
                <h5>Fruits</h5>
              </div>
            </Link>
            <Link to="/catagory/vegetable">
              <div className="catagoryItem">
                <img src="https://www.door2door.co.in/blog/wp-content/uploads/2018/02/online-vegetables.jpg" />
                <h5>vegetables</h5>
              </div>
            </Link>
            <Link to="/catagory/dairy">
              <div className="catagoryItem">
                <img src="https://www.dairyfoods.com/ext/resources/DF/2020/August/df-100/GettyImages-1194287257.jpg?1597726305" />
                <h5>diary</h5>
              </div>
            </Link>
            <Link to="/catagory/meat">
              <div className="catagoryItem">
                <img src="https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg?fm=jpg&w=900&fl=progressive" />
                <h5>Meat</h5>
              </div>
            </Link>
            <Link to="/catagory/bakery">
              <div className="catagoryItem">
                <img src="https://4.imimg.com/data4/JF/DD/MY-6467687/multi-grain-bread-500x500.png" />
                <h5>Bakery</h5>
              </div>
            </Link>
            {/* <h5>Meat</h5> */}
          </div>
          <div className="groceryList">
            <h4>Top Rated</h4>
            <Rows
              data={allGroceries.filter((obj) => {
                return obj.rating > 4;
              })}
            />
          </div>
        {/* </>
      )} */}
    </div>
  );
}
