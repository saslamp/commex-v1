let newProductForm = document.getElementById('newProductForm');
let productList = document.getElementById('products-list');
let addBtn = document.getElementById('addProduct');
let prodName = document.getElementById('name');
let img = "https://cutt.ly/fcoijOw";
let desc = document.getElementById('desc');

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
  // commexProducts = new Array(commexProducts);

  let productHTML = "";

  commexProducts.forEach((prod, i) => {
    productHTML += renderProductHTML(prod, i)
  });

  productList.innerHTML = productHTML;
  
  // return;

})();

addBtn.addEventListener('click', function () {
  prodName = prodName.value;
  desc = desc.value;

  if (!prodName || !desc) {
    return alert('please fill all fields');
  }
  let prodObj = {
    prodName,
    img,
    desc
  };
  commexProducts.push(prodObj);
  localStorage.setItem("cmxProds", JSON.stringify(commexProducts));
  alert('success: added new product!');
  // newProductForm.reset();
  location.reload();
});

const deleteProduct = id => {
  for (let product in commexProducts) {
    if (id == product) {
      commexProducts.splice(product, 1);
    }
  }
  alert('deleted succesfully');
  localStorage.setItem("cmxProds", JSON.stringify(commexProducts));
  location.reload()
}