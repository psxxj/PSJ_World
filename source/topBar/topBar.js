import React, {useState, useEffect} from "react"
import './topBar.css'

const Menu = ({menuName}) => {
    return (
        <li>
            <a href="/">{menuName}</a>
        </li>
    )
}

function TopBar() {
    const [barMode, setBarMode] = useState(0);
    let beforeScrollY = 0;
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    const handleScroll = () => {
        let directionScroll = (window.scrollY - beforeScrollY > 0);
        window.scrollY === 0 ? setBarMode(0) : (directionScroll ? setBarMode(1) : setBarMode(2));
        beforeScrollY = window.scrollY;
        }

    return (
        <header id = "header" className= {barMode === 0 ? "transBar" :
        (barMode === 1 ? "noneBar" : "whiteBar")}>
            <div className = "inner">
                <h1 className = "logo">
                    <a href="/">
                        <img src= {barMode === 0 ? "./image/logo_white.png" : "./image/logo_black.png"} alt="PSJ WORLD" />
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
                    <img src= {barMode === 0 ? "./image/cv_grey.png" : "./image/cv_black.png"} alt="CV" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default TopBar;