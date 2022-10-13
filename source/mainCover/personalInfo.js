import React from 'react';
import './personalInfo.css'

const TitleText = ({text}) => {
    return (
        <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="300" 
        data-aos-delay="100" data-aos-easing="fade-in">{text}</div>
    );
}

const PersonalInfo = () => {
    return (
        <div className= "personal-info">
            <h2 className='title-area'>
                <TitleText text = "필요성을 느끼고 행동하며" />
                <TitleText text = "세상의 복잡함을 단순함으로 그려내고 싶은," />
                <TitleText text = "프론트엔드 개발자, 박성준" />
            </h2>
        </div>
    );
}

export default PersonalInfo;