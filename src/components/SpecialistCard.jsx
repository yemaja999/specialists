import React from 'react';
import {SpecialistCardStyled} from './styledComponents/SpecialistCardStyled';
import {FavoriteIcon} from './styledComponents/icons/FavoriteIcon';
import {MenuBtn} from './styledComponents/common/MenuBtn';
import {MenuIcon} from './styledComponents/icons/MenuIcon';
import {Votebar} from './Votebar';
import {BellButton} from './styledComponents/common/BellButton';
import {CalendarButton} from './styledComponents/common/CalendarButton';
import {MessageButton} from './styledComponents/common/MessageButton';
import {useDispatch} from 'react-redux';
import {toggleIsFavoriteAction} from '../actions/toggleIsFavoriteAction';
import {Tooltip} from './styledComponents/common/Tooltip';
import {Avatar} from './Avatar';

export const SpecialistCard = React.memo(function SpecialistCard({specialist}) {
    const dispatch = useDispatch();

    const toggleIsFavorite = () => {
        dispatch(toggleIsFavoriteAction(specialist.id));
    }

    return (
        <SpecialistCardStyled>
            <MenuBtn>
                <MenuIcon />
            </MenuBtn>
            <FavoriteIcon onClick={toggleIsFavorite}>
                <Tooltip>
                    {!specialist.isFavorite ? 'add to favorites' : 'remove from favorites'}
                </Tooltip>
            </FavoriteIcon>
            <Avatar
                img={specialist.img}
                name={specialist.name}
            />
            <div className='specialist-info'>
                <div className='specialist-name'>{specialist.name}</div>
                <div className='specialist-type'>{specialist.type}</div>
            </div>
            <div className='specialist-actions'>
                <BellButton />
                <CalendarButton />
                <MessageButton />
            </div>
            <Votebar
                originalRank={specialist.originalRank}
                rank={specialist.rank}
                id={specialist.id}
                votes={specialist.votes}
                userRating={specialist.userRating}
            />
            <a className='specialist-link' href='/'>Profile</a>
            <a className='specialist-link' href='/'>Book a visit</a>
        </SpecialistCardStyled>
    );
});
