import styled from 'styled-components';
import {inactiveIconColor, mainColor, hoverColor} from '../../../util/variables/globalVariables';

export const MenuBtn = styled.div `
    color: ${inactiveIconColor};
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    line-height: 1px;
    padding: 5px 10px;
    position: absolute;
    left: 10px;
    top: 8px;

    &:hover {
        background-color: ${hoverColor};
        color: ${mainColor};
    }
`;
