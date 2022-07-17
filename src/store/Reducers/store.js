import { rootReducers } from "../Reducers/index";
import {createStore} from "redux";

export const store = createStore(rootReducers)

