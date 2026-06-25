import type { Product_data } from "../types/types";
import axios from "axios";

const BASE_URL = 'https://6a3944f564a2d8269223b476.mockapi.io/products';
export const getApi = async() : Promise<Product_data[]> => {
    const res = await axios.get(BASE_URL)
    return res.data
}

