import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { criptoQueryReducer } from "../reducers/criptoReducer";
import { loadDataReducer } from "../reducers/loadDataReducer";
import { uiReducer } from "../reducers/uiReducer";


const reducers = combineReducers({

    crypto: criptoQueryReducer,
    ui:     uiReducer,
    load:   loadDataReducer
});

export const store = configureStore( { reducer: reducers } );
