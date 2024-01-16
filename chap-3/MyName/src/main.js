// import classed from "./main.module.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

// document.querySelector('#app').innerHTML=`
//   <div class="${classed.red}">
//   hello world
//   </div>
// `;
const app = document.querySelector('#app');
import Aboutpage from "./pages/homepage";
import Homepage from "./pages/aboutpage";
import product from "./pages/product";
import {reder, route} from "./utilities";
import product from "./pages/product";
// app.innerHTML = Homepage();
route.on('/',() => reder(Homepage,app));
route.on('/about',() => reder(Aboutpage,app));
route.on('/product', () => reder(productPage,app));
route.notFound(() => reder(notFoundPage,app));
route.resolve();
