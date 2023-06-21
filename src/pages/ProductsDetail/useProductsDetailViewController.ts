import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductsViewModel from "../../viewmodel/useProductsViewModel";

const useProductsDetailViewController = () => {
  const { id } = useParams<string>();
  const { product, getOneProduct } = useProductsViewModel();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) getOneProduct(id);
    setIsLoading(false);
  }, [getOneProduct, id]);
  return {
    isLoading,
    product,
  };
};

export default useProductsDetailViewController;
