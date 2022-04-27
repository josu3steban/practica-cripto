import styled from "@emotion/styled";
import { listMoney } from "../data/listMoney";
import { useSelectMoney } from "../hooks/useSelect";

const ButtonContainer = styled.div`
    margin: 3rem 0 0 0;
    text-align: center;
`;

const InputSubmit = styled.input`
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    color: #000;
    background-color: #f1faee;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    width: 70%;
   
   &:hover {
    background-color: #47A8BD;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
    
   }
   
   &:active {
    transform: translateY(-1px);
    width: 100%;
   }
`;

export const FormCripto = () => {

    const [ SelectMoney ] = useSelectMoney('Elíge la Moneda Prro', listMoney);

    const [ SelectCrypto ] = useSelectMoney('Elíge la Criptomoneda Prro', listMoney);

    const hanldeSubmit = (e) => {
        e.preventDefault();
    }

    return( 

        <form onSubmit={ hanldeSubmit }>

            <SelectMoney />

            <SelectCrypto />

            <ButtonContainer>
                <InputSubmit type="submit" value="Consultar" />
            </ButtonContainer>

            
        </form>
    );
    
}