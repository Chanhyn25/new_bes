import { product } from "../data";
const productPage = () => {
  console.log(product);
  return `<div class="container">
    <div class = "row">
      ${product
        .map((product) =>{
          return `<div class ="col">
          <h3><a href="/product/${product.id}">${product.name}</a></h3>
          <span>${product.price}</span>
        </div>`;
      }).join("")
      } 
    </div></div>`;
};

export default productPage;