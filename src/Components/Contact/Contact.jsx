import React from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from "react";
import { themeContext } from '../../Context';
import { useContext } from 'react';

export const Contact = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

// Email Part
    const form = useRef();

    // to display done message
    // The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ui7tb3r', 'template_h45uosq', form.current, '9sdWN6FGUp3hjL0C3')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };





    return(
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode? 'white': ''}}>Get In Touch</span>
                    <span>Contact Me</span>
                    <div 
                        className="blur s-blur1"
                         style={{background: "#ABF1FF94"}}
                    ></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name"/>
                    <input type="email" name="user_email" className="user" placeholder="Email"/>
                    <textarea name="message" className="user" placeholder="Message"/>
                    <input type="submit" value="Send" className="button"/>
                    <span>{done && "Your message have been send"}</span>
                    <div
                    className="blur c-blur1"
                    style={{ background: "var(--purple)" }}
                    >

                    </div>
                </form>
            </div>
        </div>
        
    )
}