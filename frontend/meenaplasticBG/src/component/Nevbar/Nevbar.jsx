import './nevbar.scss'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'    
const Nevbar = () => {
    return (
        <>
            <motion.div className="nevbar"
              initial={{opacity:0,y:-300}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.3}}>
                <div className="logo">Sell Plastic</div>
                <div className="menu">
                    <a href="/">Home</a>
                    <a href="/aboutUs">About Us</a>
                    <a href="/product">Product</a>
                    <a href="/conTechUs">Contect Us</a>
                </div>
                <div className="button">
                
                    <Link className='button' to='/login'>Log in</Link>
                </div>
                {/* <div className="shope">
                <MdOutlineShoppingCart className="sp" />
                </div> */}
            </motion.div>
        </>
    )
}

export default Nevbar