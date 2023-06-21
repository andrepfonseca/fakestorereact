import useProductsModel from "../model/useProductsModel";

const useProductsViewModel = () => {
  const {
    products,
    getAllProducts,
    createdProduct,
    createProduct,
    topProducts,
    getTopProducts,
    product,
    getOneProduct,
  } = useProductsModel();

  return {
    products,
    getAllProducts,
    createdProduct,
    createProduct,
    topProducts,
    getTopProducts,
    product,
    getOneProduct,
  };
};

export default useProductsViewModel;
