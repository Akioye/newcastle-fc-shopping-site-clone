import Card from "./card";
export default function Products (props) {
    const { TheProducts, onAdd } = props;
    //TheProducts is coming from the app.js page 
  return (
    <div className="block col-2 ">
      <h1>The Products</h1>
      <div className="row">
        {TheProducts.map((item) => (
          <Card key={item.id} product={item} onAdd={onAdd}/>
          // here we still push the items to another page called Card
          //lesson 9/15/22  mapping is used to bring out and it can use any variable as it element
        ))}
      </div>
    </div>
    )
}