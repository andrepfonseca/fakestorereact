import styled from "styled-components";

export const Container = styled.div`
  padding: 8.3rem 12.9rem 15.6rem 7rem;

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;

    padding: 0;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.6rem;
  text-align: left;

  margin-bottom: 1.4rem;

  @media (max-width: 900px) {
    text-align: center;

    margin-top: 5rem;
  }
`;

export const ProductContainer = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 27.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  width: auto;
  max-height: 34.1rem;

  margin-left: 7.9rem;

  @media (max-width: 900px) {
    margin-left: 0;
  }
`;

export const ProductDetailContainer = styled.div`
  width: 100%;

  margin-left: 8.4rem;

  @media (max-width: 900px) {
    width: 80%;

    margin-left: 0;
  }
`;

export const ProductInfo = styled.div`
  border-top: 0.1rem solid #454d4a;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ProductBrand = styled.a`
  color: #0f798d;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  text-align: left;

  margin-top: 0.7rem;
`;
export const ProductRating = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.7rem;
`;
export const ProductRate = styled.p`
  color: #0f798d;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  text-align: left;

  margin-left: 3.2rem;
`;
export const ProductPrice = styled.div`
  border-top: 0.1rem solid #454d4a;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ProductPriceTag = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  line-height: 4.5rem;
  text-align: left;

  margin-top: 0rem;
`;
export const ProductDescriptionTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;
  text-align: left;

  margin-top: 0.9rem;
`;
export const ProductDescription = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  text-align: left;

  margin-left: 2.5rem;
  margin-bottom: 5.6rem;

  @media (max-width: 900px) {
    text-align: center;
  }
`;
export const ProductSpecs = styled.div`
  display: grid;
  grid-template-columns: 16.3rem 16.3rem;
  column-gap: 1.7rem;
  row-gap: 0.5rem;

  border-top: 0.1rem solid #454d4a;
  border-bottom: 0.1rem solid #454d4a;

  padding-bottom: 1.5rem;

  @media (max-width: 900px) {
    column-gap: 0;
    grid-template-columns: repeat(2, 1fr);

    justify-content: center;
    align-items: center;

    margin-bottom: 5rem;
  }
`;

export const SpecTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;
  text-align: left;

  @media (max-width: 900px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const SpecInfo = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  text-align: left;

  @media (max-width: 900px) {
    font-size: 1rem;
    text-align: center;
  }
`;
