import React from "react";

const UndrawProfilePic = props => (
  <svg
    style={{ height: props.height, width: "100%" }}
    data-name="Layer 1"
    viewBox="0 0 698 698"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={349}
        y1={698}
        x2={349}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
    </defs>
    <circle cx={349} cy={349} r={349} fill="url(#a)" opacity={0.5} />
    <circle cx={349.68} cy={346.77} r={341.64} fill="#f5f5f5" />
    <path
      d="M350 689.76a340 340 0 0 0 187.79-56.2c-12.59-68.8-60.5-72.72-60.5-72.72h-264.2s-45.21 3.71-59.33 67A340.07 340.07 0 0 0 350 689.76z"
      fill={props.primaryColor}
    />
    <circle cx={346.37} cy={339.57} r={164.9} fill="#333" />
    <path
      d="M293.15 476.92h105.66v84.53A52.83 52.83 0 0 1 346 614.28a52.83 52.83 0 0 1-52.83-52.83v-84.53z"
      opacity={0.1}
    />
    <path
      d="M296.5 473h99a3.35 3.35 0 0 1 3.35 3.35v81.18A52.83 52.83 0 0 1 346 610.37a52.83 52.83 0 0 1-52.83-52.83v-81.19a3.35 3.35 0 0 1 3.33-3.35z"
      fill="#fdb797"
    />
    <path
      d="M293.34 516.82a152.07 152.07 0 0 0 105.66.29v-13H293.34z"
      opacity={0.1}
    />
    <circle cx={346.37} cy={372.44} r={151.45} fill="#fdb797" />
    <path
      d="M238.49 234.68S302.32 364.24 482.37 289l-41.92-65.73-74.31-26.67z"
      opacity={0.1}
    />
    <path
      d="M238.49 232.78s63.83 129.56 243.88 54.3l-41.92-65.73-74.31-26.67z"
      fill="#333"
    />
    <path
      d="M237.93 224a87.49 87.49 0 0 1 21.69-35.27c29.79-29.45 78.63-35.66 103.68-69.24 6 9.32 1.36 23.65-9 27.65 24-.16 51.81-2.26 65.38-22a44.89 44.89 0 0 1-7.57 47.4c21.27 1 44 15.4 45.34 36.65.92 14.16-8 27.56-19.59 35.68s-25.71 11.85-39.56 14.9c-40.44 8.93-186.76 46.3-160.37-35.77z"
      fill="#333"
    />
    <ellipse cx={194.86} cy={372.3} rx={14.09} ry={26.42} fill="#fdb797" />
    <ellipse cx={497.8} cy={372.3} rx={14.09} ry={26.42} fill="#fdb797" />
  </svg>
);

export default UndrawProfilePic;
