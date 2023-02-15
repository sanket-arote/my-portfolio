import React from "react";
import './Intro.css';
import Github from "../../img/github.png";
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import { FloatingDiv } from "../FloatingDiv/Floating";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';

export const Intro = () =>{
    // transition 
    const transition = {duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="intro">
            {/* Left */}
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''}}>Hy! I Am</span>
                    <span>Sanket Arote</span>
                    <span>
                        Frontend Developer with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>
                {/* Here if we see class name (className="button i-button") first word button will take inputs from .button which is in "App.css"
                    and second "i-button will take input from "Intro.css" in this way it works in combination. */}
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                    <a href="https://github.com/">
                        <img src={Github} alt="Github" />
                    </a>
                    <a href="https://in.linkedin.com/">
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
            </div>
            

            {/* Right */}
            <div className="i-right">
                <img src={Vector1} alt="vector1" />
                <img src={Vector2} alt="vectotr2" />
                <img src={boy} alt="boy" />
                {/* animation */}

                <motion.img
                initial={{left: '-36%' }}
                whileInView={{left: '-24%'}}
                transition={transition}
                src={glassesimoji} alt="" />

                <motion.div
                initial={{top: '-4%', left:'74%'}}
                whileInView={{left: '68%'}}
                transition={transition}

                style={{top: '-4%', left: '68%'}}
                className='floating-div' 
                 >
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
                </motion.div>
                <motion.div 
                initial={{left: '9rem', top:'18rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}

                style={{top: '18rem', left: '0rem'}}
                className='floating-div'>
                    <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award"/>
                </motion.div>

                {/* Blur Div's  */}
                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left:"-9rem"}}></div>
            </div>
        </div>
    )
}

// export default Intro;