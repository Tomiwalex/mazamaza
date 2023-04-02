import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../scss/general.css";
import logo from "../images/logo-img.svg";
import google from "../images/signupgoogle.png";
import facebook from "../images/signupfacebook.png";
import Instagram from "../images/signupinstagram.png";
import hero from "../images/signupbuyer.png";
import heroseller from "../images/signupseller.png";
import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import axios from "axios";

const SellerSignUp = () => {
  const { setSignedIn } = useContext(AppContext);
  setSignedIn(false);
  const navigate = useNavigate();

  // state for displaying the required field forms for buyer and seller
  //   const [signupForm, setSignupForm] = useState("buyer");
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()), e.target);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/signup",
        Object.fromEntries(formData.entries()),
        {
          // headers: {
          //   'Content-Type': 'multipart/form-data'
          // }
        }
      );
      if (response) {
        console.log(response.data);
        navigate("signin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup">
      <div className="content f-jc-sb">
        <div
          className="image"
          style={{
            background: `url(${heroseller})`,
          }}
        >
          {/* <img src={hero}/> */}
        </div>

        <div className="text">
          <img className="logo" src={logo} />

          <h2>Seller regristration</h2>

          <form
            onSubmit={(e) => {
              handleSignUp(e);
              //   signupForm == 'seller' ? handleSellerSignUp(e): handleBuyerSignUp(e)
            }}
          >
            <input type="text" placeholder="Shop Name" required />
            <input type="email" autoComplete="email" placeholder="Legal Business Email" required />
            <input type="text" placeholder="what will you be selling" required />
            {/* <textarea
              className="description"
              minLength={30}
              placeholder="Tell us about what you intend to sell"
            /> */}

            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />

            <input
              name="verifyPassword"
              type="password"
              placeholder="Confirm Password"
              required
            />

            <div className="check-boxes f-jc-sb">
              <input required type="checkbox" />
              <p>
                I agree to the
                <Link className="red">Terms & Conditions</Link> and{" "}
                <Link className="red">Privacy Policy</Link>
              </p>
            </div>

            <input type="submit" value="Register" />
          </form>

          <p className="gray">
            By Registering, you agree to{" "}
            <span className="green">MazaMaza User Agreement</span> and{" "}
            <span className="green">Cookies & Internet Advertising.</span>
          </p>

          <div className="or f-jc-sb">
            <span></span>
            <small>or</small>
            <span></span>
          </div>

          <div className="f-jc-sb icon">
            <img src={google} />
            <img src={facebook} />
            <img src={Instagram} />
          </div>

          <p className="gray">
            Already have an Account?{" "}
            <Link className="green" to="/signin">
              <span>Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerSignUp;
