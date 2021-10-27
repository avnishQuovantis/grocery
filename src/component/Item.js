import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Item({ items }) {
  const dispatch = useDispatch();
  const addBasket = (obj) => {
    dispatch({
      type: "addInBasket",
      payload: obj,
    });
  };
  const removeBasket = (obj) => {
    dispatch({
      type: "removeFromBasket",
      payload: obj,
    });
  };
  return (
    <div className="catagoryContainer">
      {items.map((obj) => {
        return (
          <div data-testid="itemlist" className="catagoryItems">
           <Link to={`/item/${obj.title}`}> <img src={obj.filename} />
            <h5>{obj.title}</h5></Link>
            <div className="price">
              <span>
                <b>price</b> : {obj.price}
              </span>
              
              <div className="addRemove">
                <h6>Qty : </h6>
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
              <div className="rating">
                <h6>Rating:</h6>
                {obj.rating} <span class="material-icons">star</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
