import React from "react";
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import Shopify from '../../img/Shopify.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";

export const Works = () =>{

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    //transition
    const transition = {duration : 3.5, type: 'spring'}

    return(
        <div className="works">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
                <span>Services</span>
                <span>Lorem is simpley dummy text for printing of printing Lorem
                <br/>
                isum is simpley text for printing
                <br/>
                isum is simpley text for printing
                <br/>
                Lorem is simpley dummy text for printing of printing Lorem
                </span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>

            {/* Right Side */}
            <div className="w-right">
                <motion.div 
                initial={{rotate: 45}}
                whileInView={{rotate: 0}}
                viewport={{margin: '-40px'}}
                transition={transition}
                
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>

                {/* Background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}