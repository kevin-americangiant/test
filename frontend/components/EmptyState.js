// Empty State component
/*

This component displays when we've successfully created a webhook on the desired resource, but no events have come in yet

*/

// IMPORTS

import React from 'react';

// STATELESS FUNCTIONAL COMPONENT

export const EmptyState = () => (
  <div className="emptyState">
    <h2 className="emptyText">No events just yet, but nothing like a good wait.</h2>
    <svg
      width="118"
      height="150"
      viewBox="0 0 118 150"
      className="emptyIcon"
    >
      <title>Green dot illustration</title>
      <use xlinkHref="#a" transform="translate(23 143)" fill="#EFF0F1" />
      <use xlinkHref="#b" fill="#73E1B9" />
      <use xlinkHref="#c" transform="translate(70 1.024)" fill="#7DF5C8" />
      <use xlinkHref="#d" transform="translate(62 37.5)" fill="#2B5245" />
      <use xlinkHref="#e" transform="translate(32 24)" fill="#2B5245" />
      <use xlinkHref="#f" transform="translate(35 27)" fill="#7DF5C8" />
      <g>
        <use xlinkHref="#e" transform="translate(85 24)" fill="#2B5245" />
        <use xlinkHref="#f" transform="translate(88 27)" fill="#7DF5C8" />
      </g>
      <defs>
        <path
          id="a"
          d="M72 3.5C72 5.433 55.882 7 36 7S0 5.433 0 3.5 16.118 0 36 0s36 1.567 36 3.5z"
        />
        <path
          id="b"
          d="M118 59c0 32.585-26.415 59-59 59S0 91.585 0 59 26.415 0 59 0s59 26.415 59 59z"
        />
        <path
          id="c"
          d="M48 57.976C48 29.151 27.328 5.153 0 0v115.953c27.328-5.153 48-29.15 48-57.977z"
        />
        <path
          id="d"
          d="M8 9.5c4.418 0 8-4.253 8-9.5H0c0 5.247 3.582 9.5 8 9.5z"
        />
        <path id="e" d="M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
        <path id="f" d="M4 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
      </defs>
    </svg>
  </div>
);
