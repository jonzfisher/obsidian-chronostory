import React from 'react';

import { useRef, useState, useEffect, createRef, useMemo } from 'react'
import TicksAndClips from './ticks-and-clips';
import MomentTick from './moment-tick';
import { Moment } from '../store/momentsSlice';
import { generateUUID } from '../store/uuid';

interface ClockProps {
  duration?: number;
  hideCenter?: boolean;
  moments: Moment[];
}

export default function StoryClock(props: ClockProps) {
  let { duration, hideCenter = false, moments } = props;
  const [currentMoment, setCurrentMoment] = useState<any>(null)
  const [centerLabelOpacity, setCenterLabelOpacity] = useState(.33)
  const tickRefs = useMemo(
    () => moments.map(() => createRef()),
    [moments]
  )

  const calculatePosition = (seconds: number): number => -1 * seconds / (duration ? duration : 7200);

  useEffect(()=> {
    if(!duration) setCurrentMoment({
      description: 'Missing runtime in the story to properly map beats. Add line with format `runtime::01:00:00`'
    })
    if(moments.length == 0) setCurrentMoment({
      description: 'No moments have been added. Add a moment with this format: `HH:MM:SS Description of moment`'
    })
  })

  return (
    <div style={{
      paddingTop: '2rem'
    }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 150"
          className="absolute z-0 top-0 left-0 h-[300px] touch-none cursor-pointer"
          style={{transform: 'rotate(-90deg)'}}
          data-testid="clock-svg"
        >
          <TicksAndClips />
          {moments.map((moment: Moment, i: number) => (
            <MomentTick key={generateUUID()}
              position={calculatePosition(moment.timestamp)} 
              moment={moment}
              currentMoment={currentMoment}
              tickReference={tickRefs[i]}
              setCurrentMoment={setCurrentMoment}
              setCenterLabelOpacity={setCenterLabelOpacity}
            />
          ))}
          <line />
        </svg>
        { !hideCenter && 
        <div style={{
            top: 'calc(50% - 1rem)',
            paddingTop: '2rem',
            zIndex: -2,
            touchAction: 'none',
            opacity: centerLabelOpacity,
            userSelect: 'none',
            textAlign: 'center',
          }} 
          className="text-amber-50 text-base text-center center mx-auto my-0 relative top-0 left-0">
          {currentMoment && currentMoment?.description}
        </div>
      }
    </div>
  )
}