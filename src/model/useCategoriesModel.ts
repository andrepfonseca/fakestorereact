import { useCallback, useState } from "react";
import { getCategories } from "./api/categories";

const useCategoriesModel = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  const getAllCategories = useCallback(async () => {
    const categories = await getCategories();
    setCategoriesData(categories);
  }, []);

  return {
    categories: categoriesData,
    getAllCategories,
  };
};

export default useCategoriesModel;
