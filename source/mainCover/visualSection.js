import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react' 
import { Navigation, Pagination, Scrollbar } from "swiper"
import 'swiper/css';
import './visualSection.css'

const VisualElement =({Title, Image}) => {
    return (
        <div className = "inner">
            <h1>{Title}</h1>
        </div>
    );
}

const VisualWrapper = () => {
    return (
        <div className= "swiper-vertical">
            <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            direction= 'horizontal'>
                <SwiperSlide><VisualElement Title= 'AI에 관련된 내용' Image = '미정'/></SwiperSlide>
                <SwiperSlide><VisualElement Title= '프론트엔드 관련된 내용' Image = '미정2'/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default VisualWrapper;