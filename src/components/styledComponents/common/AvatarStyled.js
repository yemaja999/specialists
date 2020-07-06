import styled from 'styled-components';

export const AvatarStyled = styled.div `
    background-color: ${props => props.bgColor};
    background-image: url(${props => props.img});
    border-radius: 50%;
    color: ${props => props.color};
    font-size: 1.5rem;
    font-weight: 600;
    height: 100px;
    line-height: 100px;
    margin: 50px auto 26px;
    text-align: center;
    width: 100px;
`;
