import { combineReducers } from "redux";
import { itemsReducer } from "./items/items-reducer";
import { filterReducer } from "./filter/filter-reducer";

export const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
});