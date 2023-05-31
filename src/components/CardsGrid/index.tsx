import { CardsContainer } from "./styles";
import ProductCard from "../ProductCard";

import { Product } from "../../types/productsInterface";

interface CardsGridProps {
  products: Product[];
  category: string;
}

function CardsGrid({ products, category }: CardsGridProps) {
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
