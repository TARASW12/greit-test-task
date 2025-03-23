import { JSX } from 'react';

export const Selection = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={24}
      height={24}
    >
      <path d="M0 0v12h5V5h7V0zm1 1h10v3H4v7H1z" fill="#373737" />
      <path d="M1 1h10v3H4v7H1z" fill="#373737" fillOpacity="0.39215687" />
      <path d="M16 16V4h-5v7H4v5zm-1-1H5v-3h7V5h3z" fill="#373737" />
      <path d="M15 15H5v-3h7V5h3z" fill="#373737" fillOpacity="0.39215687" />
    </svg>
  );
};
