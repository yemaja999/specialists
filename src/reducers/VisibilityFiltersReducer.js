import { visibilityFilters } from '../actions/visibilityFilters'

export const VisibilityFilterReducer = (state = visibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'setVisibilityFilter':
            return action.filter
    default:
        return state
    }
}
