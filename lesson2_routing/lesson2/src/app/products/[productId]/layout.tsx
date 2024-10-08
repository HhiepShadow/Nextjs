import React from "react";

const generateRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};
const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const random = generateRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading product");
  }

  return (
    <div>
      {children}
      <h2>Feature products</h2>
    </div>
  );
};

export default ProductDetailsLayout;
