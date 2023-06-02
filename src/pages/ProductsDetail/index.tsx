import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ProductStars from "../../components/ProductStars";

import {
  Container,
  ImageContainer,
  ProductBrand,
  ProductContainer,
  ProductDescription,
  ProductDescriptionTitle,
  ProductDetailContainer,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductPriceTag,
  ProductRating,
  ProductRate,
  ProductSpecs,
  ProductTitle,
  SpecInfo,
  SpecTitle,
} from "./styles";
import useProductsDetailViewController from "./useProductsDetailViewController";

const ProductsDetail = () => {
  const { isLoading, product } = useProductsDetailViewController();

  return (
    <>
      <Header />

      {isLoading ? (
        <Loader />
      ) : (
        product && (
          <Container>
            <ProductTitle>{product.title}</ProductTitle>

            <ProductContainer>
              <ImageContainer>
                <ProductImage src={product.image} />
              </ImageContainer>

              <ProductDetailContainer>
                <ProductInfo>
                  <ProductBrand>Marca: Plantinha verde</ProductBrand>

                  <ProductRating>
                    <ProductStars
                      image="/Stars.svg"
                      rate={product.rating.rate}
                      alt="Stars"
                    />

                    <ProductRate>
                      {product.rating.count} avaliações de clientes
                    </ProductRate>
                  </ProductRating>
                </ProductInfo>

                <ProductPrice>
                  <ProductPriceTag>R$ {product.price}</ProductPriceTag>

                  <ProductDescriptionTitle>
                    Descrição do produto
                  </ProductDescriptionTitle>

                  <ProductDescription>{product.description}</ProductDescription>
                </ProductPrice>

                <ProductSpecs>
                  <SpecTitle>Marca</SpecTitle>
                  <SpecInfo>Marca</SpecInfo>
                  <SpecTitle>Material</SpecTitle>
                  <SpecInfo>Material</SpecInfo>
                  <SpecTitle>Dimensões do produto</SpecTitle>
                  <SpecInfo>Dimensões do produto</SpecInfo>
                  <SpecTitle>Tipo de montagem</SpecTitle>
                  <SpecInfo>Tipo de montagem</SpecInfo>
                  <SpecTitle>Tipo de acabamento</SpecTitle>
                  <SpecInfo>Tipo de acabamento</SpecInfo>
                </ProductSpecs>
              </ProductDetailContainer>
            </ProductContainer>
          </Container>
        )
      )}
      <Footer />
    </>
  );
};

export default ProductsDetail;
