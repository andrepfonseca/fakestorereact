import useCategoriesModel from "../model/useCategoriesModel";

const useCategoriesViewModel = () => {
  const { categories, getAllCategories } = useCategoriesModel();

  return {
    categories,
    getAllCategories,
  };
};

export default useCategoriesViewModel;
