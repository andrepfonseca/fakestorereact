import CardsGrid from "../../components/CardsGrid";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import SearchInput from "../../components/SearchInput";
import SelectInput from "../../components/SelectInput";

import useProductsViewController from "./useProductsViewController";

import {
  Container,
  ContentContainer,
  ContentTitle,
  FilterContainer,
  Screen,
} from "./styles";

const Products = () => {
  const {
    categories,
    products,
    selectedCategory,
    filteredProducts,
    isLoading,
    handleInputChange,
    handleSearch,
    handleCategoryChange,
  } = useProductsViewController();

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
