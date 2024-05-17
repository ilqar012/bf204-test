import { Card, CardMedia, Container, Grid } from "@mui/material";
import "../Home/index.scss";
import { TbMeat } from "react-icons/tb";
import { LuDessert } from "react-icons/lu";
import { BiDrink } from "react-icons/bi";
import { useGetAllMenusQuery } from "../../../services/menusApi";
import { useState } from "react";


const Home = () => {
  const { data: menus, refetch } = useGetAllMenusQuery();

  const [category, setCategory] = useState("main");

  return (
    <>
      <div className="home">
        <Container className="scss-container">
          <div className="text">
            <p>Our Menu</p>
            <h3>Discover Our Exclusive Menu</h3>
          </div>
          <div className="button">
            <button onClick={() => { setCategory("main") }} className="button-icon"><TbMeat /> Main</button>
            <button onClick={() => { setCategory("dessert") }} className="button-icon"><LuDessert /> Dessert</button>
            <button onClick={() => { setCategory("drink") }} className="button-icon"><BiDrink /> Drinks</button>
          </div>
          <div className="card">
            <Grid container spacing={5}>
              {menus &&
                menus.data.filter((a) => a.category === category).map((menu) => {
                  return (
                    <Grid item xs={12} lg={6} key={menu._id}>
                      <Card className="card-mui">
                        <div>
                          <CardMedia
                            style={{
                              borderRadius: "50%",
                              backgroundImage: "cover",
                            }}
                            component="img"
                            width="70"
                            height="70"
                            image={menu.image}
                            alt={menu.title}
                          />
                        </div>
                        <div>
                          <h3 style={{ paddingBottom: "15px" }}>
                            {menu.title}
                          </h3>
                          <p>{menu.description}</p>
                        </div>
                        <div>$ {menu.price}</div>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
