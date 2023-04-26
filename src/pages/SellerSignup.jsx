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
  const { setSignedIn,user } = useContext(AppContext);
  const navigate = useNavigate();

  // state for displaying the required field forms for buyer and seller
  //   const [signupForm, setSignupForm] = useState("buyer");
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('firstName',user.firstName)
    formData.append('lastName',user.lastName)
    console.log(Object.fromEntries(formData.entries()), e.target);

    try {
      const token = localStorage.getItem("authToken");

      const response = await axios.post(
        "https://mazamaza.onrender.com/api/seller/register",
        Object.fromEntries(formData.entries()),
        {
          headers: {
            "x-auth-token": `${token}`,
          },
        }
      );
      if (response) {
        console.log(response.data);
        alert(`${response.data.message} \n your seller account has been created and added to queue for registration by the admin`)

        navigate("signin");
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message)

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
            <input
              name="shopName"
              type="text"
              placeholder="Shop Name"
              required
            />
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Legal Business Email"
              required
            />
            <input
              name="description"
              type="text"
              placeholder="what will you be selling"
              required
            />
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

            <input type="submit" value="Request approval" />
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
            <Link className="green" to="../signin">
              <span>Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerSignUp;
