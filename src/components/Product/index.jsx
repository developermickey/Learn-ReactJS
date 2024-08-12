import "./Product.css"


function Product( { title, price }) {
  // features = [] using as props
  // const list = features.map((feature) => <li>{feature}</li>);
  const isDiscount = price > 100000;
  const styles = {
    backgroundColor:  isDiscount? "yellow" : "",
    color: isDiscount ? "Black" : ""

  };

  return (
    <div className="product" style={styles}>
        <h1>{title}</h1>
        <p>{price}</p>
        {isDiscount ? <p>Discount Of 5%</p> : null}
      {/* <ul>{list}</ul> */}

        
    </div>
  )
}
export default Product;
