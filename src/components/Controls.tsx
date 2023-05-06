import { useSwiper } from "swiper/react";
import { useWindowSize } from "../hooks/useWindowsSize";
import Pagination from "./Pagination";

interface ControlsProps {
  activeIndex: number;
  setActiveIndex: any;
  shownSlides: number;
  itemsAmount: number;
}

const Controls = ({activeIndex, setActiveIndex, shownSlides, itemsAmount}: ControlsProps) => {
  const swiper = useSwiper();
  
  function handlePrevClick() {
    swiper.slidePrev();
    setActiveIndex(swiper.activeIndex);
  }

  function handleNextClick() {
    swiper.slideNext();
    setActiveIndex(swiper.activeIndex);
  }

  const [width, height] = useWindowSize();

  const hidePrev = (activeIndex === 0);
  const hideNext = (itemsAmount - activeIndex - shownSlides === 0); 

  return <div className="carousel__controls controls">
    <div className="controls__pages pages-controls">
      <span className="pages-controls__from">{activeIndex + 1 < 10 ? '0' + (activeIndex + 1) : activeIndex + 1}</span>
      /
      <span className="pages-controls__to">{itemsAmount < 10 ? '0' + itemsAmount : itemsAmount}</span>
    </div>
    <div className="controls__buttons">
      <button className={`controls__button controls__button_prev ${hidePrev ? 'hidden' : ''}`} onClick={handlePrevClick}>
        <img src="./images/svg/arrow-right_dark.svg" alt="arrow" />
      </button>
      <button className={`controls__button ${hideNext ? 'hidden' : ''}`} onClick={handleNextClick}>
        <img src="./images/svg/arrow-right_dark.svg" alt="arrow" />
      </button>
    </div>
    {width <= 480 ? <Pagination activeIndex={activeIndex} setActiveIndex={setActiveIndex} /> : null}
    
  </div>
}

export default Controls;