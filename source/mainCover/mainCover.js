import React from "react"
import './mainCover.css'
import VisualWrapper from "./visualSection"
import SimpleInfo from "./simpleInfo"


const MainCover = () => {
    return (
        <div className= "main-cover">
            <VisualWrapper />
            <SimpleInfo />
        </div>
    )
}

export default MainCover;