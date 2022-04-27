import styled from '@emotion/styled';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { startLoadData } from './actions/loadDta';
import Logo from './assets/img/imagen-criptos.png';
import { FormCripto } from './components/FormCripto';

const Container = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 50px auto 0 auto;
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
`;

const Heading = styled.h1`
  color: #f1faee;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
`

const App = () => {

  const dispatch = useDispatch();
  
  // useEffect( () => {
  //   dispatch( startLoadData() );
  // }, []);

  return (
    <Container>

      <Image src={Logo} alt="Logo"/>

      <div className="">
        <Heading>Consulta las Cripto Broer</Heading>

        <FormCripto />
      </div> 

    </Container>
  )
}

export default App