import React from "react";
import './FeaturedCategories.css'
import category1 from '../../assets/images/category-1.jpg'
import category2 from '../../assets/images/category-2.jpg'
import category3 from '../../assets/images/category-3.jpg'

function FeaturedCategories() {
  return (
    <>
      <div className="small-container">
        <div className="parent">
          <div className="flex">
            <img src={category1} />
          </div>
          <div className="flex">
            <img src={category2} alt="" />
          </div>
          <div className="flex">
            <img src={category3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedCategories;
