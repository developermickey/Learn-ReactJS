import "./Product.css"


function Product( { title, price }) {
  // features = [] using as props
  // const list = features.map((feature) => <li>{feature}</li>);

  return (
    <div className="product">
        <h1>{title}</h1>
        <p>{price}</p>
        {price > 100000 ? <p>Discount Of 5%</p> : null}
      {/* <ul>{list}</ul> */}

        
    </div>
  )
}
export default Product;
