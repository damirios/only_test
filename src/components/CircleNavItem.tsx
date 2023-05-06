import { useSwiper } from "swiper/react";
import { useWindowSize } from "../hooks/useWindowsSize";

interface NavItemProps {
  title: string;
  index: number;
  activeIndex: number;
  itemsAmount: number;
  isActive: boolean;
  setActive: any;
}

const CircleNavItem = ({title, index, itemsAmount, activeIndex, isActive, setActive}: NavItemProps) => {

  const [width, height] = useWindowSize();

  const circleRadius = width <= 768 ? width <= 600 ? 300 / 2 : 400 / 2 : 530 / 2;
  const itemRadius = 56 / 2;

  const xshift = (circleRadius) * Math.cos(2 * Math.PI * (-index + 1) / itemsAmount) - 1;
  const yshift = (circleRadius) * Math.sin(2 * Math.PI * (-index + 1) / itemsAmount);

  const itemStyle = {
    bottom: (circleRadius - itemRadius) + yshift + 'px',
    left: (circleRadius - itemRadius) + xshift + 'px',
    transform: `rotate(${360 * (activeIndex) / itemsAmount}deg)`,
  };

  const swiper = useSwiper();

  function handleClick() {
    swiper.slideTo(index);
    setActive(index);
  }
  
  return <div style={itemStyle} className="circle-nav__item-box item-box">
    <div onClick={handleClick} className={`item-box__circle ${isActive ? '' : 'item-box__circle_inactive'}`}>
      {index + 1}
    </div>
    <div className={`item-box__text ${isActive ? '' : 'item-box__text_inactive'}`}>
      {title}
    </div>
  </div>
  
}

export default CircleNavItem;