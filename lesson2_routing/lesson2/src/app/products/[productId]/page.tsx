const ProductDetail = ({
    params
}: {
    params: { productId: string }
}) => {
  return <div>Product Detail Page {params.productId}</div>;
};

export default ProductDetail;
