import { useContext, useState, useEffect } from "react";
import type { CategoryProps } from "../types/types";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/item/Item";
import dropdown_icon from "../assets/dropdown_icon.png";
const ShopCategory = ({ category, banner }: CategoryProps) => {
  const context = useContext(ShopContext);
  const [hasProduct, setHasProduct] = useState<boolean>(false);

  useEffect(() => {
    if (!context) return;
    const found =
      context.data.filter((item) => category === item.category).length > 0;
      setHasProduct(found);
  }, [context, category]); 

  if (!context) return null;
  const { data } = context;

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {data.filter((item) => category === item.category).length === 0 ? (
          <p>No goods!</p>
        ) : (
          data.map((item, index) => {
            if (category === item.category) {
              return (
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
            return null;
          })
        )}
      </div>
      <div className="shopcategory-loadmore" style={hasProduct?{display: ''}:{display:'none'}}>
          Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
