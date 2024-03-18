"use client";

import AddFoodItem from "@/app/_components/AddFoodItem";
import Header from "@/app/_components/Header";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  const [addFoodItem, setAddFoodItem] = useState(false);

  return (
    <div>
      <ToastContainer />

      <Header />
      <button onClick={() => setAddFoodItem(true)}>Add Food Item</button>
      <button onClick={() => setAddFoodItem(false)}>Dashboard</button>
      {addFoodItem ? <AddFoodItem /> : <h1>Dashboard</h1>}
    </div>
  );
};

export default Dashboard;
