import styled from 'styled-components';
import {PrimaryButton} from './common/PrimaryButton';

export const TopbarStyled = styled.div `
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 60px 0 50px;

    h1 {
        display: inline-block;
        font-size: 1.875rem;
        font-weight: 600;
    }

    .topbar-buttons {
        display: inline-block;
        
        ${PrimaryButton} {
            width: 200px;
            max-width: 50%;

            &:first-child {
                border-radius: 3px 0 0 3px;
            }

            &:last-child {
                border-radius: 0 3px 3px 0;
            }
        }
    }

    @media screen and (max-width: 568px) {
        flex-direction: column;
        padding: 30px 0;

        h1 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
    }
`;
