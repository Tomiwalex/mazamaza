import React from "react";
import { Link, useNavigate } from "react-router-dom";
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

const SignUp = () => {
  const { setSignedIn } = useContext(AppContext);
  const navigate = useNavigate();

  // state for displaying the required field forms for buyer and seller
  //   const [signupForm, setSignupForm] = useState("buyer");
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()), e.target);

    try {
      const response = await axios.post(
        "https://mazamaza.onrender.com/api/users/signup",
        Object.fromEntries(formData.entries()),
        {
          // headers: {
          //   'Content-Type': 'multipart/form-data'
          // }
        }
      );
      if (response) {
        console.log(response.data);
        alert(response.data.msg);

        navigate("../signupsuccessful");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
  };

  return (
    <div className="signup">
      <div className="content f-jc-sb">
        <div
          className="image"
          style={{
            background: `url(${hero})`,
          }}
        >
          {/* <img src={hero}/> */}
        </div>

        <div className="text">
          <img className="logo" src={logo} />

          {/* <div className="switch f-jc-sb">
            <p
              onClick={() => setSignupForm("buyer")}
              className={signupForm == "buyer" && "p-active"}
            >
              Buyer
            </p>

            <p
              onClick={() => setSignupForm("seller")}
              className={signupForm == "seller" && "p-active"}
            >
              Business/Seller
            </p>
          </div> */}

          <form
            onSubmit={(e) => {
              handleSignUp(e);
              //   signupForm == 'seller' ? handleSellerSignUp(e): handleBuyerSignUp(e)
            }}
          >
            {/* {signupForm == "seller" && (
              <div>
                <input type="text" placeholder="Shop Name" required />
                <input
                  type="text"
                  placeholder="Legal Business Email"
                  required
                />
              </div>
            )}
            {signupForm == "seller" && <textarea minLength={30} />} */}
            <div>
              <input
                name="firstName"
                type="text"
                placeholder="First name"
                required
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                required
              />
              <input
                name="username"
                type="text"
                placeholder="Username"
                required
              />
              <input name="email" type="email" placeholder="Email" required />
            </div>

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

export default SignUp;
