import { useEffect, useState } from "react";

interface YearsProps {
  from: number;
  to: number;
}

const Years = ({from, to}: YearsProps) => {

  const ANIMATION_TIME = 20;

  const [currentFrom, setCurrentFrom] = useState(2000);
  const [currentTo, setCurrentTo] = useState(2000);


  useEffect(() => {
    if (currentFrom > from) {
      setTimeout(() => setCurrentFrom(currentFrom - 1), ANIMATION_TIME);
    } else if (currentFrom < from) {
      setTimeout(() => setCurrentFrom(currentFrom + 1), ANIMATION_TIME);
    }

    if (currentTo > to) {
      setTimeout(() => setCurrentTo(currentTo - 1), ANIMATION_TIME);
    } else if (currentTo < to) {
      setTimeout(() => setCurrentTo(currentTo + 1), ANIMATION_TIME);
    }
  }, [currentFrom, from, currentTo, to]);

  return <div className="circle-years">
    <div className="circle-years__from">{currentFrom}</div>
    <div className="circle-years__to">{currentTo}</div>
  </div>
}

export default Years;