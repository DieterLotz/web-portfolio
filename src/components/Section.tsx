import React, { ReactNode, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  id?: string
  children?: ReactNode
  className: string
  nextRoute: string
  prevRoute: string
}

export const Section = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const navigate = useNavigate()
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const onTouchStartEventHandler = (e: React.TouchEvent) => touchStartX.current = e.changedTouches[0].screenX;

  const onTouchEndEventHandler = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX

    if (touchEndX.current > touchStartX.current) navigate(props.prevRoute)
    if (touchEndX.current < touchStartX.current) navigate(props.nextRoute)
  }

  const onScrollEventHandler = (e: React.WheelEvent<HTMLElement>) => {
    if (e.deltaY > 0) {
      navigate(props.nextRoute)
      e.preventDefault()
    } else {
      navigate(props.prevRoute)
      e.preventDefault()
    }
  }

  return (
    <section
      id={props.id}
      ref={ref}
      className={props.className}
      onTouchStart={(e) => onTouchStartEventHandler(e)}
      onTouchEnd={(e) => onTouchEndEventHandler(e)}
      onWheel={(e) => onScrollEventHandler(e)}
    >
      {props.children}
    </section>
  )
})
