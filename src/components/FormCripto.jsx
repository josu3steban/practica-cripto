import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { cryptoSetDataForm, startCryptoSetData } from "../actions/crypto";
import { startLoadData } from "../actions/loadDta";
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

    const dispatch = useDispatch();

    const { criptos } = useSelector( state => state.load);

    const [ money, SelectMoney ] = useSelectMoney('Elíge la Moneda Prro', listMoney);

    const [ crypto, SelectCrypto ] = useSelectMoney('Elíge la Criptomoneda Prro', criptos);

    const hanldeSubmit = (e) => {
        e.preventDefault();

        if( money !== '' && crypto !== '' ) {
            
            dispatch( cryptoSetDataForm(money, crypto) );

            dispatch( startCryptoSetData( {money, crypto} ))

        }else {

            dispatch( cryptoSetDataForm("", "") );

            Swal.fire({
                icon: 'error',
                title: 'Ups!',
                text: 'OPCIONES SELECCIONADAS INCORRECTAS',
            })
        }
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