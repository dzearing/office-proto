import * as React from 'react';

export const Button = ({ children, ...rest }: React.PropsWithChildren<{}>) => (
  <button {...rest}>
    {children}
    <style jsx>{`
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 48px;
        background-color: transparent;
        color: black;
        border: none;
      }

      button:hover {
        background: red;
      }
    `}</style>{' '}
  </button>
);
