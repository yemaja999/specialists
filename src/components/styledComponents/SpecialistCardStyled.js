import styled from 'styled-components';
import {FavoriteIcon} from './icons/FavoriteIcon';
import {subtextColor, mainColor, borderColor2, btnColor} from '../../util/variables/globalVariables';
import {Tooltip} from './common/Tooltip';

export const SpecialistCardStyled = styled.div `
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 3px 13px 0 rgba(231, 234, 247, 0.35);
    display: inline-block;
    margin: 0 0 30px 30px;
    position: relative;
    transition: all 0.2s ease;
    text-align: center;
    width: 324px;
    max-width: 90%;

    &:hover {
        border: 1px solid ${mainColor};
        box-shadow: 0px 3px 16px 0 #d8dced;
        transform: scale(1.05);
        z-index: 1;
    }

    ${FavoriteIcon} {
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 20px;

        &:hover ${Tooltip} {
            display: block;
        }
    }

    .specialist-info {    
        height: 78px;
        padding: 0 10px;
    }

    .specialist-name {
        font-size: 1.25rem;
        font-weight: 600;
        max-height: 54px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .specialist-type {
        color: ${subtextColor};
        font-size: 0.875rem;
    }

    .specialist-actions {
        border-bottom: 1px solid ${borderColor2};
        display: flex;
        justify-content: space-between;

        button {
            margin-bottom: -1px;
        }
    }

    .specialist-link {
        border-top: 1px solid ${borderColor2};
        color: ${subtextColor};
        display: inline-block;
        font-size: 0.75rem;
        height: 60px;
        line-height: 60px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        width: 50%;

        &:hover {
            background-color: ${mainColor};
            color: ${btnColor};
            font-weight: 600;
        }

        & + & {
            border-left: 1px solid ${borderColor2};
        }
    }
`;
