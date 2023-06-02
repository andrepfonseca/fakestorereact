import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/products";
import { Product } from "../../types/productsInterface";

const useProductsDetailViewController = () => {
  const { id } = useParams<string>();

  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProduct(id)
      .then((resp) => {
        setProduct(resp);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("error");
      });
  });
  return {
    isLoading,
    product,
  };
};

export default useProductsDetailViewController;
