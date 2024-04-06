const body = document.body;

// const card = document.createElement("div");
// card.classList.add("card");
// const cardImgTop = document.createElement("img");
// cardImgTop.classList.add("card-img-top");

// cardImgTop.setAttribute("src", "./foto fayli/top.jpg");
// card.append(cardImgTop,);
// card.append(cardBody,);

// body.append(card);

// const cardBody = document.createElement("div");
// cardBody.classList.add("card-body")
// const cardTitle = document.createElement("h5");
// cardTitle.classList.add("card-title")
// const cardText = document.createElement("p");
// cardText.classList.add("card-text")
// const btn = document.createElement("a");
// btn.classList.add("btn")

// cardTitle.textContent = "Card title";
// cardText.textContent =
//   "Some quick example text to build on the card title and make up the bulk of the card's content.";
// btn.textContent = "Go somewhere";
// btn.style.color = "black";
// btn.style.padding = "5px 10px";
// btn.style.background;

// cardBody.append(cardTitle, cardText, btn);

const students = [
  "Aytac",
  "Aysel",
  "Aydan",
  "Zakir",
  "Ferid",
  "Ilvin",
  "Ilqar",
];
const wrapper = document.querySelector(".wrapper");
const studentsList = document.createElement("ul");
students.forEach((item) => {
  const liElem = document.createElement("li");
  liElem.textContent = item;

  liElem.addEventListener("click", function () {
    this.remove();
  });

  studentsList.appendChild(liElem);
});
wrapper.append(studentsList);
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  let random1 = parseInt(Math.random() * 256);
  let random2 = parseInt(Math.random() * 256);
  let random3 = parseInt(Math.random() * 256)
  body.style.backgroundColor = `rgb(${random1},${random2}, ${random3})`;
});
const div = document.querySelector(".back")
div.style.width = "100%";
div.style.height = "100vh"
body.addEventListener("click", function () {
    let random1 = parseInt(Math.random() * 256);
    let random2 = parseInt(Math.random() * 256);
    let random3 = parseInt(Math.random() * 256)
    div.style.backgroundColor = `rgb(${random1},${random2}, ${random3})`;
  });