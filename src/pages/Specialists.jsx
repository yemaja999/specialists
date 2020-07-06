import React from 'react';
import {SpecialistCard} from '../components/SpecialistCard';
import {SpecialistsStyled} from '../components/styledComponents/SpecialistsStyled';
import {useSelector} from 'react-redux';
import {getVisibleSpecialists} from '../util/getVisibleSpecialists';

export const Specialists = () => { 
    const allSpecialists = useSelector(state => state.application.allSpecialists);
    const visibilityFilter = useSelector(state => state.visibilityFilter);
    const list = getVisibleSpecialists(allSpecialists, visibilityFilter);

    return (
        <SpecialistsStyled>
            {!list || list.length <= 0
                ? <div className='no-items'>No specialists found</div>
                : list.map((item, index) => <SpecialistCard specialist={item} index={index} key={index} />)
            }
        </SpecialistsStyled>
    );
}
