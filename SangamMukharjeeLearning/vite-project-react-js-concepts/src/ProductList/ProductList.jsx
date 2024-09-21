import ProductItem from "./ProductItem";
import propType from "prop-types";
import "./styles.css";
import { useEffect, useState } from "react";

function ProductList({productData=[]}) {
    const [showList, setShowList] = useState(false);
    const [task, setTask] = useState("Show");

    useEffect(() => {
        setTask(showList && "Hide" || "Show");
    }, [showList]);

    const hanldeClick = () => {
        setShowList(!showList);
    }

    return (
        <div>
            <h3 className="title">eCommerce project</h3>
            <button onClick={hanldeClick}>{task} Product List</button>
            {showList && 
                <ul>
                    {productData.map((product, index) => {
                        return <ProductItem product={product} key={index}/>
                    })}
                </ul>
            }
            
        </div>
    );
}

ProductList.propTypes = {
    productData: propType.array
}

export default ProductList;