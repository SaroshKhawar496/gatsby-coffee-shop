import React from "react"
import Img from "gatsby-image"

const Product = ({ product }) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6 className="text-capitalize">{product.title}</h6>
          <h6>${product.price}</h6>
          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-name={product.title}
            // need to use image src with snipcart
            data-item-image={product.image.fluid.src}
            data-item-url="https://gatsby-regular-joes.netlify.com/"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product