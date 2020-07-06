import {createStore} from "redux";
import {createRootReducer} from "./reducers";

const rootReducer = createRootReducer();

export const store = createStore(rootReducer);
