import cx from 'classnames';

export const createFontIcon = (code, fontFamily?: string) => ({
  size = 16,
  ...rest
}) => {
  return (
    <span
      {...rest}
      className={cx('root', rest.className)}
      style={{
        ...rest.style,
        fontSize: size,
        width: size,
        height: size,
      }}
    >
      {code}
      <style jsx>
        {`
          .root {
            --mozosx-font-smoothing: grayscale;
            --webkit-font-smoothing: antialiased;
            font-family: ${fontFamily};
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
