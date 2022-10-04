import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react' 
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper"
import 'swiper/css';
import './visualSection.css'

const VisualElement =({Title1, Title2, Image}) => {
    return (
        <div className = "inner">
            <div className = "text-area">
            <h1>{Title1}<br/>{Title2}
            </h1>
            <p>Description</p>
            </div>
            <div className = "btn-area">
                <a href="#" className = 'btn-type1'>
                    자세히 보기
                    <i className = "icon-arrow" />
                </a>
            </div>
        </div>
    );
}

const VisualWrapper = () => {
    return (
        <div className= "swiper-vertical">
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            pagination={{clickable: true, type: "bullets"}}
            scrollbar={{draggable: true}}
            direction= 'horizontal'
            loop='true'
            autoplay={{delay: 4000}}
            >
                <SwiperSlide><VisualElement Title1= '함께 더 이야기하고 싶은 AI를 만드는'
                Title2= "인재를 꿈꿉니다" Image = '미정'/></SwiperSlide>
                <SwiperSlide><VisualElement Title1= '최고의 사용자 경험을 중시할 수 있는'
                Title2= "디테일한 인터페이스를 그려나가겠습니다" Image = '미정2'/></SwiperSlide>
                <SwiperSlide><VisualElement Title= '강점 1' Image = '미정3'/></SwiperSlide>
                <SwiperSlide><VisualElement Title= '강점 2' Image = '미정4'/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default VisualWrapper;