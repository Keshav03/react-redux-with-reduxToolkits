import Header from "../components/Header"
import CartProductCard from "../components/CartProductCard"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function CartPage() {
  const itemInCart = useSelector((state) => state.cart.cart)
  var cartTotal = itemInCart.reduce((total,item)=> total + (item.quantity * parseInt(item.cost.replace("$", ""))) ,0)

  return (
    <div className="w-screen min-h-screen ">
        
    <Header></Header>

    <div className="bg-gray-200">
        <p className="text-center pt-6 pb-6 font-bold text-2xl ">Total Cart Amount : $ {cartTotal} </p>

        <div className=" flex flex-col items-center min-h-screen space-y-6" >

          {itemInCart.map((item,index)=>{
            return(
            
            <CartProductCard item={item} key={index}></CartProductCard>

            )
          })}
            
          <Link to="../products" className="bg-green-400 py-2 px-4 text-white rounded-lg mt-20">Continue Shopping</Link>

        </div>

    </div>

    </div>
  )
}

export default CartPage