import Navigo from "navigo";
const Navigo = new Navigo("/",{linkSelector: "a", hash:true});
const reder= (content, targer) => {
    targer.innerHTML = content();
}
export {reder,route};