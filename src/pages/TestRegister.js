import React from 'react';
import { useState, useEffect } from 'react';
// import { FormRow } from '../components';
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  };


function TestRegister() {

    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        console.log(e.target);
      };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };


    return (

      <Wrapper >
              <div className='container page'>
      <form className='form' onSubmit={onSubmit}>
      <h3>{values.isMember ? 'Login' : 'Register'}</h3>
      <div  clasname='form-row'>
        <lable htmlFor='email' className='form-label'>
          Email
        </lable>
        <input
          type='text'
          name='name'
          value={values.name}
          OnChange={handleChange}
          className='form-input'
          />
      </div>
      <div  clasname='form-row'>
        <lable htmlFor='password' className='form-label'>
          Password
        </lable>
        <input
          type='text'
          name='name'
          value={values.name}
          OnChange={handleChange}
          className='form-input'
          />
      </div>
      <button type='submit' className='btn btn-danger'>
        submit
      </button>
 
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' className='member-btn'>

          </button>
        </p>
    </form>
    </div>
      </Wrapper>


    );
}

const Wrapper3 = styled.section`
  position: absolute;
  min-height: 60vh;
  display: grid;
  place-items: center;
  top: 60px;
  align-items: center;
  justify-content: right;
  width: 100%;
  top: 80px;
  .img-container {
    display: none;
  }
 

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
    top: 200;

  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`
export default TestRegister;


