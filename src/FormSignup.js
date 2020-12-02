import React from "react";

const FormSignup = () => {
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>Contact us today for a free consulatation and estimate</h1>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Your Name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            className="form-input"
            placeholder="Your Email"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="number" className="form-label">
            Telephone Number
          </label>
          <input
            id="number"
            type="text"
            name="number"
            className="form-input"
            placeholder="Your Number"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
