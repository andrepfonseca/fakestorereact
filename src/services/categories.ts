import { AxiosResponse } from "axios";
import api from "./api";

const getCategories = async () => {
  const response: AxiosResponse = await api.get("products/categories");
  return response.data;
};

export default getCategories;
