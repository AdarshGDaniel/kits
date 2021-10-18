import React from 'react'
import './Footer.css'
import { BsFillHeartFill } from "react-icons/bs";

export default function Footer() {
    return (
        <div>
            <div className="line"><div className="insideline"></div></div>
            <div className="Footer-text">
                Made with <BsFillHeartFill color="red"/> KHacks
            </div>
        </div>
    )
}
