import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        {/* scrollTo is used to open the top of the page */}
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="/" />
      </Link>
      <p>{props.name}</p>
      <div className="items-price">
        <div className="items-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
