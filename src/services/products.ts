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

export { getProduct, getProducts, getBestSellingProducts };
