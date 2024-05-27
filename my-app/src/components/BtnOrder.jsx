import React, { useState } from "react";
import "./BtnOrder.css";

const BtnOrder = () => {
  const [Text, setText] = useState("co");
  const ButtonHandler = () => {
    setText("V košíku");
  };

  return (
    <button className="btn-order" onClick={ButtonHandler}>
      Objednat
    </button>
  );
};

export default BtnOrder;
