import React, { useState } from "react";
import { Button, Table } from "@mui/material";
import TextField from "@mui/material/TextField";
import {
  useGetAllProductsQuery,
  usePostProductMutation,
} from "../../../Services/ProductApi";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Image',
      dataIndex: 'Image',
      render: (imgSrc)=>{
        <img src={imgSrc} alt="product image" />
      }
    },
  ];
  const { data, refetch } = useGetAllProductsQuery();
  const [postProduct] = usePostProductMutation();
  const formik = useFormik({
    initialValues: {
      imgSrc: "",
      title: "",
      description: "",
      rating: "",
      likes: "",
    },
    onSubmit: (values, { resetForm }) => {
      postProduct(values).then(() => {
        Swal.fire({
          title: "Added Succesfully!",
          text: "You clicked the button!",
          icon: "success",
        });
        resetForm();
        refetch();
      });
    },
  });
  return (
    <div style={{ width: "40%", margin: "50px auto", padding: "100px 0" }}>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        onSubmit={formik.handleSubmit}
      >
        <h3 style={{ textAlign: "center" }}>Add Product</h3>
        <TextField
          name="imgSrc"
          id="outlined-basic"
          label="Image Url"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.imgSrc}
        />
        <TextField
          name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <TextField
          name="description"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <TextField
          name="rating"
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.rating}
        />
        <TextField
          name="likes"
          id="outlined-basic"
          label="Likes"
          variant="outlined"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.likes}
        />
        <Button variant="contained" danger type="primary">
          Add Product
        </Button>
      </form>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );
};

export default AddProduct;
