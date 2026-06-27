import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>I absolutely love this shirt! The fabric is soft, breathable, 
            and very comfortable to wear all day. The color looks exactly like the pictures, and the stitching is neat. It fits perfectly, and the size chart was accurate. 
            I received many compliments when wearing it. Highly recommended!</p>
        <p>I enjoy shopping on this e-commerce platform because it offers many products, 
            affordable prices, and reliable delivery. The ordering process is simple and convenient.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
