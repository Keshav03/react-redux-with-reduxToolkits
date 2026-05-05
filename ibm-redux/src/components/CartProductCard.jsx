import { useDispatch } from "react-redux"
import { removeToCart,incrementByOne,decrementByOne} from "../Slices/cartSlice"

function CartProductCard({item}) {
    const dispatch = useDispatch()


  return (
    <div className='w-2/5 bg-gray-100 flex items-center  justify-evenly py-6 rounded-lg'>

        <div className="w-1/3 h-40 ">
          <img src={item.image} className="relative w-full h-full rounded-md" ></img>
        </div>

        <div className="w-1/3 flex-col item-around justify-between text-center gap-y-6" >

          <p className="font-bold text-xl">{item.name} </p>
          <p> {item.cost} </p>

          <div className="flex justify-between text-center">
            <button onClick={()=>dispatch(decrementByOne(item))}>-</button>
            <p>{item.quantity}</p>
            <button onClick={()=>dispatch(incrementByOne(item))}> + </button>

          </div>

          <p className="font-semibold text-sm">Total Cost : $  {item.quantity * parseInt(item.cost.replace("$", "")) }</p>

            <button className='bg-red-400 py-1 px-6 rounded-md text-white text-center mt-5' onClick={()=>dispatch(removeToCart(item))}>Delete</button>


        </div>


        </div>
    )
}

export default CartProductCard