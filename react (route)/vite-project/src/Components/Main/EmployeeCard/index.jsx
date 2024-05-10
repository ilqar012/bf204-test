import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { FaHeart } from "react-icons/fa";

const EmployeeCard = ({ employee }) => {
  console.log(employee);
  return (
    <>
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            style={{ height: "200px", objectFit: "cover" }}
            sx={{ height: 140 }}
            image={employee.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {employee.name} {employee.surname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>Age: {employee.age}</p>
              <p>Salary: {employee.salary}</p>
              <p>Position; {employee.position}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">
              <FaHeart style={{ fontSize: "22px", color: "red ", padding: "5px 20px"}} />
            </Button>
            <Button variant="outlined"size="small"></Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default EmployeeCard;
