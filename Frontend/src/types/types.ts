import type { ReactNode } from "react"

export type Product_data = {
  id: number,
  name: string,
  category: string,
  image: string,
  new_price: number,
  old_price: number
}

export type ItemProps = {
  id: number
  name: string,
  image: string,
  new_price: number,
  old_price: number
}

export type Collection = {
  id: number,
  name: string,
  image: string,
  new_price: number,
  old_price: number
}

export type CategoryProps = {
    category: string;
    banner: string
};

export type ShopContextType = {
  data: Product_data[];
}

export type ShopContextProviderProp = {
  children: ReactNode
}