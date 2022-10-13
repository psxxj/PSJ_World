import React from "react"
import './mainCover.css'
import VisualWrapper from "./visualSection"
import SimpleSkill from "./simpleSkill"
import PersonalInfo from "./personalInfo"


const MainCover = () => {
    return (
        <div className= "main-cover">
            <VisualWrapper />
            <PersonalInfo />
            <SimpleSkill />
        </div>
    )
}

export default MainCover;