// import "../header.css"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  var cartNo = useSelector((state) => state.cart.cart.reduce((noOfItems,item )=> noOfItems + item.quantity,0) )

  return (
    <div id="header" className="relative w-100vw h-[10vh] bg-green-500 flex items-center justify-between"> 

        <Link to="../">
          <img src="./keshav_co_plants_logo.png" id="logo" className='relative h-[10vh] w-auto ml-10 cursor-pointer'></img>
        </Link>
      
        <p className='text-white text-3xl w-[40%] text-center -ml-20 ' >Plants</p>

        <Link to='../shoppingcart' className='w-[20%] flex justify-center'> 
            <FaShoppingCart size={30} color="white" id="cart"></FaShoppingCart>
            <p>{cartNo}</p>
        </Link>

    </div>
  )
}

export default Header