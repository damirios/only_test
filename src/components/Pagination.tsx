import React from "react";
import { useSwiper } from "swiper/react";
import { datesGroups } from "../mock/historicDates";

interface PaginationProps {
  activeIndex: number;
  setActiveIndex: any;
}

const Pagination = ({activeIndex, setActiveIndex}: PaginationProps) => {
  const swiper = useSwiper();

  const mockDatesGroups = datesGroups;

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const clickedIndex = (e.target as HTMLDivElement).dataset.index;
    if (clickedIndex) {
      setActiveIndex(+clickedIndex);
      swiper.slideTo(+clickedIndex);
    }
  }

  return <div className="pagination">
    {mockDatesGroups.map((group, index) => {
      return <div key={index} className={`pagination__item ${index === activeIndex ? 'pagination__item_active' : ''}`}
        onClick={handleClick} data-index={index} />
    })}
  </div>
}

export default Pagination;