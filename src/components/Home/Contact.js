import React from "react"
import Title from "../Globals/Title"

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Your Email Address"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="7"
                placeholder="Your Message..."
              ></textarea>
            </div>
            {/* submit button */}
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
