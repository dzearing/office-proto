import css from 'styled-jsx/css';
import {
  SegoeFontFace,
  SegoeFontFamily,
  SegoeFontWeights,
  SegoeFontSizes,
} from './SegoeFont';
import { FabricFontFaces } from './FabricIcons';

export const DefaultBodyStyles = css.global`
  ${SegoeFontFace}
  ${FabricFontFaces}

  body {
    margin: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 16px;
    font-family: ${SegoeFontFamily};
    font-weight: ${SegoeFontWeights.regular};
    font-size: ${SegoeFontSizes.regular};
  }

  button {
    font-family: ${SegoeFontFamily};
    font-weight: ${SegoeFontWeights.semibold};
    font-size: ${SegoeFontSizes.regular};
  }

  * {
    box-sizing: border-box;
  }
`;
