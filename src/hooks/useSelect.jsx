import styled from "@emotion/styled";


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

    const SelectMoney = ( ) => (

        <>
        
            <Label>{ text }</Label>
            <Select>
                <option value="">Selecciona Una Moneda</option>
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
    
    return [ SelectMoney ];
}