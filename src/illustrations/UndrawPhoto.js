import React from "react";

const UndrawPhoto = props => (
  <svg
    style={{ height: props.height, width: "100%" }}
    data-name="Layer 1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 887.82 625.36"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={600}
        y1={754.02}
        x2={600}
        y2={145.98}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="b"
        x1={437.25}
        y1={574.51}
        x2={437.25}
        y2={36.62}
        xlinkHref="#a"
      />
      <clipPath id="c" transform="translate(-163.46 -145.98)">
        <rect
          x={216.65}
          y={194.98}
          width={767.31}
          height={510.36}
          rx={8.85}
          ry={8.85}
          fill="#fff"
        />
      </clipPath>
    </defs>
    <path
      d="M1036 734.86a19.06 19.06 0 0 1-19 19.14H183a19.06 19.06 0 0 1-19-19.16v-569.7A19.06 19.06 0 0 1 183 146h834a19.06 19.06 0 0 1 19 19.16"
      transform="translate(-163.46 -145.98)"
      fill="url(#a)"
    />
    <path
      d="M862.73 579.56a18.52 18.52 0 0 1-18.52 18.52H29.47a18.52 18.52 0 0 1-18.52-18.52V28.8a18.52 18.52 0 0 1 18.52-18.52h814.74a18.52 18.52 0 0 1 18.52 18.52"
      fill="#fff"
    />
    <rect
      x={43.49}
      y={36.62}
      width={787.52}
      height={537.89}
      rx={8.85}
      ry={8.85}
      fill="url(#b)"
      data-name="<Rectangle>"
    />
    <rect
      x={53.19}
      y={49}
      width={767.31}
      height={510.36}
      rx={8.85}
      ry={8.85}
      fill="#fff"
    />
    <g clipPath="url(#c)">
      <path
        d="M10.54 554.68l214.21-245.47a42.64 42.64 0 0 1 60.34-3.94l60 52.93a42.64 42.64 0 0 0 55.65.67l183.32-154.12a42.64 42.64 0 0 1 59 4l225 247.64a42.64 42.64 0 0 1 10.91 24.9l8.68 97.69a42.64 42.64 0 0 1-42.48 46.42H42.65A42.64 42.64 0 0 1 .02 584.02a42.64 42.64 0 0 1 10.52-29.34z"
        fill={props.primaryColor}
      />
    </g>
    <circle cx={145.58} cy={130.83} r={47.52} fill="#ff5252" />
  </svg>
);

export default UndrawPhoto;
