import React, { createContext, useContext, useState } from "react";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Categorypop from "../components/Categorypop";
import blogIcon from "../images/blog-icon.svg";
import wishlistIcon from "../images/wishlist-icon.svg";
import accountIcon from "../images/account-icon.svg";
import backIcon from "../images/back-arrow.svg";
import mailIcon from "../images/mail.svg";
import dialCodes from "../json/countryCodes.json";
import Footer from "../components/Footer";
import Lottie from "react-lottie";
import noMessage from "../assets/lottie/no-message.json";
import Orders from "../components/account/Orders";
import { AppContext } from "../App";

const Account = ({ phoneNumber, country, name }) => {
  const { activeTab, setActiveTab } = useContext(AppContext);

  // state to show and hide the add adress form
  const [showAddAddress, setShowhowAddAddress] = useState(false);

  const inputStyle =
    "text-[#B2B2C2] text-4 font-normal rounded-[6px] border-[1px] border-[#B2B2C2] transition duration-300 ease-in-out hover:shadow-sm hover:border-green focus:outline-none w-[100%] md:w-[280px] p-3 md:mr-[10px] my-5";

  const labelStyle =
    "font-semibold mt-[-20px] md:mt-0 md:mx-4 transition duration-300 ease-in-out hover:text-green";

  return (
    <div className="bg-[#f1f1f1]">
      <Header1 />
      <Header2 />
      <Categorypop />
      <div className="m-5 mt-10 md:mt-20 md:flex md:gap-4 bg-white">
        {/* the side bar for navigating the tabs*/}
        <div className="md:basis-[24%] h-max bg-[white] h- rounded md:border-[#E4E4EE] md:border-[1px]">
          {/* my account */}
          <span
            onClick={(e) => setActiveTab("account")}
            className="py-4 text-[#1f1f29] justify-between px-4 flex items-center gap-1 flex-nowrap font-semibold text-[16px] md:text-[20px] transition-all duration-300 ease-in-out rounded hover:bg-[#c7c7c7] hover:text-white"
          >
            <div className="flex gap-x-2">
              <img className="w-5" src={accountIcon} alt="account-icon" />
              <p>Account</p>
            </div>
            <img className=" rotate-180  md:hidden" src={backIcon} alt="back" />
          </span>

          {/* my order */}
          <span
            onClick={(e) => setActiveTab("order")}
            className="py-4 text-[#1f1f29] justify-between px-4 flex items-center gap-1 flex-nowrap font-semibold text-[16px] md:text-[20px] transition-all duration-300 ease-in-out rounded hover:bg-[#c7c7c7] group hover:text-white"
          >
            <div className="flex gap-x-2">
              <img className="w-5" src={blogIcon} alt="bag" />
              <p className="group-hover:text-white">My Order</p>
            </div>
            <img className=" rotate-180  md:hidden" src={backIcon} alt="back" />
          </span>

          {/* wishlist */}
          <span className="py-4 text-[#1f1f29] justify-between px-4 flex items-center gap-1 flex-nowrap font-semibold text-[16px] md:text-[20px] transition-all duration-300 ease-in-out rounded hover:bg-[#c7c7c7] hover:text-white">
            <div className="flex gap-x-2">
              <img className="w-5" src={wishlistIcon} alt="wishlist" />
              <p>Wishlist</p>
            </div>
            <img className=" rotate-180 md:hidden" src={backIcon} alt="back" />
          </span>

          {/* inbox */}
          <span
            onClick={(e) => setActiveTab("inbox")}
            className="py-4 text-[#1f1f29] group/4 px-4 justify-between flex items-center gap-1 flex-nowrap font-semibold text-[16px] md:text-[20px] transition-all duration-300 ease-in-out rounded hover:bg-[#c7c7c7] hover:text-white"
          >
            <div className="flex gap-x-2">
              <img className="w-5" src={mailIcon} alt="mail" />
              <p>Inbox</p>
            </div>
            <img className="rotate-180 md:hidden" src={backIcon} alt="back" />
          </span>

          <hr className="border-[#cacaca] my-5" />

          <p className="py-4 px-2 text-center text-[18px] text-[red]">Logout</p>
          <p className="text-center text-[18px] py-4 px-2 text-[red] rounded transition duration-300 ease-in-out hover:text-[white] hover:bg-[red]">
            Close Account
          </p>
        </div>

        {/* the account tab */}
        {activeTab === "account" && (
          <div className="mmd:z-[6] mmd:absolute mmd:bottom-0 mmd:left-0 mmd:right-0 mmd:top-0 mmd:pt-8 slide-in bg-[white] w-[100%] rounded md:border-[#E4E4EE] md:border-[1px] md:basis-[74%] p-5">
            <img
              onClick={(e) => setActiveTab("")}
              className="fixed top-5 right-5 md:hidden"
              src={backIcon}
              alt="back"
            />

            <h2 className="text-[#1f1f29] font-semibold text-[18px] mb-4 md:text-[20px]">
              Account Overview
            </h2>

            {/* form to change user's name, email and password */}
            <form
              className="rounded-[6px] h-max mb-5 border-[#E4E4EE] border-[1px] p-5"
              action=""
            >
              <input
                className={inputStyle}
                type="text"
                placeholder="users name"
                disabled
              />
              <label className={labelStyle} htmlFor="name">
                Change name
              </label>

              <br />

              {/* Email */}
              <input
                className={inputStyle}
                type="email"
                placeholder="user's mail"
                disabled
              />
              <label className={labelStyle} htmlFor="mail">
                Change email
              </label>
              <br />

              {/* old password */}
              <input
                className={inputStyle}
                type="password"
                placeholder="Old password"
              />

              {/* New password */}
              <input
                className={inputStyle}
                type="new-password"
                placeholder="Old password"
              />

              <label className={labelStyle} htmlFor="new-password">
                Change Password
              </label>
            </form>

            <h2 className="text-[#1f1f29] font-semibold text-[18px] my-5 md:text-[20px]">
              Address
            </h2>

            {/* address and add address */}
            <div className="flex gap-[20px]">
              {/* added address */}
              <div className="rounded-[6px] h-min mb-5 border-[#E4E4EE] border-[1px] p-5">
                {/* button to add address */}
                <p
                  onClick={(e) => setShowhowAddAddress(!showAddAddress)}
                  className="text-green font-medium text-right"
                >
                  Add
                </p>

                <div className="address">
                  <h3>{name ? name : "---"}</h3>

                  {/* the buyers address */}
                  <p>
                    2 Savi road, Reading, Berkshire RB3 7LU, <br />
                    {country ? country : "---"} <br />
                    Phone: {phoneNumber ? phoneNumber : "-----"}
                  </p>

                  <p className="green rounded">Change address</p>
                </div>
              </div>

              {/* form for changing address or adding a new address*/}
              {showAddAddress && (
                <div className="slide-in rounded-[6px] mb-5 border-[#E4E4EE] border-[1px] p-5">
                  <div className="add-address">
                    <form>
                      {/* Full name */}
                      <fieldset>
                        <legend>Full name</legend>
                        <input type="text" required />
                      </fieldset>

                      {/* address */}
                      <fieldset>
                        <legend>Address</legend>
                        <input type="text" required />
                      </fieldset>

                      {/* Street Adress */}
                      <fieldset>
                        <legend>Street address</legend>
                        <input type="text" required />
                      </fieldset>

                      {/* town/city */}
                      <fieldset>
                        <legend>Town/City</legend>
                        <input type="text" required />
                      </fieldset>

                      {/* Country */}
                      <fieldset>
                        <legend>Country</legend>
                        <input type="text" required />
                      </fieldset>

                      {/* postcode */}
                      <fieldset>
                        <legend>Postcode</legend>
                        <input type="text" required />
                      </fieldset>

                      {/* phone number */}
                      <fieldset className="f">
                        <legend>Phone number</legend>

                        <select>
                          {dialCodes.map((code, index) => {
                            return (
                              <option value={code.dial_code}>
                                {code.dial_code}
                              </option>
                            );
                          })}
                        </select>

                        <input type="text" required />
                      </fieldset>

                      <button>Save</button>
                      <button
                        onClick={(e) => setShowhowAddAddress(false)}
                        className="btn2"
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 📍📌📌📌 */}
        {/* inbox || this tab is visible activeTab is set to inbox*/}
        {activeTab === "inbox" && (
          <div className="mmd:z-[6] mmd:absolute mmd:bottom-0 mmd:left-0 mmd:right-0 mmd:top-0 mmd:pt-8 md-block  bg-[white] w-[100%] md:relative rounded md:border-[#E4E4EE] md:border-[1px] md:basis-[74%] p-5 ">
            {/* message to be shown when the inbox is empty */}
            <img
              onClick={(e) => setActiveTab("")}
              className="fixed top-5 right-5 md:hidden"
              src={backIcon}
              alt="back"
            />

            <Lottie
              style={{ marginTop: "30px" }}
              options={{
                animationData: noMessage,
                loop: true,
              }}
              width={250}
              height={250}
            />

            <h1 className="font-semibold text-8 text-[#1f1f29] text-center m-5">
              No Messages
            </h1>
          </div>
        )}

        {/* MY ORDER'S TAB */}
        {activeTab === "order" && <Orders />}
      </div>

      <Footer />
    </div>
  );
};

export default Account;
