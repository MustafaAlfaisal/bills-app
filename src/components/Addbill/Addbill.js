import React, { useContext, useState, useEffect } from "react";
import "./style.css";

const Addbill = () => {
  const [newBillTitle, setNewBillTitle] = useState();
  const [newBillConst, setNewBillCost] = useState();

  return (
    <div className="add-bill-container">
      <input
        className="add-bill-form-control form-control"
        placeholder="enter bill title"
        type="text"
        value={newBillTitle}
        onChange={(e) => setNewBillTitle(e.target.value)}
      ></input>
    </div>
  );
};

export default Addbill;
