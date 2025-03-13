import React from "react";
import Product from "../contextApi";

const Home = () => {
  const { Product } = PRODECT.store();
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
      {products.map((product, index) => (
        <>{product}</>
      ))}
    </div>
  );
};

export default Home;
