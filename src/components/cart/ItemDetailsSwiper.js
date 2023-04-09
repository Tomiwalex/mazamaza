import React from "react";
import { useState } from "react";
import shop1 from "../../images/shop1.png";
import shop2 from "../../images/shop2.png";
import shop3 from "../../images/shop3.png";
import shop4 from "../../images/shop4.png";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const ItemDetailsSwiper = () => {
  return (
    <div className="item-detail-swiper">
      <ImageGallery items={images} />;
    </div>
  );
};

export default ItemDetailsSwiper;
