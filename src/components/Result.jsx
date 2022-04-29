import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const ResultDiv = styled.div`
    color: #fff;
    margin-top: 3rem;
    text-align: center;
    

    div {
        text-align: left;
    }

    img {
        width: 35%;

    }

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

const TextP = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    
    span {
        font-weight: 600;
    }
`;

const Text = styled.p`
    
`;

export const Result = () => {

    const { queryDta } = useSelector( (state) => state.crypto );

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = queryDta;
    // console.table(queryDta);

    
    return (

        <ResultDiv>
            <img src={`https://www.cryptocompare.com${IMAGEURL}`} alt="IMAGEN" />
            <div className="">
                <TextP>El precio es de: <span>{ PRICE }</span></TextP>
                <Text>El precio más alto del día es de: <span>{ HIGHDAY }</span></Text>
                <Text>El precio más bajo del día es de: <span>{ LOWDAY }</span></Text>
                <Text>La variación de las pultimas 24hr es de: <span>{ CHANGEPCT24HOUR }</span></Text>
                <Text>Última actualización: <span>{ LASTUPDATE }</span></Text>
            </div>
        </ResultDiv>
    );
};