let allProductList = document.getElementById('allProducts');

let commexProducts = JSON.parse(localStorage.getItem("cmxProds"));

const renderProductHTML = (product, index) => {
  return `
  <div class="col">
    <div class="card h-100">
      <img src="${product.img}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${product.prodName}</h5>
          <p class="card-text">
              ${product.desc}
          </p>
      </div>
      <div class="card-footer">
          <a href="./product-details.html" class="btn-sm border-0 btn-warning">
              <i class="fas fa-eye"></i>
              View
          </a>
          <a class='btn-sm btn-danger' style='cursor:pointer' onclick='deleteProduct(${index})'>Delete</a>
      </div>
    </div>
  </div>
`}

(() => {
  if (!commexProducts) {
    console.log('no products for commex');
    commexProducts = [];
  }

  let productHTML = "";

  commexProducts.forEach((prod, i) => {
    productHTML += renderProductHTML(prod, i)
  });

  allProductList.innerHTML += productHTML;
  
})();