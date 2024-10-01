const ProductsList = () => {
  const productsList = ["Product 1", "Product 2", "Product 3"];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productsList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
