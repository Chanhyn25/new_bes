
import ReactDOM from 'react-dom/client';
import {a,b} from"./DemoModule";
const myName = "Nguyen Yen Nhi";
const myAge = 20;
const isMarried = true;
const myInfo = {
  name: "Hanh",
  age:30,

};
const showName = (name) => {
  return `<h1>Ten toi la ${name}</h1>`;
};
//component
const ShowName = () => {
  return <h1> Ten toi la Hanh </h1>;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1>Hello react {myName}</h1>
    <p>Tuoi : {myAge}</p>
    <p>Tình trạng: {isMarried ? "hihi" : "haha"}</p>
    <p>hong tin: {myInfo.name}</p>
    <p>Function : {showName("Nhi")}</p>
    <hr />
    <h2>Component</h2>
    <ShowName></ShowName>
    <div>
  <h1 className="title">Hello</h1>
  <h2 classname="abc">Hello wword</h2>
</div>
{/* {sum(a,b)} */}
  </div>
);
