import React, { ReactNode, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id?: string;
  children?: ReactNode;
  className?: string;
  nextRoute: string;
  prevRoute: string;
}

export const Section = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const navigate = useNavigate();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const toleranceThreshold = 0.2;

  const onTouchStartEventHandler = (e: React.TouchEvent) =>
    (touchStartX.current = e.changedTouches[0].screenX);

  const onTouchEndEventHandler = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const touchXThresholdRight =
      touchEndX.current * toleranceThreshold + touchEndX.current;
    const touchXThresholdLeft =
      touchEndX.current * toleranceThreshold - touchEndX.current;

    console.log(
      "touchStartX: " +
        touchStartX.current +
        " touchEndX: " +
        touchEndX.current +
        " touchXThresholdRight: " +
        touchXThresholdRight,
      +" touchXThresholdLeft: " + touchXThresholdLeft.toString()
    );
    if (touchXThresholdRight > touchStartX.current) navigate(props.prevRoute);
    if (touchXThresholdRight < touchStartX.current) navigate(props.nextRoute);
  };

  const onScrollEventHandler = (e: React.WheelEvent<HTMLElement>) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      navigate(props.nextRoute);
    } else {
      navigate(props.prevRoute);
    }
  };

  return (
    <section
      id={props.id}
      ref={ref}
      className={props.className || "min-w-full min-h-full pt-10 px-5 transition md:px-36 md:flex md:items-center"}
      onTouchStart={(e) => onTouchStartEventHandler(e)}
      onTouchEnd={(e) => onTouchEndEventHandler(e)}
      onWheel={(e) => onScrollEventHandler(e)}
    >
      {props.children}
    </section>
  );
});
