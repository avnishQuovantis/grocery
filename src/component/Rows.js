import React from "react";
import { useDispatch } from "react-redux";
import { Link ,useHistory} from "react-router-dom";
import "./css/rows.css";
export default function Rows({ data }) {
 
  console.log(data);
const history=useHistory()
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
    <div className="list" data-testid="rowsList">
      {data.map((obj) => {
        return (
          <div data-testid="rowsData" className="catagoryRows">
            <button className="btn" onClick={()=>history.push({pathname:`/item/${obj.title}`,state:{data:obj}})}>
              <img src={obj.filename} />
              <h6 data-testid="rowtitle">{obj.title}</h6>
            </button>
            {/* <div className="qtyPrice"> */}
            <span>
              <b>price</b> : {obj.price}
            </span>

            <div className="rowButtons">
              <h6>Qty : </h6>
              <button
                onClick={() => removeBasket(obj)}
                className="btn btn-danger rowBtn"
              >
                -
              </button>
              <span>{obj.qty}</span>
              <button
                onClick={() => addBasket(obj)}
                className="btn btn-primary rowBtn add"
              >
                +
              </button>
            </div>
            <div className="rating">
              <h6>Rating:</h6>
              {obj.rating} <span class="material-icons">star</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
