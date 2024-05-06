import React, { useEffect, useState } from "react";
import { getAll } from "../../services";
import EmployeeCard from "../../Components/Main/EmployeeCard";
import { Container, Grid } from "@mui/material";

const Employees = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getAll().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {data &&
          data.map((q) => {
            return <EmployeeCard key={q.id} employee={q} setData={setData} />;
          })}
      </Grid>
    </Container>
  );
};

export default Employees;
