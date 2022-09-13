import './product.css'
export default function product (props){
    return(
        
        <div className='bg bg-red-100 grid grid-cols-3 gap-4    '>
    <div className="cards ml-5 my-5 bg-green-300 w-40  ">
    <div className="card ">
        <img className="card-img-top rounded self-center"  src={props.img} />
        <div className="card-body ">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-price">{props.price}</p>
        </div>
        <button className='bg-yellow-300 px-2 py-2 py-2 rounded' >Add to Cart</button>

    </div>
    </div>
    </div>
    )}



   