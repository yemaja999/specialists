import styled from 'styled-components';
import {mainColor} from '../../../util/variables/globalVariables';

export const MessageButton = styled.button `
    background: url('assets/img/message.png') 50% 50% no-repeat;
    border: 0;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    height: 40px;
    text-align: center;
    width: 30%;

    &:hover {
        background: url('assets/img/message-hover.png') 50% 50% no-repeat;
        border-color: ${mainColor};
    }
`;
