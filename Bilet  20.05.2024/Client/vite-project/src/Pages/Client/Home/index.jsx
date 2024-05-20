import React from "react";
import "../Home/index.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { useGetAllProductsQuery } from "../../../Services/ProductApi";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const ClientHome = () => {
  const { data: products, refetch } = useGetAllProductsQuery();

  return (
    <>
      <Container style={{ paddingTop: "100px" }}>
        <div className="text">
          <div className="text-div">
            <p>POPULAR PRODUCTS</p>
            <h3>Our Products</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
              eveniet aut consequatur laboriosam ipsam.
            </span>
          </div>
        </div>
        <Grid container spacing={4}>
          {products &&
            products.data.map((product) => {
              return (
                <Grid item xs={12} lg={4} md={6} key={product._id}>
                  <Card style={{ textAlign: "center",paddingBottom: "20px" }}>
                    <CardMedia
                      sx={{ height: 350 }}
                      image={product.imgSrc}
                      title={product.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ fontSize: "18px" }}
                      >
                        {product.title}
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "20px",
                        }}
                      >
                        <p style={{ fontSize: "1rem" }}>
                          <StarIcon style={{ color: "#f16821" }} />{" "}
                          {product.rating}
                        </p>
                        <p style={{ fontSize: "1rem" }}>
                          <FavoriteBorderIcon style={{ color: "red" }} />{" "}
                          {product.likes}
                        </p>
                      </div>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ fontSize: "1rem", paddingTop: "15px " }}
                      >
                        {product.description}
                      </Typography>
                    </CardContent>
                    <div className="button">
                      <Button className="button-style1" size="small">
                        <Link className="link">Card</Link>
                      </Button>
                      <Button className="button-style2" size="small">
                        <Link className="link" to={"/product-detail"}>View</Link>
                      </Button>
                      <Button variant="outlined" color="error" size="small">
                        Delete
                      </Button>

                    </div>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default ClientHome;
