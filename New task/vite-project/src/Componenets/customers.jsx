import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  useGetAllCustomersQuery,
  useGetCustomerByIDQuery,
  useDeleteCustomerByIDMutation,
  usePostCustomerMutation,
} from "../services/customersApi";
import { Button } from "@mui/material";

export default function CustomersTable() {
  const { data: customers, refetch } = useGetAllCustomersQuery();
  const [deleteCustomer] = useDeleteCustomerByIDMutation();
  const [postCustomer] = usePostCustomerMutation();
//   const { data: customerId } = useGetCustomerByIDQuery(2);

  console.log(customers);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ border: "2px solid black" }}>
                <h3>Company Name</h3>
            </TableCell>
            <TableCell style={{ border: "2px solid black" }}>
            <h3>Company ID</h3>
            </TableCell>
            <TableCell style={{ border: "2px solid black" }}>
            <h3>Address (City)</h3>
            </TableCell>
            <TableCell style={{ border: "2px solid black" }}> <h3>Phone</h3> </TableCell>
            <TableCell style={{ border: "2px solid black" }}>
            <h3>Add Favorites</h3>
            </TableCell>
            <TableCell style={{ border: "2px solid black" }}><h3>Delete</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers?.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.companyName}</TableCell>
              <TableCell>{customer.id}</TableCell>
              <TableCell>{customer.address?.city}</TableCell>
              <TableCell>{customer.address?.phone}</TableCell>
              <TableCell align="center">
                <Button variant="contained">Add Favorites</Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={async () => {
                    if (window.confirm("Are you want to delete this customer?")) {
                      await deleteCustomer(customer.id);
                      refetch();
                    }
                  }}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
