const ReviewDetail = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  return (
    <div>
      Review {params.reviewId} Detail Page for Product {params.productId}
    </div>
  );
};

export default ReviewDetail;
