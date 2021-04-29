import Card from '../ui/Card';
import classes from './ProductItem.module.css';

function ProductItem(props) {
  return (
    <div className={classes.ProductList}>
      <Card>
        <a href="#">
        <div className={classes.image}>
          <img src={props.image} alt={props.product_name} />
        </div>
        <div className={classes.price}>
          <price>฿{props.price}</price>
        </div>

        <div className={classes.content}>
          <h3>{props.product_name}</h3>
          <p>{props.description}</p>
        </div>
        </a>
        <div className={classes.btn}>
          <a href="#"><button>Add to Cart</button></a>
        </div>
      </Card>
    </div>
  );
}

export default ProductItem;
