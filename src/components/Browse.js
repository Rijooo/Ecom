import React, { useState } from "react";
import Product from "./Product";
import "../styles/Product.css";
import "../styles/Browse.css";
import { listItems } from "../utils/utils";
import BrowserHeader from "./BrowserHeader";

const Browse = () => {
  let Data = listItems;
  const [listOfRes, setListOfRes] = useState(Data);
  // console.log(listOfRes);

  return (
    <div>
      <BrowserHeader />
      <button
        className="filter-btn"
        onClick={() => {
          let filteredRes = listOfRes.filter((e) => e.info.avgRating > 4.5);
          setListOfRes(filteredRes);
        }}
      >
        FILTER
      </button>
      <div className="wrapp">
        {listOfRes.map((res,index) => (
          <Product  key={index}   r={res} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
