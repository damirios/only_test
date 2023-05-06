import { datesGroups } from "../mock/historicDates";
import CircleNavItem from "./CircleNavItem";

interface CircleNavProps {
  activeIndex: number;
  setActiveIndex: any;
}

const CircleNav = ({activeIndex, setActiveIndex}: CircleNavProps) => {
  const mockDatesGroups = datesGroups;

  const circleNavStyle = {
    transform: `rotate(-${360 * (activeIndex) / mockDatesGroups.length}deg)`,
    transition: 'all 1s ease 0s'
  }
  
  return <div style={circleNavStyle} className="circle-nav">
    {mockDatesGroups.map((el, index) => {
      return <CircleNavItem setActive={setActiveIndex} key={index} title={el.title} index={index} activeIndex={activeIndex}
      itemsAmount={mockDatesGroups.length} isActive={index === activeIndex} />
    })}
  </div>
}

export default CircleNav;