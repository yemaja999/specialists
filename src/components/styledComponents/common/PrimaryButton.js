import styled from 'styled-components';
import {borderColor, mainColor, btnColor, subtextColor, hoverColor} from '../../../util/variables/globalVariables';

export const PrimaryButton = styled.div `
    background-color: ${props => props.isActive ? mainColor : 'transparent'};
    border: 1px solid ${props => props.isActive ? 'transparent' : borderColor};
    box-shadow: 0 10px 20px ${props => props.isActive ? '#ced1ff' : 'transparent'};
    color: ${props => props.isActive ? btnColor : subtextColor};
    cursor: pointer;
    display: inline-block;
    font-size: 0.875rem;
    font-weight: ${props => props.isActive ? 600 : 400};
    height: 50px;
    line-height: 50px;
    transition: all 0.2s ease;
    text-align: center;

    &:hover {
        background-color: ${props => props.isActive ? mainColor : hoverColor};
        color: ${props => props.isActive ? btnColor : mainColor};
    }
`;
