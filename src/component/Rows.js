import React from 'react'
import { useDispatch } from 'react-redux';
import './css/rows.css'
export default function Rows({data}) {
    // const state=useSelector(state=>state.home)
    console.log(data);
   
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
         <div className="list">
             {data.map((obj) => {
          return (
            <div className="catagoryRows">
              <img src={obj.filename} />
              <h6>{obj.title}</h6>
              {/* <div className="qtyPrice"> */}
                <span>
                  <b>price</b> : {obj.price}
                </span>
                {/* <div className="rowsQty"> */}
                  <span>Qty : </span>
                {/* </div> */}
                <div className="rowButtons">
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
              {/* </div> */}
            </div>
          );
        })}
        </div>
    )
}
