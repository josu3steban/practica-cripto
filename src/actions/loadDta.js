import { types } from "../types/types"

const temp = [
    {
        name: 'Josue',
        lastname: 'Tomala',
        age: '26',
    },
    {
        name: 'Sara',
        lastname: 'Esparza',
        age: '46',
    },
    {
        name: 'Caro',
        lastname: 'Tomala',
        age: '29',
    }
]

export const startLoadData = () => {
    return ( dispatch ) => {

        setTimeout( () => {

            dispatch( loadData( temp ) );

        }, 5000)
    }
}

export const loadData = ( data ) => {

    return {
        type: types.loadData,
        payload: data
    }
}