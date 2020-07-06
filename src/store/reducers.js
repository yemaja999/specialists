import {ApplicationReducer} from '../reducers/ApplicationReducer';
import {combineReducers} from 'redux';
import {VisibilityFilterReducer} from '../reducers/VisibilityFiltersReducer';

export const createRootReducer = () => combineReducers({
    application: ApplicationReducer,
    visibilityFilter: VisibilityFilterReducer,
});
