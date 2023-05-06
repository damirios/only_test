import { useSwiper } from "swiper/react";

interface ControlButtonProps {
  isPrev: boolean;
  hide: boolean;
}

const ControlButton = ({isPrev, hide}: ControlButtonProps) => {
  const subSlider = useSwiper();

  return <button className={`sub-slider__button ${hide ? 'hidden' : ''} ${isPrev ? 'sub-slider__button_prev' : ''}`} 
  onClick={() => isPrev ? subSlider.slidePrev() : subSlider.slideNext()}>
    <img src="./images/svg/arrow-right_blue.svg" alt="arrow-right" />
  </button>
}

export default ControlButton;