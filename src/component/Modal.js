import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
export default function Modal({ hideModal, modal, user }) {
  const modalClass = modal ? "modalContainer open" : "modalContainer close";
  const dispatch = useDispatch();
  const history=useHistory()
  const editUser = () => {
    
    dispatch({ type: "editUser", payload: state });
    hideModal()
  };
  const [state, setState] = useState({
    fname: user.fname,
    lname: user.lname,
    address: user.address,
  });
  const changeInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className={modalClass}>
      <div className="modalBox">
        <button onClick={hideModal} className="btn btn-danger closeBtn">
          X
        </button>
        <div>
          <h5>First Name</h5>
          <input
            name="fname"
            type="text"
            className="form-control"
            placeholder={user.fname}
            value={state.fname}
            onChange={changeInput}
          />
        </div>
        <div>
          <h5>Last Name</h5>
          <input
            value={state.lname}
            name="lname"
            type="text"
            class="form-control"
            onChange={changeInput}
            placeholder={user.lname}
          />
        </div>
       
        <div>
          <h5>Address</h5>
          <input
            name="address"
            value={state.address}
            type="text"
            class="form-control"
            placeholder={user.address}
            onChange={changeInput}
          />
        </div>
        <button
          onClick={editUser}
          className="btn btn-success "
          id="editConfirm"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
