import axios from "axios";
import React, { useState } from "react";

export const Offer = () => {
  const [email, setEmail] = useState("");

  const submitEmail = async () => {
    console.log(email);
    setEmail("");

    await axios.post("http://localhost:4000/newsLetters", {
      email,
    });
  };

  return (
    <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
      <div className="container py-5">
        <h1 className="display-3 text-primary mt-3">50% OFF</h1>
        <h1 className="text-white mb-3">Sunday Special Offer</h1>
        <h4 className="text-white font-weight-normal mb-4 pb-3">
          Only for Sunday from 1st Jan to 30th Jan 2045
        </h4>
        <form
          className="form-inline justify-content-center mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control p-4"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ height: 60 }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary font-weight-bold px-4"
                type="submit"
                onClick={submitEmail}
              >
                Join
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
