import React from "react"
import './topBar.css'

const Menu = ({menuName}) => {
    return (
        <li>
            <a href="/">{menuName}</a>
        </li>
    )
}


const TopBar = () => {
    return (
        <header id = "header">
            <div className = "inner">
                <h1 className = "logo">
                    <a href="/">
                        <img src="./image/logo.png" alt="PSJ WORLD" />
                    </a>
                </h1>
                <nav>
                    <ul>
                        <Menu menuName = "ABOUT" />
                        <Menu menuName = "STACK" />
                        <Menu menuName = "PROJECT" />
                        <Menu menuName = "EXPERIENCE" />
                        <Menu menuName = "EDUCATION" />
                    </ul>
                </nav>
                <div className="header-util">
                    <a href="javascript:void(0);">
                    <img src='./image/cv_black.png' alt="CV" />
                    <img src="./image/global.svg" alt="LANGUAGE" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default TopBar;