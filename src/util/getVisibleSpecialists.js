import {visibilityFilters} from '../actions/visibilityFilters';

export const getVisibleSpecialists = (specialists, filter) => {
    switch (filter) {
        case visibilityFilters.SHOW_ALL:
            return specialists
        case visibilityFilters.SHOW_FAVORITES:
            return specialists.filter(el => el.isFavorite)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}