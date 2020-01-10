import * as React from 'react';

const IconContext = React.createContext({ icons: {} });

export const IconProvider = ({ icons, children }) => (
  <IconContext.Provider value={icons}>{children}</IconContext.Provider>
);

interface IconProps extends React.AllHTMLAttributes<{}> {
  name: string;
}

const emptyRenderer = props => <span {...props} />;

export const Icon = ({ name, ...rest }: IconProps) => {
  const icons = React.useContext(IconContext);
  const iconFunction = icons[name] || emptyRenderer;

  return iconFunction(rest);
};
