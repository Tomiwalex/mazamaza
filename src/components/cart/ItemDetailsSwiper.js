import React, { useEffect } from "react";
import { useState } from "react";
import shop1 from "../../images/shop1.png";
import shop2 from "../../images/shop2.png";
import shop3 from "../../images/shop3.png";
import shop4 from "../../images/shop4.png";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useLocation } from "react-router";

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
  const location = useLocation()
  const [imagesrc, setImageSrc] = useState([]),
  product = location.state

  console.log(product)
  let formatProductImages = [];

  product.productImage.map((image)=>{
    formatProductImages.push({
      original: image,
      thumbnail: image
    })
  })
useEffect(()=>{
  setImageSrc(formatProductImages)
  console.log(imagesrc,formatProductImages)
},[])

  return (
    <div className="item-detail-swiper">
      <ImageGallery autoPlay={true} items={imagesrc} onImageError={e=>{setImageSrc(images);}} />;
    </div>
  );
};

export default ItemDetailsSwiper;
