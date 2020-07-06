import styled from 'styled-components';

export const Star = styled.span `
    background: url('assets/img/star-gray.png') 0 0 no-repeat;
    display: inline-block;
    height: 29px;
    padding-right: 8px;
    position: relative;
    width: 37px;

    &:hover:before,
    &:hover ~ span:before {
        background: url('assets/img/star-blue.png') 0 0 no-repeat;
        content: '';
        height: 29px;
        position: absolute;
        left: 0;
        top: 0;
        width: 29px;
    }

    ${props => props.isActive && `
        &:before {
            background: url('assets/img/star-blue.png') 0 0 no-repeat;
            content: '';
            height: 29px;
            position: absolute;
            left: 0;
            top: 0;
            width: 29px;
        }
    `}
`;
