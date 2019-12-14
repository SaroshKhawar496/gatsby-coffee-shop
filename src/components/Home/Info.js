import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Regular Joe's has been providing our customers the world’s finest
              coffee & freshest food since 1991. We are happy to now make our
              beverages & food available to be catered to your office & work
              environment. Bon Appetit.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
