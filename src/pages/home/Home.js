import React from 'react';
import styled from 'styled-components';
import Directory from '../../components/directory/Directory';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Directory />
    </HomeContainer>
  );
};

export default Home;
