import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../components/Item/item";
import "./ShopCategory.css";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shopcategory-page">
      <img className="shopcategory-banner" src={props.banner} />
      <div className="shopcategory-container">
        <div className="shopcategory-products">
          {all_product.map((item, i) => {
            if (props.category == item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
