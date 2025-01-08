
import { Link } from 'react-router-dom'
import Crad from '../../component/card/Crad'
import Footer from '../../component/footer/Footer'
import Nevbar from '../../component/Nevbar/Nevbar'
import './Home.scss'
import { motion } from 'framer-motion'
const Home = () => {
    return (
        <>
            <div className="main">
                <div className="nevbar-main">
                    <Nevbar />

                </div>
                <motion.div className="content-home"
                    whileInView={{ opacity: 1 }}
                >

                    <motion.div className="content"
                    >
                        <motion.h1
                            initial={{ opacity: 0, x: -500 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}>
                            The Best Plastic Products InWorld</motion.h1>
                        <motion.a
                            initial={{ opacity: 0, x: -500 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.7 }}>The ultimate sustainable garbage bag for all your needs.</motion.a>
                        <motion.button
                            initial={{ opacity: 0, x: -500 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.3 }}>Shop Now</motion.button>
                    </motion.div>
                   <div className="mainimg">
                    
         
                   </div>
                </motion.div>
                <motion.div className="servise"
                    initial={{ opacity: 0, y: 500 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}>
                    <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 1 }}
                        className="name">Services & Solutions we Offer</motion.div>
                    <div className="cards">
                        <Crad />
                    </div>
                </motion.div>
                <div className="about">
                    <div className="sec1">
                        <motion.div
                            initial={{ opacity: 0, x: -500 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }}
                            className="cont-sec">
                            <p className='abt'>About US</p>
                            <a> DISCOVER OUR STORY ___.</a>
                            <p>We are Meena Plastics, a business with ISO 9001/2015 certification. We are well-known and reputable for providing the highest quality carry bags, roll garbage bags, bio-hazardous bags, and other products. Our ability to consistently outperform the competition in satisfying customer needs in a way that benefits both parties has earned us respect and trust in this business. We introduce ourselves with great pride because we demonstrate that customers make the best choices if they believe us. From Vadodara, we satisfy the needs of our customers and consistently fulfill our delivery commitments.</p>
                            <Link className='link' to='/aboutUs'>Read More</Link>
                        </motion.div>
                    </div>
                    <div className="sec2">
                        <motion.img
                            initial={{ opacity: 0, x: 500 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                            src="/imagecopy11.png" alt="" className='img1' />
                        <motion.img
                            initial={{ opacity: 0, x: 300 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }}
                            src="/imagecopy10.png" alt="" className='img2' />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home