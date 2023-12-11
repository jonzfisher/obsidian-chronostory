import { useState, useEffect, RefObject } from 'react'
import { Moment } from '../store/momentsSlice';
import React from 'react';
import '../styles.css'

interface MomentTickProps {
  position: number,
  moment: Moment,
  tickReference: RefObject<any>,
  setCurrentMoment: any,
  currentMoment: any,
  setCenterLabelOpacity: any,
}

export default function MomentTick(
  props: MomentTickProps
) {
  const {
    position,
    moment,
    tickReference,
    setCurrentMoment,
    currentMoment,
    setCenterLabelOpacity,
  } = props
  const updateCenterLabel = () => {
    setCurrentMoment(moment);
    setCenterLabelOpacity(1);
  }

  useEffect(() => {
    const tick: SVGCircleElement | null = tickReference?.current;
    if(!tick) return;

    tick.addEventListener("touchmove", updateCenterLabel)
    tick.addEventListener("mouseenter", updateCenterLabel)

    return () => {
      tick.removeEventListener("touchmove", updateCenterLabel)
      tick.removeEventListener("mouseenter", updateCenterLabel)
    }
  }, [currentMoment])

  return (
    <>
      <circle 
        fill="none"
        strokeWidth="20"
        strokeDashoffset={`calc((${position}) * 40% * 2 * pi)`}
        strokeDasharray="calc(0.002 * 40% * 2 * pi) calc(0.998 * 40% * 2 * pi)"
        cx="50%"
        cy="50%"
        r="40%"
        // stroke="rgb(0,255,0,0.9)"
        clipPath="url(#clock-clip)"
        className="momentHighlight"
      />
      {/* pointerEvents="stroke" makes problem for whole circle and only the stroke matters
          for these ticks, which are made up of strokes */}
      <circle 
        ref={tickReference}
        fill="none"
        strokeWidth="26"
        strokeDashoffset={`calc((${position} + 0.002) * 40% * 2 * pi)`}
        strokeDasharray="calc(0.006 * 40% * 2 * pi) calc(0.994 * 40% * 2 * pi)"
        cx="50%"
        cy="50%"
        r="40%"
        // stroke={`rgb(0,255,0,${moment?.id == currentMoment?.id ? 1.0 : 0.0})`}
        clipPath="url(#markers)"
        pointerEvents="stroke"
        className={`${moment?.id === currentMoment?.id ? 'momentHighlight' : 'momentDefault'}`}
      />
    </>
  )
}