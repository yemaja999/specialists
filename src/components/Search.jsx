import React, {useState, useRef} from 'react';
import {SearchStyled} from './styledComponents/SearchStyled';
import {SearchIcon} from './styledComponents/icons/SearchIcon';

export const Search = () => {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('');
    const searchInput = useRef();

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

    const handleChange = (e) => {
        setValue(e.target.value);
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
