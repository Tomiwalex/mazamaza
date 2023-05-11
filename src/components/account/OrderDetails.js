import React from "react";
import proimg from "../../images/braided.png";

const OrderDetails = ({ productName, imageUrl, orderOpened, orderType }) => {
  return (
    <div
      style={{
        display:
          orderOpened && orderType === "opened"
            ? "flex"
            : "non" && !orderOpened && orderType === "closed"
            ? "flex"
            : "none",
      }}
      className="my-3 basis-[100%] md:basis-[48%] border-[1px] border-solid border-[#f1f1f1] px-4 py-3 rounded-[6px] flex gap-x-3"
    >
      <img
        className="w-[90px] h-[90px] object-cover rounded border-r-green "
        src={proimg}
        alt={productName}
      />

      {/* product name */}
      <div className="flex-1">
        <p className="font-[500] text-[16px] lg:text-[20px] text-[#2c2c35]">
          {productName}
        </p>
      </div>

      {/* order status */}
      <p
        style={{
          color: orderOpened ? "gray" : "green",
          background: orderOpened ? "#8080801f" : "#0080001c",
        }}
        className="text-[13px] p-1 px-2 rounded-[6px] h-min"
      >
        {orderOpened ? "opened" : "delivered"}
      </p>
    </div>
  );
};

export default OrderDetails;
