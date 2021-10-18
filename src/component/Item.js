import React from "react";
import { useDispatch } from "react-redux";

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
        })}
      </div>
    
  );
}
