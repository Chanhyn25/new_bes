// import classed from "./main.module.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

// document.querySelector('#app').innerHTML=`
//   <div class="${classed.red}">
//   hello world
//   </div>
// `;
const app = document.querySelector('#app');
import Homepage from "./pages/homepage";
import Aboutpage from "./pages/aboutpage";
import product from "./pages/product";
import {reder, route} from "./utilities";
import productDetail from "./pages/productDetail";
// app.innerHTML = Homepage();
route.on('/',() => reder(Homepage,app));
route.on('/about',() => reder(Aboutpage,app));
route.on('/product', () => reder(product,app));
route.on('/product/:id',({data}) => reder(()=>productDetail(data),app));
route.notFound(() => reder());
route.resolve();
