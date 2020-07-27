const initialState = {
    allSpecialists: {}
};

export const ApplicationReducer = (state = initialState, action) => {
    let specialists = state.allSpecialists;

    switch (action.type) {
        case 'addAllSpecialists':
            return {
                ...state,
                allSpecialists: action.allSpecialists.allSpecialists,
            }
        case 'toggleIsFavorite':
            specialists = specialists.map(specialist =>
                specialist.id === action.id
                    ? { ...specialist, isFavorite: !specialist.isFavorite }
                    : specialist
            )
            return {
                ...state,
                allSpecialists: specialists,
            }
        case 'setRating':
            specialists = specialists.map(specialist =>
                specialist.id === action.id
                    ? { ...specialist, userRating: action.rating, rank: action.rank }
                    : specialist
            )
            return {
                ...state,
                allSpecialists: specialists,
            }
        case 'increaseAllVotes':
            specialists = specialists.map(specialist =>
                specialist.id === action.id
                    ? { ...specialist, votes: action.allVotes }
                    : specialist
            )
            return {
                ...state,
                allSpecialists: specialists,
            }
        default:
            return state
    }
}
