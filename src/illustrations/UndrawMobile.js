import React from "react";

const UndrawMobile = props => (
  <svg
    style={{ height: props.height, width: "100%" }}
    data-name="Layer 1"
    viewBox="0 0 392.94 715"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={196.47}
        y1={715}
        x2={196.47}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.01} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
    </defs>
    <rect width={392.94} height={715} rx={24.73} ry={24.73} fill="url(#a)" />
    <rect
      x={9.05}
      y={9.95}
      width={374.84}
      height={688.43}
      rx={24.73}
      ry={24.73}
      fill="#fff"
    />
    <path fill={props.primaryColor} d="M51.37 58.61h290.2v560.24H51.37z" />
    <ellipse cx={196.47} cy={659.21} rx={23.14} ry={23.74} fill="#dbdbdb" />
    <ellipse cx={152.51} cy={32.5} rx={4.63} ry={4.75} fill="#dbdbdb" />
    <rect
      x={173.33}
      y={28.94}
      width={71.73}
      height={7.12}
      rx={1.5}
      ry={1.5}
      fill="#dbdbdb"
    />
  </svg>
);

export default UndrawMobile;
