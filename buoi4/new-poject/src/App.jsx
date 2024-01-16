
import ProductItem from "./components/ProductItem";

// React es7+... : gõ câu lệnh rafce để tạo component
// cài đặt extension: html to jsx
const productList = [
        { name: "Product A", price: 200 },
        { name: "Product B", price: 300 },
        { name: "Product C", price: 400 }
]
function App() {
    const [productList] = useState([
            { name: "Product A", price: 200 },
            { name: "Product B", price: 300 },
            { name: "Product C", price: 400 }
    ]);
    const[islogged, setIslogged]= useState(flase);
    const changdeStatus = () => {
        setIslogged(!islogged);
    }
    return (
        <div>
           {islogged ? (
            <> 
             <span>Xin chào admin</span>
             <button onClick ={changdeStatus}>logout</button>
            </>
           ) :(
            <button onClick = {changdeStatus}>Đăng nhập</button>
            )
            
           }

            
            <ProductItem product={{ name: "Product A", price: 200 }} />
            <ProductItem product={{ name: "Product B", price: 300 }} />
            <ProductItem product={{ name: "Product C", price: 400 }} />
            
        </div>
    );
}

export default App;
