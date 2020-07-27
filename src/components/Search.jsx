import React, {useState, useRef} from 'react';
import {SearchStyled} from './styledComponents/SearchStyled';
import {SearchIcon} from './styledComponents/icons/SearchIcon';
import {setVisibilityFilterAction} from '../actions/setVisibilityFilterAction';
import {visibilityFilters} from '../actions/visibilityFilters';
import {useDispatch} from 'react-redux';

export const Search = () => {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('');
    const searchInput = useRef();
    const dispatch = useDispatch();

    const setActive = () => {
        if (document.activeElement !== searchInput.current) {
            searchInput.current.focus();
        }
        setIsActive(true);
    }

    const setInactive = () => {
        if (!value) {
            setIsActive(false);
        }
    }

    const showSearched = (text) => {
        dispatch(setVisibilityFilterAction(visibilityFilters.SEARCH = { searchQuery: text }));
    }

    const handleChange = (e) => {
        setValue(e.target.value);
        showSearched(e.target.value);
    }

    return (
        <SearchStyled isActive={isActive}>
            <SearchIcon onClick={setActive} />
            <input
                type='text'
                placeholder='Search...'
                onFocus={setActive}
                onBlur={setInactive}
                onChange={handleChange}
                ref={searchInput}
                value={value}
            />
        </SearchStyled>
    );
}
