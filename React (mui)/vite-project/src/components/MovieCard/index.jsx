import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function MovieCard({ movie }) {
  // const { loading = false } = props;

  return (
    <>
      <Grid item xs={12} sm={6} lg={4}>
        <Card
          style={{ textAlign: "center", marginBottom: "50px" }}
          sx={{ maxWidth: 300 }}
        >
          <CardMedia
            style={{ width: "250px", margin: "15px auto", height: "140px" }}
            image={movie.posterUrl}
            title="img title"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Genre: {movie.genre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Release year: {movie.releaseYear}
            </Typography>
          </CardContent>
          <CardActions style={{ textAlign: "center" }}>
            <Button size="small" variant="outlined">
              Show cast
            </Button>
            <Button size="small" variant="outlined">
              Add cast
            </Button>
            <Button size="small" variant="outlined">
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default MovieCard;
