import React from "react"
import { Link } from "gatsby"
import Title from '../Globals/Title'

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story">

        </Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ut
              eos in cupiditate molestiae laboriosam suscipit delectus explicabo
              accusamus inventore dolor, exercitationem magni id illum? Id
              commodi exercitationem dolorum molestiae quas? Fuga beatae animi
              ipsum vel dignissimos? Ab non molestiae aut expedita adipisci, at
              aspernatur numquam, quasi doloribus nihil alias.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">About Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
