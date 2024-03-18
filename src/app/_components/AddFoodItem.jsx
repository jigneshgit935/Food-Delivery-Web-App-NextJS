"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
const AddFoodItem = () => {
  const [enterFoodName, setEnterFoodName] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterImg, setEnterImg] = useState("");
  const [enterDesc, setEnterDesc] = useState("");

  const handleAddFood = () => {
    console.log(enterFoodName, enterPrice, enterImg, enterDesc);
  };

  return (
    <div className="login-design">
      <ToastContainer />
      <h1 style={{ textAlign: "center" }}>Add New Food Item</h1>
      <div className="login-input">
        <input
          type="text"
          placeholder="Enter food name"
          className="input-text"
          value={enterFoodName}
          onChange={(e) => setEnterFoodName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter price"
          className="input-text"
          value={enterPrice}
          onChange={(e) => setEnterPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter img url"
          className="input-text"
          value={enterImg}
          onChange={(e) => setEnterImg(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter description"
          className="input-text"
          value={enterDesc}
          onChange={(e) => setEnterDesc(e.target.value)}
        />
        <button onClick={handleAddFood}>Add Food Item</button>
      </div>
    </div>
  );
};

export default AddFoodItem;
