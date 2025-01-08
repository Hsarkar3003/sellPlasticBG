import React from 'react'
import Nevbar from '../../component/Nevbar/Nevbar'
import './about.scss'
import Slider from '../../component/slider/Slider'
import Footer from '../../component/footer/Footer'
import {motion} from 'framer-motion'
const Aboutus = () => {
    return (
        <>
            <Nevbar />
            <div className="about">
                <motion.div 
                initial={{opacity:0,x:-500}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1.5}}
                className="compny">
                    <div className="details">
                        <h1>Who we are?</h1>
                        <p>              We are Motive, a company focused on delivering exceptional quality and building strong relationships with our clients. Our commitment to providing innovative solutions and exceptional customer service has earned us the trust and respect of our clients. We take great pride in introducing ourselves, and we firmly believe that choosing Motive is the best decision for our customers.  We serve a wide range of clients across India, consistently fulfilling our delivery commitments and exceeding expectations.
                        </p>
                    </div>
                    <div className="iconCompany">
                        <motion.img 
                       initial={{opacity:0,x:1000}}
                       whileInView={{opacity:1,x:0}}
                       transition={{duration:1}}
                       style={{
                            height: 400,
                            width: 400,
                            position: "absolute",
                            top: 200,
                            left: 100,
                            zIndex: 2,
                            

                        }} src="/gmini1.jpg" alt="" />
                        <motion.img
                      initial={{opacity:0,x:1000}}
                      whileInView={{opacity:1,x:0}}
                      transition={{duration:1}}
                            style={{
                                height: 400,
                                width: 400,
                                position: "absolute",
                                top: 0,
                                left: 400,
                                zIndex: 1
                            }} src="/gmini2.jpg" alt="" />
                    </div>
                </motion.div>

            </div>
            <div className="how">
                <div className="contnt">
                    <motion.h1
                    initial={{opacity:0,x:-500}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1}}
                    
                    >How it Create?</motion.h1>
                    <motion.li
                         initial={{opacity:0,y:600}}
                         whileInView={{opacity:1,y:0}}
                         transition={{duration:0.5}}
                    >Inspecting the raw plastic film:</motion.li>
                    <motion.li  initial={{opacity:0,y:600}}
                         whileInView={{opacity:1,y:0}}
                         transition={{duration:0.7}}>Feeding the film into the extrusion machine:</motion.li>
                    <motion.li  initial={{opacity:0,y:600}}
                         whileInView={{opacity:1,y:0}}
                         transition={{duration:0.9}}> Cutting and sealing the sheets:</motion.li>
                    <motion.li  initial={{opacity:0,y:600}}
                         whileInView={{opacity:1,y:0}}
                         transition={{duration:1.1}}> Adding handles or ties:</motion.li>
                    <motion.li  initial={{opacity:0,y:600}}
                         whileInView={{opacity:1,y:0}}
                         transition={{duration:1.3}}>Printing the bags:</motion.li>
                    <motion.li  initial={{opacity:0,y:600}}
                         whileInView={{opacity:1,y:0}}
                         transition={{duration:1.4}}>Packaging and shipping:</motion.li>

                </div>
                <div className="slider">
                    <Slider />
                </div>
            </div>
            <div className="how2">
                <div className="content">
                    <h1>Our Mission</h1>
                    <p>Our wide selection of high-quality goods has helped us build a sizable clientele. We are renowned in the business for providing top-notch products at competitive prices.</p>
                    <li>
                        Reasonable and Affordable Rates</li>
                    <li>
                        Prompt Order Delivery
                    </li>
                    <li>

                        Client Satisfaction</li>
                    <li>

                        Ethical Business</li>
                    <li>

                        Versatile Payment Methods</li>
                    <li>

                        Enormous Distribution Network</li>
                    <li>
                        Follows a Customized Approach</li>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Aboutus