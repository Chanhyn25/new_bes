
const productList = () => {
  return `
  ${product
    .map((product) =>{
      return `<div class ="col">
      <h3><a href="/product/${product.id}">${product.name}</a></h3>
      <span>${product.price}</span>
    </div>`;
  }).join("")
  } 
  `
}

export default productList