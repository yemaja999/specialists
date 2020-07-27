import {visibilityFilters} from '../actions/visibilityFilters';

export const getVisibleSpecialists = (specialists, filter) => {
    switch (filter) {
        case visibilityFilters.SHOW_ALL:
            return specialists
        case visibilityFilters.SHOW_FAVORITES:
            return specialists.filter(el => el.isFavorite)
            case visibilityFilters.SEARCH:
                return specialists.filter(el => el.name.toLowerCase().includes(filter.searchQuery.toLowerCase()))
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}