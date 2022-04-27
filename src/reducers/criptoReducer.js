import { types } from "../types/types";

const initialState = {
    criptos: {},
    state: null
}

export const criptoQueryReducer = (state = initialState, action) => {

    switch( action.type ) {

        case types.cryptoDataForm:
            return {
                ...state,
                criptos: action.payload
            }

        default:
            return state;
    }

}