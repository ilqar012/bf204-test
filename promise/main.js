// const eggs = [{ id: 1 }];
// function g() {
//   return (promise = new Promise((resolve, reject) => {
//     if (eggs.length === 0) {
//       return reject({ data: null , message: "empty" });
//     } else {
//       return resolve({ data: eggs, message: "success" });
//     }
//   }));
// }

// function gPromise(callbackFn) {
//   callbackFn()
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// gPromise(g);

// async function nAsync(callbackFn){
//     let res = await callbackFn()
//     try{
//         console.log(res);
//     }
//     catch{
//         console.log(error);
//     }
// }

import { BASE_URl } from "./contant.js";

// const lists = document.querySelector(".list")
// async function getData(endPoint) {
//   const response = await fetch(`${BASE_URl}/${endPoint}`);
//   const data = await response.json();
//   drawLists(data);
// }
// console.log(getData("suppliers"));
// function drawLists(array) {
//   lists.innerHTML = ""
//   array.forEach((element) =>{
//     const listElem = document.createElement("li")
//     listElem.textContent = element.companyName;
//     lists.append(listElem)
//   })
// }
const tBody = document.querySelector(".tbody");
const loadingOverLay = document.querySelector("#loading-overlay");

let suppliers = null;
let suppliersCopy = null;

async function getData(endPoint) {
  try {
    loadingOverLay.classList.remove("d-none");
    const response = await fetch(`${BASE_URl}/${endPoint}`);
    const data = await response.json();
    drawTable(data);
  } catch (error) {
  } finally {
    loadingOverLay.classList.add("d-none");
  }
}
getData("suppliers");

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");

    trElem.innerHTML = `            
    <td scope="row">${element.id}</td> 
    <td>${element.companyName}</td>
    <td>${element.address?.street}</td>
    <td>${element.address?.phone}</td>
    <td>${element.address.city}, ${element.address.country}</td>
    <td><a class="btn btn-primary details-btn" href="./details.html?id=${element.id}">Details</a></td>
    <td><a class="btn btn-success edit-btn" href="">Edit</a></td>
    <td><button data-id=${element.id} class="btn btn-danger delete-btn">Delete</button></td>`;
    tBody.append(trElem);
  });
}
const deleteBtns = document.querySelectorAll(".delete-btn");
deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", function () {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.closest(".tr").remove();
        const idx = this.getAttribute("element-id");
        products.splice(idx, 1);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  });
});
