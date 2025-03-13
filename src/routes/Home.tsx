import { PRODUCT } from "../contextApi";
import ProductItem from "../shared/ProdectItem";

const Home = () => {
  const { products } = PRODUCT.store();
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
