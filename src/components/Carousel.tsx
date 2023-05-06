import { datesGroups } from "../mock/historicDates";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import Controls from "./Controls";
import CircleNav from "./CircleNav";
import { useState } from "react";
import SubSlider from "./SubSlider/SubSlider";
import Years from "./Years";
import { useWindowSize } from "../hooks/useWindowsSize";

interface CarouselProps {
  children?: React.ReactNode;
}

const Carousel = ({children}: CarouselProps) => {

  const mockDatesGroups = datesGroups;
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, height] = useWindowSize();

  const SHOWN_SLIDES = 1;

  return <Swiper
    spaceBetween={50}
    slidesPerView={SHOWN_SLIDES}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
    className="carousel"
  >
    <div className="carousel__title">Исторические даты</div>
    <div className="circle-nav-box">
      {width <= 480 ? <div className="circle-title">{mockDatesGroups[activeIndex].title}</div> : 
        <CircleNav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      }
      <Years from={mockDatesGroups[activeIndex].from} to={mockDatesGroups[activeIndex].to} />
    </div>
    {mockDatesGroups.map((el, index) => {
      return <SwiperSlide className="carousel__slide slide-carousel" key={index}>
        <div className="slide-carousel__dates">
          <div className="slide-carousel__from">{el.from}</div>
          <div className="slide-carousel__to">{el.to}</div>
        </div>
      </SwiperSlide>
    })}
    <Controls shownSlides={SHOWN_SLIDES} activeIndex={activeIndex} setActiveIndex={setActiveIndex} itemsAmount={mockDatesGroups.length} />
    <SubSlider datesGroup={mockDatesGroups[activeIndex]} />
  </Swiper>
}

export default Carousel;