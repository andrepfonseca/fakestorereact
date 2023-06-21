import { CardsContainer } from "./styles";
import ProductCard from "../ProductCard";

import { Product } from "../../types/productsInterface";

function CardsGrid({ products, category }: any) {
  let displayProducts = products;

  if (category) {
    displayProducts = products.filter(
      (product: Product) => product.category === category
    );
  }

  return (
    <CardsContainer>
      {displayProducts.map((product: Product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={"R$ " + product.price}
          image={product.image}
        />
      ))}
    </CardsContainer>
  );
}

export default CardsGrid;
