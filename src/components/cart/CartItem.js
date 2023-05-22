import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import CartItemTemplate from "./CartItemTemplate";
import nocart from "../../images/nocart.svg";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { convertCurrency } from "../../hooks/convertCurrency";

const CartItem = () => {
  const { cartItem, getCartItems, setCartTotal } = useContext(AppContext);
  const [convertedPrices, setConvertedPrices] = useState([]);

  async function convertPrices() {
    try {
      const converted = await Promise.all(
        cartItem.map((item) => convertCurrency(item.currency, item.price))
      );
      setConvertedPrices(converted);
  
    } catch (error) {
      console.log(error)
    }

    // console.log(converted);
  }

  useEffect(() => {
    convertPrices();
  }, [cartItem]);

  useEffect(() => {
    if (convertedPrices?.length > 0) {
      const total = convertedPrices.reduce((a, b) => {
        return a + b.split(" ")[1];
      });
      console.log(total);
      setCartTotal(`${convertedPrices[0].split(" ")[0]} ${total}`);
    }
  }, [convertedPrices,cartItem]);
  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div>
      {cartItem?.items?.length > 0 ? (
        cartItem?.items?.map((item, index) => {
          // console.log(item);
          return (
            <div key={index}>
              <CartItemTemplate
                itemName={item?.product?.name}
                itemPrice={
                  convertedPrices[index] ||
                  `${item?.product?.currency} ${item?.product?.price}`
                }
                itemImageUrl={
                  item?.product?.productImage?.length > 0
                    ? item?.product?.productImage[0]
                    : null
                }
                itemQuantity={item.quantity}
                cartId={item?.product?._id}
              />
            </div>
          );
        })
      ) : (
        // this is the div displaying no cart item
        <div className="flex items-center justify-center gap-10 flex-wrap lg:flex-nowrap max-w-none mt-9">
          <Suspense fallback="Loading....">
            <img
              className="jello-horizontal w-[60%] lg:w-[70%]"
              src={nocart}
              alt="empty-basket"
            />
          </Suspense>
          <div className="text-center lg:text-left m-2">
            <h1 className="text-black font-semibold text-[40px] mb-4 leading-tight">
              Oops there is nothing here!
            </h1>
            <Link
              to="/home"
              className="text-white inline-block bg-[#0C9B18] px-3 py-2 rounded-[6px] text-sm  hover:scale-[0.99] transition duration-300 ease-in-out"
            >
              Shop Now ➡
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
