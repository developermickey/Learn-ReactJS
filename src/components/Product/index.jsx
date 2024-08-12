import "./Product.css"


function Product( { title, price, features}) {
  return (
    <div className="product">
        <h1>{title}</h1>
        <p>{price}</p>
      <p>{features}</p>

        
    </div>
  )
}
export default Product;
