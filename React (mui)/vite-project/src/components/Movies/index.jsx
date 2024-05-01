import React, { useEffect, useState } from "react";
import { getAll } from "../../Services";
import MovieCard from "../MovieCard";
import { Container } from "@mui/material";

function Movies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAll().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <Container style={{display: "flex", flexWrap: "wrap" , paddingTop: "50px", justifyContent: "space-between"}}>
        {data &&
          data.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}/>;
          })}
      </Container>
    </>
  );
}

Movies.propTypes = {};

export default Movies;
