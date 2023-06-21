import { useCallback, useState } from "react";
import {
  getBestSellingProducts,
  getProduct,
  getProducts,
  postProduct,
} from "./api/products";
import { Product } from "../types/productsInterface";

const useProductsModel = () => {
  const [productsData, setProductsData] = useState<Product[] | []>([]);
  const [productData, setProductData] = useState<Product>();
  const [createdProductData, setCreatedProductData] = useState<Product>();
  const [topProductsData, setTopProductsData] = useState<Product[] | []>([]);

  const getAllProducts = useCallback(async () => {
    const products = await getProducts();
    setProductsData(products);
  }, []);

  const getOneProduct = useCallback(async (id: string) => {
    const product = await getProduct(id);
    setProductData(product);
  }, []);

  const getTopProducts = useCallback(async () => {
    const topProducts = await getBestSellingProducts();
    setTopProductsData(topProducts);
  }, []);

  const createProduct = useCallback(async (product: any) => {
    const response = await postProduct(product);
    setCreatedProductData(response);
  }, []);

  return {
    products: productsData,
    getAllProducts,
    createdProduct: createdProductData,
    createProduct,
    topProducts: topProductsData,
    getTopProducts,
    product: productData,
    getOneProduct,
  };
};

export default useProductsModel;
