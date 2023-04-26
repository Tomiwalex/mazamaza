import React from "react";
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

const ItemDetails = () => {
  const starRating = [
    {
      no: "5 Star",
      percentage: "35%",
    },
    {
      no: "4 Star",
      percentage: "20%",
    },
    {
      no: "3 Star",
      percentage: "17%",
    },
    {
      no: "2 Star",
      percentage: "18%",
    },
    {
      no: "1 Star",
      percentage: "10%",
    },
  ];

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
          <h2>Genuine Pure Skin Red Bag</h2>

          <div className="f-jc-sb">
            <p
              className="item-star-rating
                "
            >
              ⭐⭐⭐⭐⭐
            </p>

            <p className="no-item-feedback green">125 product feedback</p>

            <p className="no-orders gray">425 orders</p>
          </div>

          {/* the products condition, either used or new */}
          <div className="item-condition">
            <p className="title">Condition:</p>

            <div className="condition">
              <h3>Used</h3>
              <p className="gray">
                'Example of the sellers explanation, example of the sellers,
                explanation'
              </p>
            </div>
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
            <p className="gray">35 Available</p>
          </div>

          {/* buy it now */}
          <div className="item-condition">
            <p className="title">Buy it now</p>

            <h3 className="price">US $ 12,345.67</h3>
          </div>

          <button>Buy Now</button>
          <button className="btn2">Add to cart</button>

          {/* shipping information */}
          <div className="item-condition">
            <p className="title">Shipping:</p>

            <div>
              <h3>Free Economy Int’l Delivery to United Kingdom</h3>
            </div>
          </div>

          {/* location */}
          <div className="item-condition">
            <p className="title"> Location:</p>
            <p className="gray">Hamtramck, Michigan, United States</p>
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
            <p className="green">username_1121i3y3</p>
            <p>98.7% positive feed back</p>
            <hr />
            <p className="green">Contact Seller</p>
            <p className="green">Seller's other items</p>
          </div>
          <div className="icon">
            <img src={icon1} alt="facebook-icon" />
            <img src={icon2} alt="twitter-icon" />
            <img src={icon3} alt="insta-icon" />
            <img src={icon4} alt="mail-icon" />
          </div>
        </div>

        {/* /* This code is rendering the item specification section of an item details page. It includes a
        header with the title "Item specification" and several `div` elements, each containing a `p`
        element with a `title` class and a `p` element with a `content` class. Each `title` element
        describes a specific aspect of the item (e.g. "Condition", "Platform", "Format", etc.),
        while the corresponding `content` element provides more detailed information about that
        aspect.  */}
        <div className="item-specification">
          <h3>Item specification</h3>
          <div>
            <p className="title">Condition:</p>
            <p className="content">
              A brand new, un used, unopened, undamaged item.
            </p>
          </div>
          <div>
            <p className="title">Platform:</p>
            <p className="content">Windows</p>
          </div>
          <div>
            <p className="title">Format:</p>
            <p className="content">Download</p>
          </div>
          <div>
            <p className="title">EAT:</p>
            <p className="content">86324873434</p>
          </div>
          <div>
            <p className="title">Brand:</p>
            <p className="content">sYmantec</p>
          </div>
          <div>
            <p className="title">Type:</p>
            <p className="content">Anti- spy ware</p>
          </div>
          <div>
            <p className="title">MPN:</p>
            <p className="content">14567899876</p>
          </div>
        </div>

        {/* item description */}
        {/* /* The below code is creating a HTML div element with a class name "item-description" and
       containing a heading (h3) and a paragraph (p) element with Lorem Ipsum dummy text. This code
       is likely part of a larger HTML document or web page. */}
        <div className="item-description">
          <h3>Item description</h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like
          </p>
        </div>

        {/* /* This code is rendering the business seller information section of an item details page. It
        includes the business name and address of the seller. The `div` has two child `div`s, each
        containing a `p` element with a `title` class and a `p` element with a `content` class. The
        first child `div` contains the business name, while the second child `div` contains the
        business address. */}
        <div className="business-seller-info item-specification">
          <div>
            <p className="title">Business name:</p>
            <p className="content">Amet minimin</p>
          </div>

          <div>
            <p className="title">Business address:</p>
            <p className="content gray">2715 Ash Dr. San Jose Smith</p>
          </div>
        </div>

        {/* customer review */}
        {/* /* This code is rendering the customer review section of an item details page. It includes a
       header with the title "Customer reviews" and a star rating and number of feedbacks displayed
       above a chart that shows the percentage of reviews for each star rating (5 stars, 4 stars, 3
       stars, etc.). The chart is generated by mapping through an array of star ratings and
       rendering a bar chart for each one. */}
        <div className="customer-review">
          <div className="review-head f-jc-sb">
            <h3>Customer reviews</h3>

            <div>
              <p>
                {/* star rating */}
                <span className="star">⭐⭐⭐⭐</span> 4.2 out of 5
              </p>

              {/* number of feedbacks */}
              <p className="gray">125 product feedback</p>
            </div>
          </div>

          {/* review chart */}
          <div className="review-chart">
            {/* number of stars, the chart, and the percentage */}
            {/* mapping the starRating array on top of this page */}
            {starRating.map((item, index) => {
              return (
                <div key={index} className="bar-chart f-jc-sb">
                  <p>{item.no}</p>

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
        </div>

        <Reviews />
      </div>

      <Footer />
    </div>
  );
};

export default ItemDetails;