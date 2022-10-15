import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Navbardiv = ({ title, product }) => {
  return (
    <Wrapper1>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper1>
  )
}

const Wrapper1 = styled.section`
  background: var(--primary-700);
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;

  color: var(--clr-white);
  a {
    color: var(---clr-white);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-white);
  }
`

export default Navbardiv
