import React from "react";

const Cards = ({ products }) => {
  console.log(products);
  return (
    <div>
      <ul>
        {products.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cards;
