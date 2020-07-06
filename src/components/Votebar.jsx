import React from 'react';
import {VotebarStyled} from './styledComponents/VotebarStyled';
import {calculateVoteAverage} from '../util/calculateVoteAverage';
import {Star} from './styledComponents/Star';
import {useDispatch} from 'react-redux';
import {setRatingAction} from '../actions/setRatingAction';
import {increaseAllVotesAction} from '../actions/increaseAllVotesAction';

export const Votebar = React.memo(function Votebar({originalRank, rank, votes, userRating, id}) {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        const vote = parseInt(e.target.dataset.vote, 10);
        const newRank = calculateVoteAverage(vote, votes, originalRank);
        if (userRating === 0) {
            dispatch(increaseAllVotesAction(id, votes + 1));
        }
        dispatch(setRatingAction(id, vote, Math.round(newRank * 10)/10));
    }

    const isActive = (nr) => {
        return userRating && userRating >= nr;
    }

    return (
        <VotebarStyled>
            <div className='stars'>
                <Star onClick={handleClick} isActive={isActive(5)} data-vote='5' />
                <Star onClick={handleClick} isActive={isActive(4)} data-vote='4' />
                <Star onClick={handleClick} isActive={isActive(3)} data-vote='3' />
                <Star onClick={handleClick} isActive={isActive(2)} data-vote='2' />
                <Star onClick={handleClick} isActive={isActive(1)} data-vote='1' />
            </div>
            <div className='rank'>
                {rank}
                <span>({votes})</span>
            </div>
        </VotebarStyled>
    );
})
