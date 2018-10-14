import React from "react";

const UndrawPortfolio = props => (
  <svg
    style={{ height: props.height, width: "100%" }}
    data-name="Layer 1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 796 684"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <linearGradient
        id="b"
        x1={398}
        y1={684}
        x2={398}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.01} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="a"
        x1={193}
        y1={420.5}
        x2={193}
        y2={262}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.12} />
        <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient id="c" x1={395.5} x2={395.5} y2={262} xlinkHref="#a" />
      <linearGradient id="d" x1={598.5} x2={598.5} y2={262} xlinkHref="#a" />
      <linearGradient id="e" y1={616.5} y2={460} xlinkHref="#a" />
      <linearGradient
        id="f"
        x1={395.5}
        y1={616.5}
        x2={395.5}
        y2={460}
        xlinkHref="#a"
      />
      <linearGradient
        id="g"
        x1={598.5}
        y1={616.5}
        x2={598.5}
        y2={460}
        xlinkHref="#a"
      />
    </defs>
    <path fill="url(#b)" d="M0 0h796v684H0z" />
    <path fill="#fff" d="M9.62 10.23h776.76v662.68H9.62z" />
    <path fill="#bdbdbd" d="M118.5 81.85h254v20.81h-254z" />
    <path fill="#e0e0e0" d="M118.5 123.47h555v20.81h-555z" />
    <path fill="#64ffda" d="M118.5 165.08h555v20.81h-555z" />
    <path fill="url(#a)" d="M113 262h160v158.5H113z" />
    <path fill="url(#c)" d="M316 262h159v158.5H316z" />
    <path fill="url(#d)" d="M519 262h159v158.5H519z" />
    <path fill="url(#e)" d="M113 460h160v156.5H113z" />
    <path fill="url(#f)" d="M316 460h159v156.5H316z" />
    <path fill="url(#g)" d="M519 460h159v156.5H519z" />
    <path
      fill={props.primaryColor}
      d="M118.5 265.5h149v149h-149zM321.5 265.5h149v149h-149zM524.5 265.5h149v149h-149zM118.5 461.5h149v149h-149zM321.5 461.5h149v149h-149zM524.5 461.5h149v149h-149z"
    />
  </svg>
);

export default UndrawPortfolio;
