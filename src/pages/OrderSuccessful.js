import React from "react";
import Lottie from "react-lottie";
import success from "../assets/lottie/success.json";
import { Link } from "react-router-dom";

const OrderSuccessful = ({ orderId, date }) => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg p-5 w-[80%] lg:max-w-[512px] text-center">
        <Lottie
          options={{
            animationData: success,
            loop: true,
          }}
          width={100}
        />

        <h1 className="text-[#25252E] text-3xl font-[600] my-4">Thank You!</h1>
        <h3 className="text-[#25252E] text-[22px] font-semibold">
          Your order has been placed.
        </h3>
        <p className="text-[#25252E] text-[18px] font-normal">
          we've sent you an email confirmation
        </p>
        <h4 className="text-[#25252E] text-[18px] font-normal">Order ID:</h4>
        <p className="text-[#25252E] text-[18px] font-normal my-2">
          {orderId ? orderId : "--------"}
        </p>
        <p className="text-[#25252E] text-[18px] font-semibold my-2">
          {date ? date : "-------"}
        </p>

        <Link className="text-white px-4 py-3 bg-[#0C9B18] rounded-[6px] my-4 inline-block transition ease-out duration-300 hover:bg-gray-100 hover:text-[#0C9B18]">
          View Order Details
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessful;
