import { Container } from "@mui/material";
import React from "react";
import "../Home/index.scss";
import { TbMeat } from "react-icons/tb";
import { LuDessert } from "react-icons/lu";
import { BiDrink } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <div className="home">
        <Container className="scss-container">
          <div>
            <p>Our Menu</p>
            <h3>Discover Our Exclusive Menu</h3>
          </div>
          <div className="button">
            <button><TbMeat /> Main</button>
            <button><LuDessert /> Dessert</button>
            <button><BiDrink /> Drinks</button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
