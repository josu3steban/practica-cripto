import { types } from "../types/types";

const initialState = {
    criptos: [],
    state: null
}

export const loadDataReducer = ( state = initialState, action ) => {

    switch( action.type ) {

        case types.loadData:
            return {
                ...state,
                criptos: action.payload
            }

        default:
            return state;
    }
    
}