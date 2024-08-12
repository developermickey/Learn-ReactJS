import "./Product.css"


function Product( { title, price, features = []}) {
  const list = features.map((feature) => <li>{feature}</li>);

  return (
    <div className="product">
        <h1>{title}</h1>
        <p>{price}</p>
      <ul>{list}</ul>

        
    </div>
  )
}
export default Product;
