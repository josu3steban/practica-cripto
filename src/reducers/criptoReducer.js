import { types } from "../types/types";

const initialState = {
    currency: '',
    crypto: '',
    queryDta: {},
    state: null
}

export const criptoQueryReducer = (state = initialState, action) => {

    switch( action.type ) {

        case types.cryptoSetDataForm:
            return {
                ...state,
                currency: action.payload.currency,
                crypto: action.payload.crypto
            }

        case types.cryptoSetData:
            return {
                ...state,
                queryDta: action.payload
            }

        default:
            return state;
    }

}