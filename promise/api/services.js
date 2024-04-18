import { BASE_URl } from "../contant.js";

export async function deleteSupplierById(id) {
  let response = null;
  await axios
    .delete(`${BASE_URl}/${id}`)
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });

  return response;
}

export async function getOneCategory(id) {
  let obj = {
    category: null,
    error: null,
  };
  await axios
    .get(API_URL + endpoint + `/${id}`)
    .then((res) => {
      obj.category = res.data;
    })
    .catch((err) => {
      obj.error = err;
    });

  return obj;
}


