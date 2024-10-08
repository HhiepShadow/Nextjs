"use client";
import React from "react";
import { useRouter } from "next/router";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };

  return (
    <div>
      <h1>Order product</h1>
      <button className="bg-slate-500" onClick={handleClick}>Place order</button>
    </div>
  );
};

export default OrderProduct;
