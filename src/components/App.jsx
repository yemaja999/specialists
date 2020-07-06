import React from 'react';
import {AppStyled} from './styledComponents/AppStyled';
import {Topbar} from './Topbar';
import {Specialists} from '../pages/Specialists';
import {useDispatch} from 'react-redux';
import {addAllSpecialistsAction} from '../actions/addAllSpecialistsAction';
import SpecialistsList from '../mocks/specialists';

export const App = () => {
    const dispatch = useDispatch();
    dispatch(addAllSpecialistsAction({allSpecialists: SpecialistsList}));

    return (
        <AppStyled>
            <Topbar />
            <Specialists />
        </AppStyled>
    );
}
