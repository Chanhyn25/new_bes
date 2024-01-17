import { useState } from "react";
import ProductItem from "./components/ProductItam";

// React es7+... : gõ câu lệnh rafce để tạo component
// cài đặt extension: html to jsx

function App() {
    const [productList] = useState([
        { name: "Product A", price: 200 }, // product
        { name: "Product B", price: 300 }, // product
        { name: "Product C", price: 400 }, // product
    ]);
    const [productList_] = useState([
        { name: "Product d", price: 200 }, // product
        { name: "Product f", price: 300 }, // product
        { name: "Product k", price: 400 }, // product
    ]);

    const [isLogged, setIsLogged] = useState(false);

    const changeStatus = () => {
          // console.log(isLogged);
          setIsLogged(!isLogged);
    };
    return (
        <div>
            {isLogged ? (
                <>
                    <span>Xin chào admin</span>
                    <button onClick={changeStatus}>Logout</button>
                </>
            ) : (
                <button onClick={changeStatus}>Đăng nhập</button>
            )}
            {productList.map((product) => {
                return <ProductItem key={product.name} product={product} />;
            })}
            {productList_.map((product) => {
                return <ProductItem key={product.name} product={product} />;
            })}
            
        </div>
    );
}

export default App;
