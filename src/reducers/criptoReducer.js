import { types } from "../types/types";

const initialState = {
    currency: '',
    crypto: '',
    queryDta: {},
    state: false
}

export const criptoQueryReducer = (state = initialState, action) => {

    switch( action.type ) {

        case types.cryptoSetDataForm:
            return {
                ...state,
                currency: action.payload.currency,
                crypto: action.payload.crypto
            }

        case types.cryptoSetDataFormReset:
            return {
                ...state,
                currency: '',
                crypto: '',
                queryDta: {},
                state: false
            }

        case types.cryptoSetData:
            return {
                ...state,
                queryDta: action.payload.data,
                state: action.payload.state
            }

        default:
            return state;
    }

}