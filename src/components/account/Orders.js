import React, { useContext } from "react";
import backIcon from "../../images/back-arrow.svg";
import { useState } from "react";
import OrderDetails from "./OrderDetails";
import { AppContext } from "../../App";

const Orders = () => {
  const { setActiveTab } = useContext(AppContext);

  //opened and closed orders
  const [orderType, setOrderType] = useState("closed");
  const [noofClosedOrders, setNoofClosedOrders] = useState(1);
  const [noofOpenedOrders, setNoofOpenedOrders] = useState(1);

  return (
    <div className="mmd:z-[6] mmd:absolute mmd:bottom-0 mmd:left-0 mmd:right-0 mmd:top-0 mmd:pt-8 md-block  bg-[white] w-[100%] md:relative rounded md:border-[#E4E4EE] md:border-[1px] md:basis-[74%] p-5">
      {/* message to be shown when the inbox is empty */}
      <img
        onClick={(e) => setActiveTab("")}
        className="fixed top-5 right-5 md:hidden"
        src={backIcon}
        alt="back"
      />

      {/* // switch for open and close */}
      <div className="flex items-center justify-around gap-10 mmd:mt-">
        <p
          onClick={(e) => setOrderType("opened")}
          style={{ color: orderType === "opened" && "#0C9B18" }}
          className="basis-1/2 text-lg font-semibold lg:text-[20px] text-[#797979] p-4"
        >
          Opened{`(${noofOpenedOrders})`}
        </p>

        <p
          onClick={(e) => setOrderType("closed")}
          style={{ color: orderType === "closed" && "#0C9B18" }}
          className="text-lg font-semibold lg:text-[20px] text-[#797979] p-4"
        >
          Closed{`(${noofClosedOrders})`}
        </p>
      </div>

      <span
        style={{ left: orderType === "closed" ? "calc(50% + 20px)" : "-20px" }}
        className="block relative h-[2px] bg-green w-[50%] mb-10 transition-all duration-300 ease-out"
      ></span>

      {/* Orders list */}
      <div className="flex flex-wrap justify-between">
        {/* this is the template for the order details box you can just map the list or array and use this template for each*/}
        <OrderDetails
          orderType={orderType}
          productName={"Braided hair"}
          imageUrl={"proimg"}
          orderOpened={true}
        />

        <OrderDetails
          orderType={orderType}
          productName={"Yamarita"}
          imageUrl={"proimg"}
          orderOpened={false}
        />
      </div>
    </div>
  );
};

export default Orders;
