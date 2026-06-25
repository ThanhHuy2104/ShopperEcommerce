import { createContext, useState, useEffect } from 'react'
import { getApi } from '../services/apiProducts.ts'
import type { Product_data } from '../types/types.ts'
import type { ShopContextType } from '../types/types.ts'
import type { ShopContextProviderProp } from '../types/types.ts'
import { productImages } from '../assets/all_image_product.ts'
export const ShopContext = createContext<(ShopContextType|null)>(null)

const ShopContextProvider = ({ children }: ShopContextProviderProp) => {
  const [data, setData] = useState<Product_data[]>([])

  useEffect(() => {
    const images = Object.values(productImages);

    const fetchProducts = async () => {
      const result = await getApi()

      result.forEach((product, i) => {
          product.image = images[i];
      });

      setData(result)
    }
    fetchProducts()
  }, [])

  const contextValue = { data }

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider