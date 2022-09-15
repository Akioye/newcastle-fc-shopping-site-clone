import './card.css'
export default function Card (props){
    const { product, onAdd } = props;
    return(
          <div>
            <img className="small rounded" src={product.img} alt={product.title} />
            <p>{product.title}</p>
            <div>${product.price}</div>
            <div>
              <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
          </div>
    )}



   