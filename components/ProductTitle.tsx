import * as React from 'react';

export const ProductTitle = ({ children, ...rest }) => (
  <span {...rest}>
    {children}
    <style jsx>{`
      span {
        margin-left: 8px;
        font-size: 16px;
        font-weight: 600;
        color: #d53a00;
      }
    `}</style>
  </span>
);
