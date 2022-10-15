import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Hero from '../Hero';
import Navbardiv from '../components/Navbardiv';
// import SmallSidebar from '../components/SmallSidebar'
import NavLinks from '../components/NavLinks'
import SmallSidebar from '../components/SmallSidebar'
import { FaHome } from 'react-icons/fa';

const Dashboard  = () => {
    return (
     
      <Wrapper>

<SmallSidebar /> 
< FaHome  />
    
</Wrapper>
  );
};

const Wrapper = styled.section`
position: absolute;
min-height: 60vh;
place-items: left;
top: 80px;
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`

export default Dashboard