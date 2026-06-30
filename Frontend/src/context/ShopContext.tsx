import { useState, useEffect } from "react";
import { getApi } from "../services/apiProducts.ts";
import { ShopContext } from "../types/types.ts";
import type {
  Product_data,
  ShopContextType,
  ShopContextProviderProp,
} from "../types/types.ts";
import { productImages } from "../assets/all_image_product.ts";


const ShopContextProvider = ({ children }: ShopContextProviderProp) => {
  const [data, setData] = useState<Product_data[]>([]);
  const [cartItems, setCartItems] = useState<Record<number, number>>({});

  // Khởi tạo cart dựa trên danh sách sản phẩm
  const getDefaultCart = (products: Product_data[]) => {
    const cart: Record<number, number> = {};

    products.forEach((product) => {
      cart[product.id] = 0;
    });

    return cart;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const images = Object.values(productImages);

      const result = await getApi();

      result.forEach((product, index) => {
        product.image = images[index];
      });

      setData(result);

      setCartItems(getDefaultCart(result));
    };

    fetchProducts();
  }, []);

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotalCartAmount = (): number => {
    let totalAmount: number = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = data.find((product) => product.id === Number(item));
        totalAmount += itemInfo!.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = (): number => {
    let totalItem = 0;
    for(const item in cartItems) {
      if(cartItems[item] > 0) {
        totalItem+= cartItems[item]
      }
    }
    return totalItem;
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue: ShopContextType = {
    data,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
