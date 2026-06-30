import { useContext } from "react";
import { ShopContext } from "../types/types";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrums/Breadcrum";
import ProductDisplay from "../components/productdisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionbox/DescriptionBox";
import RelatedProducts from "../components/relatedproducts/RelatedProducts";

const Product = () => {
  const context = useContext(ShopContext);
  const { productId } = useParams();

  if(!context) return null;
  const { data } = context;
  const product = data.find((e) => e.id === Number(productId));

  if (!product) return <div>Không tìm thấy sản phẩm</div>;
  if (!product.category) {
    return <div>Thiếu category</div>;
} 
  return (
    <div>
      <Breadcrum category={product.category} name={product.name} />
      <ProductDisplay 
        id={product.id} 
        name={product.name} 
        image={product.image} 
        old_price={product.old_price} 
        new_price={product.new_price}
      />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product