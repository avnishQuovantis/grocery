import React, { useState } from "react";
import "./css/heading.css";
// import {Link}
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Home";
export default function Heading() {
  let state = useSelector((state) => state.home);
  let dispatch = useDispatch();
  let { name } = useParams();
  const history = useHistory();
  const [search, setSearch] = useState("");
  console.log(state);
  const searchButton = () => {
    history.push(`/search/${search}`);
  };
  const [open, setOpen] = useState(false);
  let user = state.currUser;
  const searchItem = (e) => {
    setSearch(e.target.value);
    // dispatch({type:"search",payload:e.target.value})
    if (e.target.value == "") {
      history.push("/");
    }
  };
  console.log(state);
  return (
    <div className="headContainer">
      <div className="logo head">
        <Link to="/">
          <button type="button" class="btn btn-primary">
            Grocery
          </button>
        </Link>
      </div>
      {/* <input className="form-control" placeholder="search" type="text"/> */}
      <div class="input-group mb-3 searchInput">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          value={search}
          aria-describedby="button-addon2"
          onChange={(e) => searchItem(e)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              searchButton(e);
            }
          }}
        />
        <button
          class="btn btn-primary"
          type="button"
          id="button-addon2"
          onClick={searchButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
      <div className="menuBar head">
        <Link to="/cart">
          {" "}
          <button type="button" class="btn btn-primary basket">
            <span className="Qty">{state.qty}</span>

            <svg
              id="basketIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-basket"
              viewBox="0 0 16 16"
            >
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        </Link>
        <button
          className="btn btn-primary dropBtn"
          onClick={() => setOpen(!open)}
        >
          login
          {/* {user == null ? <span>login</span> : <span>{user.fname}</span>} */}
        </button>
        {open && (
          <div className="dropmenu">
            {user == null ? (
              <>
                <Link to="/login">
                  <button class="btn btn-outline-primary">Login</button>
                </Link>
                <Link to="/signup">
                  <button class="btn btn-outline-primary">Signup</button>
                </Link>
              </>
            ) : (
              <>
                <div>{user.fname}</div>
                <button
                  className="btn btn-danger"
                  onClick={()=>dispatch({
                    type: "signout",
                  })}
                >
                  sign out
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
