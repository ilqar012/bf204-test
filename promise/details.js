const url = new URLSearchParams(window.location.search)

import { BASE_URl } from "./contant.js";

const id = url.get("id")
// console.log(id);

async function getData(endPoint, id) {
    try {
      const response = await fetch(`${BASE_URl}/${endPoint}/${id}`);
      const data = await response.json();
      drawcard(data);
    } catch (error) {}
  }
getData("suppliers", id);

const wrapper = document.querySelector(".wrapper")
function drawcard(data){
    wrapper.innerHTML = ""
    wrapper.innerHTML = `
    <div class="card text-center" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.companyName}</h5>
      <p class="card-text">${data.contactTitle}</p>
      <p>${data.address?.phone}</p>
      <p>Address: ${data.address?.city}, ${data.address?.country}</p>
      <a href="./index.html" class="btn btn-warning">Go Back</a>
    </div>
  </div>`
}