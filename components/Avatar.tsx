import * as React from 'react';

export const Avatar = ({
  children,
  initials,
  ...rest
}: React.PropsWithChildren<{
  initials: string;
}>) => (
  <span>
    {initials}
    <style jsx>{`
      span {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        font-size: 12px;
        background: red;
        border-radius: 5000px;
        flex-shrink: 0;
      }

      span:after {
        position: absolute;
        content: '';
        background-size: cover;
      }
    `}</style>
  </span>
);

export default Avatar;
