import React, { useContext, useEffect, useState } from "react";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Categorypop from "../components/Categorypop";
import navigationList from "../json/navigationList.json";
import { AppContext } from "../App";
import Footer from "../components/Footer";
import downIcon from "../images/chevron-down.svg";
import PriceRange from "../components/cart/PriceRange";
import Details from "../components/cart/Details";
import ProductCard from "../components/cart/ProductCard";
import countryCodes from "../json/countryCodes.json";
import axios from "axios";

const Product = () => {
  const { searchName,searchCategory,maxPrice,minPrice} = useContext(AppContext);
  const [products, setProducts] = useState([])
  const [sort, setSort] = useState('price')

  // const sortOptions = {
  //   price:price,
  //   date: createdAt
  // }



  const getProducts = async () =>{
    try {
      console.log(searchName)
      const response  = await axios.get(`http://localhost:4000/api/product/filter?category=${searchCategory}&sort=${sort}&name=${searchName}&maxPrice=${maxPrice}&minPrice=${minPrice}`)
      if (response) {

        setProducts(response.data.data)
        console.log(response.data.data)
      }

    } catch (error) {
      alert('could not load products in this category')
      console.log(error)
    }
  }

  useEffect(()=>{
    getProducts()
  },[searchName,searchName,maxPrice,minPrice,sort,searchCategory])
  return (
    <div className="products">
      <Header1 />
      <Header2 />
      <Categorypop />
      <div className="product">
        <div className="side-bar">
          <h2>Category</h2>

          <div className="navigationlist">
            {/* MAPPING THROUGH THE .NAVIGATION LIST ARRAY */}
            {navigationList.map((item, index) => {
              return <span key={index}>{item.heading}</span>;
            })}

            <div className="green f-jc-sb">
              <p>See all categories</p>
              <img src={downIcon} alt="" />
            </div>

            <h2>Price</h2>
            <PriceRange />

            {/* for details you need to pass the detailTitle props and detailList prop, the detailList prop should be an array */}
            <Details
              detailTitle={"Categories"}
              detailList={[
                "Gucci",
                "Vercace",
                "luis Vuiton",
                "Dolce",
                "Puma",
                "Givenchy",
                "Addidas",
                "Nike",
                "Tom Hilfiger",
              ]}
            />
            <Details
              detailTitle={"Brands"}
              detailList={[
                "Gucci",
                "Vercace",
                "luis Vuiton",
                "Dolce",
                "Puma",
                "Givenchy",
                "Addidas",
                "Nike",
                "Tom Hilfiger",
              ]}
            />
          </div>
        </div>

        <div className="content">
          {/* the head contains filtering options */}
          <div className="content-head f-jc-sb">
            <p>search result for '{searchName}' in {searchCategory?.toUpperCase()||'All categories'}</p>

            <div className="sort f-jc-sb"> 
              <div className="f-jc-sb">
                <span>Sort by:</span>

                <select className="select-type" onChange={e=>{setSort(e.currentTarget.value)}}>
                  <option value="price:asc">Price (ascending) </option>
                  <option value="price:desc">Price (descending) </option>

                  <option value="rating:asc">Rating (ascending) </option>
                  <option value="rating:desc">Rating (descending) </option>
                  <option value="createdAt:desc">Date(ascending)</option>
                  <option value="createdAt:desc">Date(descending)</option>

                  {/* <option value="">old</option> */}
                </select>
              </div>

              <div className="country f-jc-sb">
                <span>Shipping to:</span>

                <select className="select-country">
                  {countryCodes.map((country, index) => {
                    return (
                      <option key={index} value={country.name}>
                        {/* // {country.flag} */}
                        {country.name}
                      </option>
                    );
                  })}
                  {/* <option value="uk">UK</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="ghana">Ghana</option> */}
                </select>
              </div>
            </div>
          </div>

          <div className="items">
            {/* the product card with the add to cart function */}
            <ProductCard product={products} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
