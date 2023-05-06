import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import { useWindowSize } from '../../hooks/useWindowsSize';
import { IHistoricDateGroup } from '../../mock/historicDates';
import ControlButton from './ControlButton';

interface SubSliderProps {
  children?: React.ReactNode;
  datesGroup: IHistoricDateGroup;
}

const SubSlider = ({datesGroup}: SubSliderProps) => {

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const [width, height] = useWindowSize();

  function handleSlideChange(isFirst: boolean, isLast: boolean) {
    setIsFirstSlide(isFirst);
    setIsLastSlide(isLast);
  }

  return <Swiper
    spaceBetween={width < 997 ? width < 480 ? 25 : 50 : 80}
    slidesPerView={width < 997 ? width < 480 ? 1.5 : 2 : 3}
    onSlideChange={(swiper) => handleSlideChange(swiper.isBeginning, swiper.isEnd)}
    // onSwiper={(swiper) => console.log(swiper)}
    className="sub-slider"
  >
    {width <= 480 ? null : <ControlButton isPrev={true} hide={isFirstSlide} />}
    <div className="sub-slider__slides">
      {datesGroup.dates.map(date => {
        return <SwiperSlide key={date.year + '_' + date.text.slice(0, 2)} className="sub-slider__single single">
          <h1 className="single__year">{date.year}</h1>
          <div className="single__text">{date.text}</div>
        </SwiperSlide>
      })}
    </div>
    {width <= 480 ? null : <ControlButton isPrev={false} hide={isLastSlide} />}
  </Swiper>
}

export default SubSlider;