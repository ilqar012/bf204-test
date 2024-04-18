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
import { deleteSupplierById } from "./api/services.js";

// import { getOneCategory } from "./api/services.js";

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
// let suppliers = null;
// let suppliersCopy = null;

async function getData(endPoint) {
  try {
    loadingOverLay.classList.remove("d-none");
    const response = await fetch(`${BASE_URl}/${endPoint}`);
    const data = await response.json();
    suppliers = data;
    // suppliersCopy = [...response.data];
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
    <td  scope="row">${element.id}</td> 
    <td>${element.companyName}</td>
    <td>${element.address?.street}</td>
    <td>${element.address?.phone}</td>
    <td>${element.address.city}, ${element.address.country}</td>
    <td><a class="btn btn-primary details-btn" href="./details.html?id=${element.id}">Details</a></td>
    <td><a data id = ${element.id} class="btn btn-success edit-btn" href="">Edit</a></td>
    <td><button data-id=${element.id} class="btn btn-danger delete-btn">Delete</button></td>`;
    tBody.append(trElem);

    // deleteBtn
    const deleteBtn = document.querySelectorAll(".delete-btn");

    deleteBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
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
            deleteSupplierById(id);
            this.closest("tr").remove();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      });
    });
  });
}
const search = document.querySelector("#search");
const sort = document.querySelector(".sort");

search.addEventListener("input", function (event) {
  
  let filtered = suppliers.filter((item) =>
    item.companyName
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  // console.log(event.target.value);
  console.log(search.value);
  console.log(filtered);
  drawTable(filtered);
});

sort.addEventListener("click", function () {
  let sorted;
  if (this.textContent === "Ascending") {
    sorted = suppliers.sort((a, b) => a.id - b.id);
    this.textContent = "Descending";
  } else if (this.textContent === "Descending") {
    sorted = suppliers.sort((a, b) => b.id - a.id);

    this.textContent = "Default";
  } else {
    sorted = suppliersCopy;
    this.textContent = "Ascending";
  }

  drawTable(sorted);
});
