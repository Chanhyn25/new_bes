import { product} from "../data";
const productDetail = ({id}) => {
    const products = product.find ((product) => product.id ===+id);
    console.log("product",products);
    if(!products) return null;
  return `<div>${product.name}</div>`;
};

export default productDetail;