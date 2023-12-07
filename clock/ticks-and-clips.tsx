import React from 'react'

const TicksAndClips = React.memo(function TicksAndClips() {

  return (
    <>
      <defs>
          <clipPath id="clock-clip">
            <circle 
              stroke="#fff"
              cx="50%"
              cy="50%"
              r="40%"
            />
          </clipPath>
          <clipPath id="small-dashes">
            <circle 
              strokeWidth="2"
              strokeDasharray="0.5 4.5"
              cx="calc(50% + 0.25px)"
              cy="50%"
              r="40%"
              stroke="#858585"
            />
          </clipPath>
          <clipPath id="markers">
            <circle 
              strokeWidth="2"
              strokeDasharray="0.5 4.5"
              cx="calc(50% + 0.25px)"
              cy="50%"
              r="42%"
              stroke="#858585"
            />
          </clipPath>
      </defs>
      <circle 
        fill="none"
        strokeWidth="2"
        strokeDasharray="calc(0.001 * 40% * 2 * pi) calc(0.007333 * 40% * 2 * pi)"
        cx="calc(50% + 0.25px)"
        cy="50%"
        r="40%"
        stroke="rgb(255 255 255 / 0.2"
        clipPath="url(#small-dashes)"
      />
      <circle 
        stroke="rgb(255 255 255 / 0.5"
        fill="none"
        strokeWidth="20"
        strokeDashoffset="calc(0.000 * 40% * 2 * pi)"
        strokeDasharray="calc(0.001 * 40% * 2 * pi) calc(0.249 * 40% * 2 * pi)"
        cx="50%"
        cy="50%"
        r="40%"
        clipPath="url(#clock-clip)"
      />
    </>
  )
});

export default TicksAndClips