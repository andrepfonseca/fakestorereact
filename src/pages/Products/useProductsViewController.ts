import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Product } from "../../types/productsInterface";

import useProductsViewModel from "../../viewmodel/useProductsViewModel";
import useCategoriesViewModel from "../../viewmodel/useCategoriesViewModel";

const useProductsViewController = () => {
  const { products, getAllProducts } = useProductsViewModel();
  const { categories, getAllCategories } = useCategoriesViewModel();

  const location = useLocation();
  const category = location.state?.category;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>(category);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== "Enter" && event.key !== undefined) {
      return;
    }
    setFilteredProducts(
      products.filter((product: Product) =>
        product.title.toUpperCase().includes(searchTerm.toUpperCase())
      )
    );
  };

  useEffect(() => {
    getAllProducts();
    getAllCategories();
    window.scrollTo(0, 0);
    setIsLoading(false);
  }, [getAllProducts, getAllCategories]);

  return {
    categories,
    products,
    selectedCategory,
    filteredProducts,
    isLoading,
    handleInputChange,
    handleSearch,
    handleCategoryChange,
  };
};

export default useProductsViewController;
