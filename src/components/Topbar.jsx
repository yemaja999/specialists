import React from 'react';
import {TopbarStyled} from './styledComponents/TopbarStyled';
import {PrimaryButton} from './styledComponents/common/PrimaryButton';
import {Search} from './Search';
import {visibilityFilters} from '../actions/visibilityFilters';
import {useDispatch, useSelector} from 'react-redux';
import {setVisibilityFilterAction} from '../actions/setVisibilityFilterAction';

export const Topbar = () => {
    const visibilityFilter = useSelector(state => state.visibilityFilter);
    const dispatch = useDispatch();
    

    const showAll = () => {
        dispatch(setVisibilityFilterAction(visibilityFilters.SHOW_ALL));
    }

    const showFavorites = () => {
        dispatch(setVisibilityFilterAction(visibilityFilters.SHOW_FAVORITES));
    }

    return (
        <TopbarStyled>
            <h1>Favorite specialists (4)</h1>
            <div className='topbar-buttons'>
                <PrimaryButton
                    isActive={visibilityFilter === visibilityFilters.SHOW_ALL}
                    onClick={showAll}
                >
                    All favorite
                </PrimaryButton>
                <PrimaryButton
                    isActive={visibilityFilter === visibilityFilters.SHOW_FAVORITES}
                    onClick={showFavorites}>
                    My specialists
                </PrimaryButton>
            </div>
            <Search />
        </TopbarStyled>
    );
}
