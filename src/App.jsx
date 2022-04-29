import styled from '@emotion/styled';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadData } from './actions/loadDta';
import Logo from './assets/img/imagen-criptos.png';
import { FormCripto } from './components/FormCripto';
import { Result } from './components/Result';
import { Spinner } from './components/spinner/Spinner';

const Container = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 50px auto 0 auto;
  text-align: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    // column-gap: 1rem;
  }
`;

const Image = styled.img`
  max-width: 400%;
  margin: 20px 0;
  width: 80%;
  diplay: block;
  text-align: center;
`;

const Heading = styled.h1`
  color: #f1faee;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
`

const App = () => {

  const dispatch = useDispatch();

  const { state } = useSelector( (state) => state.crypto );
  const { loading } = useSelector( (state) => state.ui );

  // useEffect( () => {

  //   if(Object.keys( queryDta ).length > 0 ) {

  //     console.log('OBJECT KEYS!!!!!!!!!!!!!!!!!!', Object.keys( queryDta ).length);
  //   }
  // }, [queryDta]);
  
  useEffect( () => {
    dispatch( startLoadData() );
  }, []);

  return (
    <Container>

      <Image src={Logo} alt="Logo"/>

      <div className="">
        <Heading>Consulta las Cripto Broer</Heading>

        <FormCripto />

        { loading && <Spinner />}

        {
          state && <Result />
        }

      </div> 

    </Container>
  )
}

export default App