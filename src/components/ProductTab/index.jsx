import Product from "../Product";

function ProductTab() {
    return (
        <div>
        <Product title="Macbook Air M1" price={90000} />
        <Product title="Macbook Air M2" price={130000}/>
        <Product title="Macbook Air M3" />
      </div> 
    )
  }
  
  
  export default ProductTab;
  