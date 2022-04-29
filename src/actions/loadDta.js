import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { types } from "../types/types"


export const startLoadData = () => {
    return async ( dispatch ) => {

        try {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const response = await fetch( url );
            const data = await response.json();

            if( response.ok ) {

                const dataName = data.Data.map( ( item ) => {

                    return {
                        id: item.CoinInfo.Name,
                        name: item.CoinInfo.FullName
                    }
                })

                // console.log(dataName);

                dispatch( loadData( dataName ) );
            }

        } catch ( error ) {

            // console.log( error );

            Swal.fire({
                icon: 'error',
                title: 'Ups!',
                text: 'Ocurrió un error al conectarse a la api!',
            })
        }
        

    }
}

export const loadData = ( data ) => {

    return {
        type: types.loadData,
        payload: data
    }
}