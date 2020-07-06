import {createGlobalStyle} from 'styled-components';

const url = `assets/fonts/`;

const OpenSans = createGlobalStyle`
    @font-face {
        font-family: 'OpenSans';
        src: url('${url}OpenSans-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'OpenSans';
        src: url('${url}OpenSans-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
    }
`;

export default OpenSans;
