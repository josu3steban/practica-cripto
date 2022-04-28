import Swal from "sweetalert2";
import { types } from "../types/types";

export const cryptoSetDataForm = ( currency, crypto ) => ({

    type: types.cryptoSetDataForm,
    payload: {
        currency,
        crypto
    }

});

export const startCryptoSetData = ( data ) => {

    return async( dispatch ) => {

        try {
            
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${data.money}&tsyms=${data.crypto}`;

            const response = await fetch( url );
            const result  = await response.json();

            console.log(response);
            dispatch( cryptoSetDta(result.DISPLAY[data.money][data.crypto]) );

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