import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Product } from "../../types/productsInterface";

import { getProducts } from "../../services/products";
import getCategories from "../../services/categories";

const useProductsViewController = () => {
  const location = useLocation();
  const category = location.state?.category;

  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>(category);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      const resp = await getProducts();
      setProducts(resp);
    } catch (error) {
      console.error("Error getting products:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const resp = await getCategories();
      setCategories(resp);
    } catch (error) {
      console.error("Error getting categories:", error);
    }
  };

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
    fetchProducts();
    fetchCategories();
    window.scrollTo(0, 0);
    setIsLoading(false);
  }, []);

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
