import React, { useContext, useEffect, useState } from "react";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Categorypop from "../components/Categorypop";
import Footer from "../components/Footer";
import ItemDetailsSwiper from "../components/cart/ItemDetailsSwiper";
import icon1 from "../images/detf.svg";
import icon2 from "../images/dett.svg";
import icon3 from "../images/deti.svg";
import icon4 from "../images/detm.svg";
import Reviews from "../components/Reviews";
import { useLocation, useNavigate } from "react-router";
import { convertCurrency } from "../hooks/convertCurrency";
import Lottie from "react-lottie";
import star from "../assets/lottie/81301-stargazing.json";
import { AppContext } from "../App";

const ItemDetails = () => {
  const { handleAddtoCart,signedIn } = useContext(AppContext);
  const navigate = useNavigate();


  const social = {
    twitter: icon2,
    facebook: icon1,
    instagram: icon3,
    email: icon4,
  };

  const location = useLocation();
  const product = location.state;

  console.log(product, location.state);

  const priceDiscount = product?.promotions?.filter((promotion) => {
    return promotion?.promotionType === "priceDiscount";
  });

  const volumeDiscount = product?.promotions?.filter((promotion) => {
    return promotion?.promotionType === "volumeDiscount";
  });

  const [priceDiscountPrice, setpriceDiscountPrice] = useState("loading");
  const [volumeDiscountPrice, setvolumeDiscountPrice] = useState("loading");

  const [originalPrice, setoriginalPrice] = useState("loading");

  async function convertPrice(currency, price, callback) {
    const converted = await convertCurrency(currency, price);
    callback(converted);
  }

  useEffect(() => {
    if (volumeDiscount?.length > 0) {
      convertPrice(
        product?.currency,
        product?.price * (volumeDiscount[0].discountPercentage / 100),
        setvolumeDiscountPrice
      );
    }
    if (priceDiscount?.length > 0) {
      convertPrice(
        product?.currency,
        product?.price * (priceDiscount[0].discountPercentage / 100),
        setpriceDiscountPrice
      );
    }
    if (!volumeDiscount?.length > 0 && !priceDiscount?.length > 0) {
      convertPrice(product?.currency, product?.price, setoriginalPrice);
      console.log(originalPrice);
    }
  }, [product]);
  return (
    <div className="item-details">
      <Header1 />
      <Header2 />
      <Categorypop />

      <div className="item-detail">
        {/* the product slider  */}
        <ItemDetailsSwiper />

        {/* about containing the model, color, material, quantity, etc */}
        <div className="item-about">
          <h2>{product?.name}</h2>

          <div className="f-jc-sb">
            <p
              className="item-star-rating
                "
            >
              ⭐ {product?.rating||0}
            </p>

            <p className="no-item-feedback green">
              {product?.reviews?.length || 0} product feedback
            </p>

            {/* <p className="no-orders gray">425 orders</p> */}
          </div>

          {/* the products condition, either used or new */}
          <div className="item-condition">
            <h3 className="title">Variants:</h3>
          </div>

          {/* product available colors */}
          <div className="item-condition">
            <p className="title">Color:</p>

            <select>
              <option>red</option>
              <option>black</option>
              <option>black</option>
            </select>
          </div>

          {/* Model of the item */}
          <div className="item-condition">
            <p className="title">Model:</p>

            <select>
              <option>red</option>
              <option>black</option>
              <option>black</option>
            </select>
          </div>

          {/* material used */}
          <div className="item-condition">
            <p className="title">Material:</p>

            <select>
              <option>leather</option>
              <option>rubber</option>
              <option>plastic</option>
            </select>
          </div>

          {/* quantity, and available material */}
          <div className="item-condition f-ai-c">
            <p className="title">Quantity:</p>
            <span>1</span>

            {/* number of ab */}
            <p className="gray">{product?.numberInStock} Available</p>
          </div>

          {/* buy it now */}
          <div className="item-condition">
            <p className="title">Buy it now</p>

            {priceDiscount?.length > 0 && (
              <div>
                <h3 className="price line-through text-deep-gray">
                  {originalPrice || "loading"}
                </h3>
                <h3 className="price"> {priceDiscountPrice || "loading"}</h3>
                <p>Discount: {priceDiscount[0].discountPercentage}% </p>
              </div>
            )}

            {volumeDiscount?.length > 0 && (
              <div>
                {volumeDiscount[0]?.discountPercentage}% Discount available when
                you buy {volumeDiscount[0]?.discountVolume}
                <h3 className="price line-through text-deep-gray">
                  {originalPrice || "loading"}
                </h3>
                <h3 className="price"> {volumeDiscountPrice || "loading"}</h3>
                <p>Discount %: {volumeDiscount[0].discountPercentage}% </p>
                <p>Discount volume: {volumeDiscount[0].discountVolume}% </p>
              </div>
            )}

            {!priceDiscount?.length > 0 && !volumeDiscount?.length > 0 && (
              <div>
                <h3 className="price">{originalPrice}</h3>
              </div>
            )}
          </div>

          {/* <button>Buy Now</button> */}
          <button className="btn2" onClick={e=>{signedIn?  handleAddtoCart(product):navigate('/signIn')}}>Add to cart</button>

          {/* shipping information */}
          <div className="item-condition">
            <p className="title">Shipping:</p>

            <div>
              <h3>{product?.isFreeShipping ? "Free" : product?.shippingAgent}</h3>
            </div>
          </div>

          {/* location */}
          <div className="item-condition">
            <p className="title"> Location:</p>
            <p className="gray">{`${product?.seller.shop.address.country}, ${product?.seller.shop.address.state}, ${product?.seller.shop.address.city}`}</p>
          </div>

          {/* ship to */}
          <div className="item-condition">
            <p className="title">Ship to:</p>
            <p className="gray">United Kingdom and many other countries</p>
          </div>

          {/* payment */}
          <div className="item-condition">
            <p className="title">Delivery</p>
            <p>--</p>
          </div>

          {/* payment */}
          <div className="item-condition f-jc-sb">
            <p className="title">payment</p>
            <p>--</p>
          </div>

          {/* return information */}
          <div className="item-condition">
            <p className="title">Returns</p>
            <p>--</p>
          </div>
        </div>

        {/* item seller info */}
        <div className="seller-info">
          <div className="info">
            <h3>Sold by</h3>
            <p className="green">{product?.seller?.shopName}</p>
            {/* <p>98.7% positive feed back</p> */}
            <hr />
            <p className="green">Contact Seller</p>
            <p className="green">Seller's other items</p>
          </div>
          <div className="icon">
            {product?.seller?.shop?.socialPlatforms?.map((platform) => (
              platform.name &&
              <div
                className=" flex item-center"
                onClick={e=>window.open(platform.link)}
              >
                <img
                  src={social[platform?.name?.toLowerCase()]}
                  alt="facebook-icon"
                />
                <p>{platform?.name}</p>
              </div>
            ))}
            <div
              className=" flex item-center"
              onClick={e=>window.open(product?.seller.email)}
            >
              <img src={social.email} alt="facebook-icon" />
              <p>{product?.seller.email}</p>
            </div>
            {/* <img src={icon4} alt="mail-icon" /> */}
          </div>
        </div>

        {/* /* This code is rendering the item specification section of an item details page. It includes a
        header with the title "Item specification" and several `div` elements, each containing a `p`
        element with a `title` class and a `p` element with a `content` class. Each `title` element
        describes a specific aspect of the item (e.g. "Condition", "Platform", "Format", etc.),
        while the corresponding `content` element provides more detailed information about that
        aspect.  */}
        {product?.specifications?.length > 0 && (
          <div className="item-specification">
            <h3>Item specification :</h3>
            {product?.specifications?.map((specification) => {
              return (
                <div>
                  <p className="title">{`${specification.name}:`}</p>
                  <p className="content">{specification.value}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* item description */}
        {/* /* The below code is creating a HTML div element with a class name "item-description" and
       containing a heading (h3) and a paragraph (p) element with Lorem Ipsum dummy text. This code
       is likely part of a larger HTML document or web page. */}
        <div className="item-description">
          <h3>Item description</h3>

          <p>{product?.description}</p>
        </div>

        {/* /* This code is rendering the business seller information section of an item details page. It
        includes the business name and address of the seller. The `div` has two child `div`s, each
        containing a `p` element with a `title` class and a `p` element with a `content` class. The
        first child `div` contains the business name, while the second child `div` contains the
        business address. */}
        <div className="business-seller-info item-specification">
          <div>
            <p className="title">Business name:</p>
            <p className="content">{product?.seller.shopName}</p>
          </div>

          <div>
            <p className="title">Business address:</p>
            <p className="content gray">{`${product?.seller.shop.address.country}, ${product?.seller.shop.address.state}, ${product?.seller.shop.address.city}`}</p>
          </div>
        </div>

        {/* customer review */}
        {/* /* This code is rendering the customer review section of an item details page. It includes a
       header with the title "Customer reviews" and a star rating and number of feedbacks displayed
       above a chart that shows the percentage of reviews for each star rating (5 stars, 4 stars, 3
       stars, etc.). The chart is generated by mapping through an array of star reviews and
       rendering a bar chart for each one. */}
        <div className="customer-review">
          <div className="review-head f-jc-sb">
            <h3>Customer reviews</h3>

            <div>
              <p>
                {/* star rating */}
                <span className="star">⭐</span> {product?.rating || 0}out of 5
              </p>

              {/* number of feedbacks */}
              <p className="gray">
                {product?.reviews?.length || 0} product feedback
              </p>
            </div>
          </div>

          {/* review chart */}
          {product?.reviews?.length > 0 ? (
            <div className="review-chart">
              {/* number of stars, the chart, and the percentage */}
              {/* mapping the starRating array on top of this page */}
              {product?.reviews?.map((item, index) => {
                return (
                  <div key={index} className="bar-chart f-jc-sb">
                    <p>{item.rating}</p>

                    <span className="bar">
                      <span
                        className="level"
                        style={{ width: item.percentage }}
                      ></span>
                    </span>

                    <p>{item.percentage}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className=" flex flex-col items-center my-4">
              <p className="text-center text-xl my-12"> No rating yet</p>
              <Lottie
                options={{
                  animationData: star,
                  loop: true,
                }}
                width={200}
              />
            </div>
          )}
        </div>

        <Reviews reviews={product?.reviews} />
      </div>

      <Footer />
    </div>
  );
};

export default ItemDetails;
