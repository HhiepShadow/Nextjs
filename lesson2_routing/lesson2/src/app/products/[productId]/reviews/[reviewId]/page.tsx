import { notFound } from "next/navigation";

const ReviewDetail = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
  }) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} Detail Page for Product {params.productId}
    </div>
  );
};

export default ReviewDetail;
