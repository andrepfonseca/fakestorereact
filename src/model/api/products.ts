import { Product } from "../../types/productsInterface";
import api from "./api";

const getProducts = async () => {
  const response = await api.get("products");
  return response.data;
};

const getBestSellingProducts = async () => {
  const response = await api.get("products/top3");
  return response.data;
};

const getProduct = async (id: string = "") => {
  const response = await api.get("products/" + id + "/");
  return response.data;
};

const postProduct = async (product: Product) => {
  const response = await api.post("products/", product);
  return response.data;
};

export { getProduct, getProducts, getBestSellingProducts, postProduct };
