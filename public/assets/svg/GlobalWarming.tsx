import React from 'react'

export default function GlobalWarming() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      width={64}
      height={64}
    >
      {/* Background putih */}
      {/* <rect width="64" height="64" fill="#ffffff" /> */}

      <path
        d="M52 23v17.263c0 .751.328 1.465.896 1.956A8.923 8.923 0 0 1 56 49c0 4.967-4.033 9-9 9s-9-4.033-9-9a8.979 8.979 0 0 1 3.095-6.79c.566-.489.892-1.2.892-1.947C42 35.632 42 19.34 42 11c0-1.326.527-2.598 1.464-3.536A5.004 5.004 0 0 1 47 6h0a5 5 0 0 1 5 5v8"
        style={{ fill: "none", stroke: "currentColor", strokeWidth: "1.5px" }}
      />
      <path
        d="M52 49.5c0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.574.729-2.979 1.867-3.896a3.036 3.036 0 0 0 1.114-2.353C45 40.032 45 30.967 45 27.5a2 2 0 1 1 4 0v15.751c0 .917.412 1.786 1.121 2.367M48.5 23H52M48.5 19H52M48.5 15H52M36 55.668A24.188 24.188 0 0 1 32 56C18.754 56 8 45.246 8 32S18.754 8 32 8c3.568 0 6.955.78 10 2.179"
        style={{ fill: "none", stroke: "currentColor", strokeWidth: "1.5px" }}
      />
      <path
        d="m23 54 4.433-5.91a3.694 3.694 0 0 0 .118-4.264L25.62 40.93a3.693 3.693 0 0 1-.62-2.048v-1.855a3.693 3.693 0 0 0-2.968-3.621l-4.533-.906a3.693 3.693 0 0 1-2.918-3.014L14 26M32 22a2 2 0 1 1 2-2"
        style={{ fill: "none", stroke: "currentColor", strokeWidth: "1.5px" }}
      />
      <circle
        cx="13"
        cy="9.5"
        r="2.5"
        style={{ fill: "none", stroke: "currentColor", strokeWidth: "1.5px" }}
      />
      <path
        d="M16 23s1.705-4.161 9-9"
        style={{ fill: "none", stroke: "currentColor", strokeWidth: "1.5px" }}
      />
    </svg>
  );
}
