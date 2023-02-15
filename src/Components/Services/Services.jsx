import React from "react";
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';   
import Humble from '../../img/humble.png';
import { Card } from "../Card/Card";
import Resume from './resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";

export const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    // transition
    const transition = {duration: 1, type: 'spring'}

    return(
        <div className="services" id="Services" >
            
            {/* left side  */}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Works for all these</span>
                <span>Brands and Clients </span>
                <span>Lorem is simpley dummy text for printing of printing Lorem
                    <br/>
                    isum is simpley text for printing
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>

            {/* right side */}
            <div className="cards">
                <motion.div
                whileInView={{left:'14rem'}}
                initial={{left: '20rem'}}
                transition={transition}

                style={{left:'14rem'}}>

                        {/* First Card */}
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {'Figma, Sketch, Adobe, Adobe xd, Photoshop'}
                    />
                </motion.div>   

                <motion.div
                whileInView={{ left: "-4rem" }}
                initial={{ left: "-11rem", top: '12rem' }}
                transition={transition}

                style={{top: '12rem', left: '-4rem'}}>
                        {/* Second Card */}
                    <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {'HTML, CSS, JavaScript, React, Mongo DB, AWS'}
                    />
                </motion.div>

                <motion.div 
                whileInView={{left:'14rem'}}
                initial={{left: '20rem'}}
                transition={transition}

                style={{top: '19rem', left: '12rem'}}>
                        {/* Third Card */}
                    <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {'Lorem ispum dummy text are usually use in section where'}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>

            </div>
        </div>

        
    )
}