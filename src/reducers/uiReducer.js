import { startTransition } from "react";
import { types } from "../types/types";


const initialState = {
    loading: true,
    typeError: null,
    msgError: null
}

export const uiReducer = ( state = initialState, action ) => {

    switch( action.type ) {

        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

        case types.uiError:
            return {
                ...state,
                typeError: action.payload.typeError,
                msgError: action.payload.msgError
            }

        case types.uiClearError:
            return {
                ...state,
                typeError: null,
                msgError: null
            }

        default:
            return state;
    }

}