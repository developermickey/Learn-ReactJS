import Product from "../Product";

function ProductTab() {
  let options = ["hi-tech", "durable", "fast"]


    return (
        <div>
        <Product 
        title="Macbook Air M1" 
        price={90000} features={["hi-tech", "durable", "fast"]} 
  

        />
        <Product title="Macbook Air M2" price={130000}/>
        <Product title="Macbook Air M3" price={157000} />
      </div> 
    )
  }
  
  
  export default ProductTab;
  