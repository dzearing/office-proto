import * as React from 'react';
import cx from 'classnames';
import { getFabricIconFont } from './getFabricIconFont';
import { getFabricIconFont0 } from './getFabricIconFont0';
import { getFabricIconFont17 } from './getFabricIconFont17';
import { createFontIcon } from './createFontIcon';

const DEFAULT_BASE_URL =
  'https://spoprod-a.akamaihd.net/files/fabric/assets/icons/';

const FabricIconFonts = [
  getFabricIconFont(DEFAULT_BASE_URL),
  getFabricIconFont0(DEFAULT_BASE_URL),
  getFabricIconFont17(DEFAULT_BASE_URL),
];

export let FabricFontFaces = '';
export const FabricIcons: {
  [key: string]: React.SFC<{ size?: number }>;
} = {} as any;

// Create FabricIcons and font faces
FabricIconFonts.forEach(font => {
  FabricFontFaces += `
  @font-face {
    font-family: ${font.fontFace.fontFamily};
    src: ${font.fontFace.src};
  }
`;

  Object.keys(font.icons).forEach(iconName => {
    FabricIcons[iconName] = createFontIcon(
      font.icons[iconName],
      font.fontFace.fontFamily
    );
  });
});
