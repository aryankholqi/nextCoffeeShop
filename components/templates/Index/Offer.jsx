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
    <div class="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
      <div class="container py-5">
        <h1 class="display-3 text-primary mt-3">50% OFF</h1>
        <h1 class="text-white mb-3">Sunday Special Offer</h1>
        <h4 class="text-white font-weight-normal mb-4 pb-3">
          Only for Sunday from 1st Jan to 30th Jan 2045
        </h4>
        <form
          class="form-inline justify-content-center mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div class="input-group">
            <input
              type="text"
              class="form-control p-4"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ height: 60 }}
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary font-weight-bold px-4"
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
