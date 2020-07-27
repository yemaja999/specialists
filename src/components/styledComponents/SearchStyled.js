import styled from 'styled-components';
import {SearchIcon} from './icons/SearchIcon';
import {subtextColor, textColor, mainColor} from '../../util/variables/globalVariables';

export const SearchStyled = styled.div `
    background-color: ${props => props.isActive ? '#fff' : 'transparent'};
    border-radius: 0 3px 3px 0;
    box-shadow: 0px 3px 16px 0 ${props => props.isActive ? 'rgba(216, 220, 237, 0.52)' : 'transparent'};
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: flex-end;
    text-align: right;
    transition: all 0.3s ease;
    width: ${props => props.isActive ? '318px' : '142px'};
    max-width: 30%;

    input {
        background-color: transparent;
        border: 0;
        caret-color: ${mainColor};
        color: ${textColor};
        cursor: pointer;
        font-size: 0.875rem;
        height: 100%;
        outline: none;
        overflow: hidden;
        padding: 0;
        text-overflow: ellipsis;

        &::placeholder {
            color: ${subtextColor};
        }
    }

    ${SearchIcon} {
        cursor: pointer;
        margin: 0 14px 0 18px;
        min-width: 20px;
    }

    @media screen and (max-width: 440px) {
        margin-top: 1rem;
        max-width: 100%;
    }

    input {
        width: 100%;
    }
`;