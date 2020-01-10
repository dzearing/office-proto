import * as React from 'react';
import cx from 'classnames';

export const createSVGIcon = background => ({ size = 16, ...rest }) => {
  return (
    <span
      {...rest}
      className={cx('root', rest.className)}
      style={{
        ...rest.style,
        width: size,
        height: size,
      }}
    >
      <style jsx>
        {`
          .root {
            --mozosx-font-smoothing: grayscale;
            --webkit-font-smoothing: antialiased;
            background: url(${background}) bottom no-repeat;
            display: inline-flex;
            font-style: normal;
            font-weight: normal;
            speak: none;
          }
        `}
      </style>
    </span>
  );
};
