import React, { Suspense, useState } from "react";
import logo from "../../images/logo-img.svg";
import itemimg from "../../images/shop1.png";
import products from "../../json/products.json";

const ProductCard = () => {
  const [items, setItems] = useState(products);
  return (
    <Suspense fallback={<p>loading....</p>}>
      <div className="product-card f-jc-sb">
        {/* mappin the items from the database */}
        {items.map((item, index) => {
          return (
            <div className="item">
              <Suspense fallback={logo}>
                <img src={itemimg} alt="product-image" />
              </Suspense>

              <p className="item-name">{item.name}</p>

              <p className="item-price">{item.price}</p>

              <button>Add to My Bag</button>
            </div>
          );
        })}
      </div>
    </Suspense>
  );
};

export default ProductCard;
