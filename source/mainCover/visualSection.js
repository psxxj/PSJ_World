import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react' 
import { Navigation, Pagination, Autoplay } from "swiper"
import 'swiper/css';
import './visualSection.css'

const VisualElement =({Name, Title1, Title2, Image}) => {
    return (
        <div className = {Name}>
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
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{type: "fraction",}}
            scrollbar={{draggable: true}}
            direction= 'horizontal'
            loop='true'
            >
                <SwiperSlide><VisualElement Name = 'info ai' Title1 = '함께 더 이야기하고 싶은 AI를 만드는'
                Title2= "인재를 꿈꿉니다" Image = '미정'/></SwiperSlide>
                <SwiperSlide><VisualElement Name = 'info front' Title1 = '최고의 사용자 경험을 중시할 수 있는'
                Title2= "디테일한 인터페이스를 그려나가겠습니다" Image = '미정2'/></SwiperSlide>
                <SwiperSlide><VisualElement Name = 'info back' Title1 = '데이터베이스와 서비스 아키텍쳐 또한'
                Title2= "이해도가 높습니다" Image = '미정3'/></SwiperSlide>
                <SwiperSlide><VisualElement Name = 'info strength' Title1 = '쌓아왔던 경험들을 통하여'
                Title2= "도전적인 코드를 구현합니다" Image = '미정4'/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default VisualWrapper;

// autoplay={{delay: 4000, disableOnInteraction: false}}