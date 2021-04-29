import ProductItem from './ProductItem';
import classes from './ProductList.module.css';

function ProductList(props) {
  return (
      <div className="row justify-content-center">
        {props.products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            product_name={product.product_name}
            address={product.address}
            description={product.description}
            price = {product.price}
          />
        ))}
    </div>
  );
}

export default ProductList;
