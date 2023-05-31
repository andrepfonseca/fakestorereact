import { useEffect, useState } from "react";

import AboutCard from "../../components/AboutCard";
import CategoryCard from "../../components/CategoryCard";
import DefaultButton from "../../components/DefaultButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";

import { getBestSellingProducts } from "../../services/products";

import { Product } from "../../types/productsInterface";

import {
  AboutCardsContainer,
  AboutSection,
  AboutSubtitle,
  AboutTitle,
  BestSellingContainer,
  CategoriesCardContainer,
  CategoriesSection,
  CategoriesSubtitle,
  CategoriesTitle,
  Container,
  ProductsContainer,
  SectionDescription,
  SectionDescriptionContainer,
  SectionTitle,
} from "./styles";

const Home = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    getBestSellingProducts()
      .then((resp) => {
        setProducts(resp);
      })
      .catch((error) => {
        alert("error");
      });
  }, []);

  return (
    <Container>
      <Header />

      <BestSellingContainer>
        <SectionDescriptionContainer>
          <SectionTitle>Best Selling Products</SectionTitle>
          <SectionDescription>
            Easiest way to buy your favorite products
          </SectionDescription>

          <DefaultButton
            title="See more"
            to="products"
            iconImage="/ArrowRight.png"
            alt="Arrow icon"
            type="primary"
          />
        </SectionDescriptionContainer>

        <ProductsContainer>
          {products &&
            products.map((product: Product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={"R$ " + product.price}
                image={product.image}
              />
            ))}
        </ProductsContainer>
      </BestSellingContainer>

      <AboutSection>
        <AboutTitle>About us</AboutTitle>
        <AboutSubtitle>
          Order now and appreciate the beauty of nature
        </AboutSubtitle>

        <AboutCardsContainer>
          <AboutCard
            key="1"
            source="Plant"
            title="Large Assortment"
            subtitle="we offer many different types of products with fewer variations in each category."
          />
          <AboutCard
            key="2"
            source="Box"
            title="Fast & Free Shipping"
            subtitle="4-day or less delivery time, free shipping and an expedited delivery option."
          />
          <AboutCard
            key="3"
            source="Cell"
            title="24/7 Support"
            subtitle="answers to any business related inquiry 24/7 and in real-time."
          />
        </AboutCardsContainer>
      </AboutSection>

      <CategoriesSection>
        <CategoriesTitle>Categories</CategoriesTitle>
        <CategoriesSubtitle>Find what you are looking for</CategoriesSubtitle>

        <CategoriesCardContainer>
          <CategoryCard
            key="1"
            image="/playstation.jpg"
            title="Electronics"
            category="electronics"
          />
          <CategoryCard
            key="2"
            image="/clothing.jpg"
            title="Clothing"
            category="men's clothing"
          />
          <CategoryCard
            key="3"
            image="/ring.jpg"
            title="Jewelery"
            category="jewelery"
          />
        </CategoriesCardContainer>

        <DefaultButton
          title="Explore"
          to="products"
          iconImage="/ArrowRight.png"
          alt="Arrow icon"
          type="secondary"
        />
      </CategoriesSection>

      <Footer />
    </Container>
  );
};

export default Home;
