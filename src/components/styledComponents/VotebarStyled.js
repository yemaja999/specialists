import styled from 'styled-components';
import {subtextColor} from '../../util/variables/globalVariables';

export const VotebarStyled = styled.div `
    align-items: center;
    display: flex;
    height: 90px;
    justify-content: space-between;
    padding: 0 25px;

    .stars {
        cursor: pointer;
        direction: rtl;
        unicode-bidi: bidi-override;
    }

    .stars > span {
        background: url('assets/img/star-gray.png') 0 0 no-repeat;
        display: inline-block;
        height: 29px;
        padding-right: 8px;
        position: relative;
        width: 37px;
    }

    .stars > span:hover:before,
    .stars > span:hover ~ span:before,
    .stars .isActive:before {
        background: url('assets/img/star-blue.png') 0 0 no-repeat;
        content: '';
        height: 29px;
        position: absolute;
        left: 0;
        top: 0;
        width: 29px;
    }

    .rank {
        font-size: 1.875rem;
        font-weight: 600;

        > span {
            color: ${subtextColor};
            display: block;
            font-size: 0.75rem;
            font-weight: 400;
        }
    }
`;
