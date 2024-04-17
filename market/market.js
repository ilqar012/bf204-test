class Products {
    static id = 1;
    constructor(name, imgSrc, costPrice, salePrice, percentAge) {
      this.id = Products.id++;
      this.name = name;
      this.imgSrc = imgSrc;
      this.costPrice = costPrice;
      if (costPrice > salePrice) {
        throw new Error("costprice cannot be less than saleprice");
      } else {
        this.salePrice = salePrice;
      }
      if (percentAge >= 0 && percentAge <= 100) {
        this.percentAge = percentAge;
      } else {
        throw new Error("percentAge sholud be between 1-100");
      }
    }
    calcProfit() {
      return (
        this.salePrice - this.costPrice - (this.salePrice * this.percentAge) / 100
      );
    }
    hasDiscount() {
      if (this.percentAge > 0) {
        return true;
      } else {
        return false;
      }
    }
    calcDiscountPrice() {
      return Number(
        this.salePrice - (this.salePrice * this.percentAge) / 100
      ).toFixed(2);
    }
  }
  
  const products = [
    new Products(
      "Skittles",
      "https://www.kroger.com/product/images/large/front/0004000000160",
      2,
      5,
      10
    ),
    new Products(
      "Twix",
      "https://m.media-amazon.com/images/I/71IBchCAjdL.jpg",
      1.5,
      6.5,
      0
    ),
    new Products(
      "Snickers",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYUU9oJ1YKUCAhi6O2H4wFFaSqCRDqu8pr96jvR5VuQ&s",
      3,
      4,
      30
    ),
    new Products(
      "M&Ms",
      "https://www.hancocks.co.uk/pub/media/amasty/amoptmobile/catalog/product/cache/172d96e30d7cd3d4380b53391edef300/0/5/05547_a_23_jpg.webp",
      4,
      8,
      45
    ),
  ];
  
  const productsRow = document.querySelector(".products-row");
  
  window.addEventListener("load", () => {
    if (!localStorage.getItem("basket")) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    basketTableHtml(JSON.parse(localStorage.getItem("basket")));
    products.forEach((product) => {
      productsRow.innerHTML += `                    <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card">
              <img src="${product.imgSrc}" class="card-img-top" alt="${
        product.name
      }" height="250">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h4><del class="text-secondary" ${
                  product.hasDiscount() ? "d-inline" : "d-none"
                }">${product.salePrice}$</del>${product.calcDiscountPrice()}$</h4>
                <button data-id=${
                  product.id
                } class="btn btn-outline-warnning basket-btn"><i class="fa-solid fa-basket-shopping"></i></button>
                <button data-id=${
                  product.id
                } class="btn btn-outline-danger delete-btn"><i class="fa-solid fa-trash"></i></button>
  
              </div>
      </div>`;
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
              this.closest(".col-lg-3").remove();
              const idx = this.getAttribute("data-id");
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
      const basketBtns = document.querySelectorAll(".basket-btn");
      basketBtns.forEach((basketBtn) => {
        basketBtn.addEventListener("click", function () {
          const localBasket = JSON.parse(localStorage.getItem("basket"));
          const id = this.getAttribute("data-id");
          const dublicate = localBasket.find((a) => a.id === id);
          if (dublicate) {
            dublicate.count++;
          } else {
            localBasket.push({ id: id, count: 1 });
          }
          localStorage.setItem("basket", JSON.stringify(localBasket));
          basketTableHtml(localBasket);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product added",
            showConfirmButton: false,
            timer: 1000,
          });
        });
      });
    });
  });
  
  const tBody = document.querySelector("tbody");
  function basketTableHtml(localBasketArr) {
    tBody.innerHTML = "";
    localBasketArr.forEach((basketItem) => {
      const product = products.find((a) => a.id == basketItem.id);
      tBody.innerHTML += `                <tr>
          <th scope="row">${basketItem.id}</th>
          <td>
            <img
            width="70" height="70"
              src="${product.imgSrc}"
              alt="${product.name}"
            />
          </td>
          <td>${product.name}</td>
          <td>${Number(product.calcDiscountPrice() * basketItem.count).toFixed(
            2
          )}</td>
          <td>${basketItem.count}</td>
          <td>
            <button class="btn btn-outline-warnning inc">
                <i class="fa-solid fa-plus"></i>
            </button>
          </td>
          <td>
            <button class="btn btn-outline-warnning dec">
                <i class="fa-solid fa-minus"></i>
            </button>
          </td>
          <td>
            <button class="btn btn-outline-danger">
                <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>`;
    });
  }
  
  const clearAllBtns = document.querySelector(".clear-btn");
  clearAllBtns.addEventListener("click", () => {
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
        tBody.innerHTML = "";
        localStorage.removeItem("basket");
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  });
  const inc = document.querySelector(".inc");
  const dec = document.querySelector(".dec");
  
  
  
  inc.addEventListener("click", function () {
    basketItem.count++;
    result.textContent = basketItem.count;
    localStorage.setItem("count", basketItem.count);
  });
  
  dec.addEventListener("click", function () {
      basketItem.count--;
    result.textContent = basketItem.count;
    localStorage.setItem("count", basketItem.count);
  });