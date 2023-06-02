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
  const category = location.state && location.state.category;

  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>(category);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProducts = () => {
    getProducts()
      .then((resp) => {
        setProducts(resp);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("error");
      });
  };
  const fetchCategories = () => {
    getCategories()
      .then((resp) => {
        setCategories(resp);
      })
      .catch((error) => {
        alert("error");
      });
  };

  const handleInputChange = (event: any): void => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: any): void => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = (event: any): void => {
    if (event.key !== "Enter" && event.key !== undefined) {
      return;
    }
    setFilteredProducts(
      products!.filter((product: Product) =>
        product.title.toUpperCase().includes(searchTerm.toUpperCase())
      )
    );
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    window.scrollTo(0, 0);
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
              products={filteredProducts ?? products!}
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
