import styled from "@emotion/styled";
import { useState } from "react";


const Label = styled.label`
    display: block;
    color: #69A4FB;
    font-size: 1.8rem;
    font-weight: 600;
    margin: 3rem 0 1rem 0;
`;

const Select = styled.select`
    // background-color: #47A8BD;
    padding: 0.4rem 0.8rem;
    font-size: 1.2rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    color: #000;
    border: none;
    border-radius: 10px;
    width: 100%;

`;

export const useSelectMoney = ( text, list ) => {

    const [ state, setState ] = useState('');
    
    const SelectMoney = ( ) => (

        <>
        
            <Label>{ text }</Label>
            <Select
                value={ state }
                onChange={ e => setState( e.target.value ) }
            >
                <option value="">-- Selecciona --</option>
                {
                    list.map( ( money ) => (
                        <option
                            key={ money.id }
                            value={ money.id }
                        >
                            { money.name }
                        </option>
                    ))
                }
            </Select>
        </>
    )
    
    return [ state, SelectMoney ];
}