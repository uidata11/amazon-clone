import React from "react";

const Product = () => {
  return <div>Product</div>;
};

export default Product;

const products: ProductProps[] = [
  {
    img: [
      "https://cdn.pixabay.com/photo/2023/07/19/04/56/european-shorthair-8136065_1280.jpg",
    ],
    name: "고양이",
    price: "200000",
    quan: 72,
  },
  {
    img: [
      "https://cdn.pixabay.com/photo/2024/05/08/17/45/animal-8748794_640.jpg",
    ],
    name: "호랑이",
    price: "9000000",
    quan: 3,
  },
  {
    img: ["https://cdn.pixabay.com/photo/2012/02/28/00/49/snow-17854_640.jpg"],
    name: "다람쥐",
    price: "500000",
    quan: 60,
  },
  {
    img: [
      "https://cdn.pixabay.com/photo/2023/08/05/15/42/panda-8171354_640.jpg",
    ],
    name: "판다",
    price: "5000000",
    quan: 8,
  },
];
