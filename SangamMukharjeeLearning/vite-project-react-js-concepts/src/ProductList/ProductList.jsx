import ProductItem from "./ProductItem";
import propType from "prop-types";
import "./styles.css";

function ProductList({productData=[]}) {
    return (
        <div>
            <h3 className="title">eCommerce project</h3>
            <ul>
                {productData.map((product, index) => {
                    return <ProductItem product={product} key={index}/>
                })}
            </ul>
            
        </div>
    );
}

ProductList.propTypes = {
    productData: propType.array
}

export default ProductList;