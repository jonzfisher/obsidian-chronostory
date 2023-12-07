import React from 'react';

import { useRef, useState, useEffect, createRef, useMemo } from 'react'
import TicksAndClips from './ticks-and-clips';
import MomentTick from './moment-tick';
import { Moment } from '../store/momentsSlice';
import { generateUUID } from '../store/uuid';

interface ClockProps {
  duration?: number;
  hideCenter?: boolean;
}

export default function StoryClock(props: ClockProps) {
  let { duration = 7200, hideCenter = false } = props;
  // const moments = [] as Moment[] // fill example in to start with
  const moments = [
    {
        "id": "generated_uuid_1",
        "description": "Opening crawl and space battle introduction",
        "timestamp": 72.01,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_2",
        "description": "R2-D2 and C-3PO escape to Tatooine with Princess Leia's message",
        "timestamp": 720.1,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_3",
        "description": "Luke Skywalker finds R2-D2 and C-3PO and discovers Leia's message",
        "timestamp": 1440.2,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_4",
        "description": "Luke meets Obi-Wan Kenobi ('Ben' Kenobi)",
        "timestamp": 1800.25,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_5",
        "description": "Luke decides to join Obi-Wan on his mission after finding his aunt and uncle killed",
        "timestamp": 2160.3,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_6",
        "description": "The group meets Han Solo and Chewbacca at the Mos Eisley Cantina",
        "timestamp": 2880.4,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_7",
        "description": "The Millennium Falcon escapes Tatooine",
        "timestamp": 3240.45,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_8",
        "description": "The group arrives at Alderaan's coordinates, finds it destroyed, and gets pulled into the Death Star",
        "timestamp": 4320.6,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_9",
        "description": "Rescue of Princess Leia from the Death Star",
        "timestamp": 5400.75,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_10",
        "description": "Obi-Wan's duel with Darth Vader, and his subsequent death",
        "timestamp": 6120.85,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    },
    {
        "id": "generated_uuid_11",
        "description": "Rebel assault on the Death Star and Luke's use of the Force to destroy it",
        "timestamp": 6840.95,
        "notes": "",
        "created_at": "Mon Nov 13 2023 13:42:00 GMT+0000 (Coordinated Universal Time)"
    }
  ] as Moment[]
  const [currentMoment, setCurrentMoment] = useState<any>(null)
  const [centerLabelOpacity, setCenterLabelOpacity] = useState(.33)
  const tickRefs = useMemo(
    () => moments.map(() => createRef()),
    [moments]
  )

  const calculatePosition = (seconds: number): number => -1 * seconds / duration;

  return (
    <>
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
    </>
  )
}