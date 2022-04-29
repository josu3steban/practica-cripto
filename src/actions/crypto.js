import Swal from "sweetalert2";
import { startLoading, finishLoading } from "./ui";
import { types } from "../types/types";

export const cryptoSetDataForm = ( currency, crypto ) => ({

    type: types.cryptoSetDataForm,
    payload: {
        currency,
        crypto
    }

});

export const cryptoSetDataFormReset = ( ) => ({

    type: types.cryptoSetDataFormReset,
});

export const startCryptoSetData = ( data ) => {

    return async( dispatch ) => {

        try {

            dispatch( cryptoSetDta( { data:{}, state:false } ));
            dispatch( startLoading() );
            
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${data.crypto}&tsyms=${data.money}`;

            const response = await fetch( url );
            const result  = await response.json();

            console.log(result);
            const dataObject = {
                data: result.DISPLAY[data.crypto][data.money],
                state: true
            }
            dispatch( cryptoSetDta( dataObject ) );
            dispatch( finishLoading() );

        } catch( error ) {

            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Ocurrió un error en la consulta!',
            });
        }
    }
}

const cryptoSetDta = ( data ) => ({

    type: types.cryptoSetData,
    payload: data
});