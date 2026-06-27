import { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../types/types";
const ProductDisplay = (props: {
  id: number
  image: string;
  name: string;
  old_price: number;
  new_price: number;
}) => {
  const context = useContext(ShopContext);
  if(!context) return null;
  const { addToCart } = context;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={props.image} alt="" />
          <img src={props.image} alt="" />
          <img src={props.image} alt="" />
          <img src={props.image} alt="" />
        </div>
        <img className="productdisplay-main-img" src={props.image} alt="" />
      </div>
      <div className="productdisplay-right">
        <h1>{props.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(233)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {props.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            {props.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
            The quality is good for the price, and the material feels nice. 
            However, the size runs a little smaller than expected, so I recommend ordering one size up. Shipping was fast, 
            and the packaging was neat. Overall, I'm satisfied with my purchase and would consider buying from this seller again.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(props.id)}} className="productdisplat-right-button">ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Modern, Lastest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
