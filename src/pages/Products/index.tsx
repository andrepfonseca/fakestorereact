import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import CardsGrid from "../../components/CardsGrid";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import SearchInput from "../../components/SearchInput";
import SelectInput from "../../components/SelectInput";

import getCategories from "../../services/categories";
import { getProducts } from "../../services/products";

import { Category } from "../../types/categoriesInterface";
import { Product } from "../../types/productsInterface";

import {
  Container,
  ContentContainer,
  ContentTitle,
  FilterContainer,
  Screen,
} from "./styles";

const Products = () => {
  const location = useLocation();
  const category = location.state?.category;

  const [categories, setCategories] = useState<Category[]>([]);
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

  return (
    <Screen>
      <Header />

      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <FilterContainer>
            <SearchInput
              onInputChange={handleInputChange}
              onSearchAction={handleSearch}
            />

            <SelectInput
              onOptionChange={handleCategoryChange}
              options={categories}
              placeholder="Selecione a categoria"
            />
          </FilterContainer>

          <ContentContainer>
            <ContentTitle>Products</ContentTitle>
            <CardsGrid
              products={filteredProducts ?? products}
              category={selectedCategory}
            />
          </ContentContainer>
        </Container>
      )}
      <Footer />
    </Screen>
  );
};

export default Products;
