import propTypes from 'prop-types';
import styles from "./ProductItem.module.css";

function ButtonComponent() {
    return <button className={styles.button}>Click</button>
}

function ProductItem({product = "", key}) {
    return (
        <li className={styles.productTitle} 
            style={{padding: '20px', border: '1px solid black', margin: "5px"}} 
            key={key}>
            {product}
            <ButtonComponent />
        </li>
    );
}

ProductItem.propTypes = {
    product: propTypes.string,
    key: propTypes.string
}

export default ProductItem;