import { createGlobalStyle } from 'styled-components';
import { COLORS, WEIGHTS } from './constants';

const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'Raleway';
    font-style: normal;
    src: url(../fonts/Raleway.woff2);
    font-display: fallback;
    }
 
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Raleway';
    line-height: 1.4;
    }

    html,
    body {
    height: 100%;
    width: 100%;
    }

    :root {
        --color-white: ${COLORS.white};
        --color-gray-100: ${COLORS.gray['100']};
        --color-gray-300: ${COLORS.gray['300']};
        --color-gray-500: ${COLORS.gray['500']};
        --color-gray-700: ${COLORS.gray['700']};
        --color-gray-900: ${COLORS.gray['900']};
        --color-primary: ${COLORS.primary};
        --color-secondary: ${COLORS.secondary};

        --weight-normal: ${WEIGHTS.normal};
        --weight-medium: ${WEIGHTS.medium};
        --weight-bold: ${WEIGHTS.bold};
    }
`;

export default GlobalStyles;
