import '../App.css'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (

<div id="backgroundImage"
      style={{
      backgroundImage: 'url("./background.avif")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'space-between',
      justifyContent: "space-between",}}>
        <div className='overlay'>
          <div className="left-side">
            <h2 className='w-3/4 font-bold'>Welcome to Keshav  & Co Paradise Nursery</h2>
            <p className='-mt-6'>where green meets serenity </p>
          <Link to="/products" id='getStartedBtn' className='py-2 px-4'>
            Get Started
          </Link>
          </div>
          <div className='right-side -mt-[15%]'>    
            <p className='-mt-30'>Welcome to Paradise Nusery, where green meets serenity!! </p>
          <p className='' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla possimus, dolore quos officia eos eaque rem, non autem distinctio, recusandae eum amet explicabo. Labore ullam assumenda fuga iusto fugit.orem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla possimus, dolore quos officia eos eaque rem, non autem distinctio, recusandae eum amet explicabo. Labore ullam assumenda fuga iusto fugit.orem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla possimus, dolore quos officia eos eaque rem, non autem distinctio, recusandae eum amet explicabo. Labore ullam assumenda fuga iusto fugit.</p>
          </div>
        </div>
        
        
        <h2></h2>
    </div>)
}

export default LandingPage