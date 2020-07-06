import styled from 'styled-components';
import {tooltipBg, tooltipColor} from '../../../util/variables/globalVariables';

export const Tooltip = styled.div `
    background-color: ${tooltipBg};
    border-radius: 3px;
    color: ${tooltipColor};
    display: none;
    font-size: 0.6875rem;
    padding: 10px 12px;
    position: absolute;
    left: 150%;
    top: -7px;
    text-align: left;
    width: 92px;
    z-index: 1;

    &:before {
        border: 6px solid transparent;
        border-right: 8px solid ${tooltipBg};
        content: '';
        height: 0;
        position: absolute;
        top: 10px;
        left: -13px;
        width: 0;
    }
`;
