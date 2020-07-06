import {createGlobalStyle} from 'styled-components';
import {bgColor, textColor} from '../util/variables/globalVariables';

const GlobalDefaults = createGlobalStyle`
    html > body {
        position: relative;
        color: ${textColor};
        background-color: ${bgColor};
        font-family: 'OpenSans', -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        user-select: none;
    }

    html {
        font-size: 16px;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    h1, h2, h3 {
        margin: 0;
    }

    p {
        font-size: 1rem;
    }

    li {
        list-style: none;
    }

    button {
        outline: none;
    }
`;

export default GlobalDefaults;
