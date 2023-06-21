import { useEffect, useState } from "react";
import useProductsViewModel from "../../viewmodel/useProductsViewModel";

const useHomeViewController = () => {
  const { topProducts, getTopProducts } = useProductsViewModel();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getTopProducts();
    setIsLoading(false);
  }, [getTopProducts]);
  return {
    topProducts,
    isLoading,
  };
};

export default useHomeViewController;
