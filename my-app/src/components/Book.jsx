import "./Book.css";
import React from "react";
import BtnOrder from "./BtnOrder";

const Book = (props) => {
  return (
    <div className="one-book">
      <h2>{props.mujnadpis}</h2>
      <img src={props.mujobr} />
      <BtnOrder></BtnOrder>
      <p>{props.mujpopisek}</p>
    </div>
  );
};

export default Book;
