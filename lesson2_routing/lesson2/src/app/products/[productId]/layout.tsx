import React from 'react'

const ProductDetailsLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div>
          {children}
          <h2>Feature products</h2>
    </div>
  )
}

export default ProductDetailsLayout;