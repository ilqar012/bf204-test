const body = document.body;

const btn = document.querySelector(".btn1");
const form = document.querySelector(".form");
const toDoInput = document.querySelector(".todo-input");
const ul = document.querySelector(".to-do-list");
const spanInput = document.querySelector(".span-input");
const span = document.querySelector(".span");
const clearAllBtn = document.querySelector(".clear-all-btn");
// span = "0";
let toDoArr = [];
class toDoItem {
  constructor(toDoInput) {
    this.toDoInput = toDoInput;
  }
  generateId() {
    return (this.id = Date.now());
  }
}
function createItem(toDoInput) {
  let toDoArrItem = new toDoItem(toDoInput);
  toDoArrItem.generateId();
  return toDoArrItem;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (toDoInput.value) {
    toDoArr.push(createItem(toDoInput.value));
    resetUl();
    drawUl(toDoArr);
    spanInput.style.display = "none";
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "To do added!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    // spanInput.style.display = "block";
    window.alert("input is empty!");
  }
});

function resetUl() {
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((item) => {
    item.value = "";
  });
}

function drawUl(arr) {
  ul.innerHTML = "";
  arr.forEach((item) => {
    const ulElem = document.createElement("ul");
    ulElem.innerHTML += `            
    <div class="btns-wrapper d-flex justify-content-between my-2">
    <div className="item">
    <span>${item.toDoInput}</span>
    </div>
    <div className="btn">
    <button class="btn btn-outline-primary mark-as-done "><i class="fa-solid fa-check"></i></button>
    <button class="btn btn-outline-danger delete btn-delete" data-id=${item.id}><i class="fa-solid fa-trash"></i></button>
    <button class="btn btn-outline-warning edit btn-edit" data-id=${item.id} ><i class="fa-solid fa-edit"></i></button>
    </div>
  </div>
      `;
    ul.append(ulElem);
  });

  const allDeleteBtns = document.querySelectorAll(".btn-delete");

  allDeleteBtns.forEach((elem) => {
    elem.addEventListener("click", function () {
      let deletedId = elem.getAttribute("data-id");

      toDoArr = toDoArr.filter((item) => item.id != deletedId);
      drawUl(toDoArr);
      Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
}
const allEditBtns = document.querySelectorAll(".btn-edit");

allEditBtns.forEach((editelem) => {
  editelem.addEventListener("click", function () {
    let editId = editelem.getAttribute("data-id");

    toDoArr = toDoArr.find((item) => item.id != editId);
    // drawUl(toDoArr);
    console.log(drawUl(toDoArr));
  });
});

clearAllBtn.addEventListener("click", function () {
  if (window.confirm("are you sure to delete all todo?")) {
    toDoArr.length = 0;
    drawUl(toDoArr);
  }
});


