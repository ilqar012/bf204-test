import axios from "axios";
import { BASE_URL } from "./constant.js";


//get all data

const getAll = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};


//get data by id

const getOne = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};


//delete data by id

const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/products/${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};


//post new customers

const productPost = async (payload) => {
  try {
    const response = axios.post(`${BASE_URL}/products`, payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};


//update customer by id

const productPut = async (id, payload) => {
  try {
    const response = axios.put(`${BASE_URL}/products/${id}`, payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export {
  getAll,
  getOne,
  productPost,
  deleteData,
  productPut,
};