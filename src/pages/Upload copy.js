import FormRow  from '../components/FormRow';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Hero from '../Hero';
import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';

import { FcFile } from "react-icons/fc";
import Navbardiv from '../components/Navbardiv';
import * as XLSX from 'xlsx';




const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  };

//  const Upload  = () => {
  function Upload() {   
        
        const [values, setValues] = useState(initialState);

        const handleChange = (e) => {
            console.log(e.target);
          };

        const [items, setItems] = useState([]);  
    
        const onSubmit = (e) => {
            e.preventDefault();
            console.log(e.target);

        };  
        
        
        const readExcel = (file) => {
          const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
      
            fileReader.onload = (e) => {
              const bufferArray = e.target.result;
      
              const wb = XLSX.read(bufferArray, { type: "buffer" });
      
              const wsname = wb.SheetNames[0];
      
              const ws = wb.Sheets[wsname];
      
              const data = XLSX.utils.sheet_to_json(ws);
      
              resolve(data);
            };
      
            fileReader.onerror = (error) => {
              reject(error);
            };
          });
      
          promise.then((d) => {
            setItems(d);
          });
        };

    return (
      <Wrapper3>
  
             


 
<div class="container">
  <div class="container">
    	<div class="card">

    		<div class="card-body">
        <form className='form3' onSubmit={onSubmit}>
        <table id="myTable" class="display wrap" >
          <tr> 
              <td className="th" ><input type="file" id="excel_file" /> </td>
              <td className="th" ><input type='radio' name='group' ng-model='mValue' value='first' /> Infor</td> 
              <td className="th" > <input className="th" type='radio' name='group' ng-model='mValue' value='second'/> ESRI </td> 
              <td className="th" ><input className="th" type='radio' name='group' ng-model='mValue' value='second'/> AssetWise</td> 
          </tr> 
         </table>
        </form>      
    		</div>
     
    	</div>
        <div id="excel_data" class="mt-5"></div>
      </div>
      </div>





<br />
<h2>UPLOADED FILE :</h2>

<br />

<div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

<table class="table container">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Description</th>
            <th scope="col">UM </th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d.Item}>
              <th>{d.Item}</th>
              <td>{d.Description}</td>
              <td>{d.UM}</td>
            </tr>
          ))}
        </tbody>
      </table>
       </div>

<br />



<form className='form2'  >
<table id="myTable" class="display wrap" >
        <thead>  
          <tr>  
            <th className="th">  Asset*</th>  
            <th className="th"> Commission Date* </th>  
            <th className="th">Department*     </th>  
            <th className="th"> Description* </th>
            <th className="th">  Organization*    </th>
            <th className="th">   State*   </th>
            <th className="th">Status*</th>
            <th className="th">  Type*            </th>  

            <th className="th">  Asset*</th>  
            <th className="th"> Commission Date* </th>  
            <th className="th">Department*     </th>  
            <th className="th"> Description* </th>
            <th className="th">  Organization*    </th>
            <th className="th">   State*   </th>
            <th className="th">Status*</th>
            <th className="th">  Type*            </th>  

          </tr>  
          <tr>  
            <th className="th">NPI</th>  
            <th className="th">PROVIDER</th>  
            <th className="th">PROG.YEAR</th>  
            <th className="th">PY</th>
            <th className="th">I/G/H</th>
      </tr>  
        </thead>  
        <tbody>  
 		
		</tbody>
		</table>
  </ form>

<br />
<br />


<form className='form2'  >
<table id="myTable" class="display wrap" >
        <thead>  
          <tr>  
            <th className="th">  Asset*</th>  
            <th className="th"> Commission Date* </th>  
            <th className="th">Department*     </th>  
            <th className="th"> Description* </th>
            <th className="th">  Organization*    </th>
            <th className="th">   State*   </th>
            <th className="th">Status*</th>
            <th className="th">  Type*            </th>  

            <th className="th">  Asset*</th>  
            <th className="th"> Commission Date* </th>  
            <th className="th">Department*     </th>  
            <th className="th"> Description* </th>
            <th className="th">  Organization*    </th>
            <th className="th">   State*   </th>
            <th className="th">Status*</th>
            <th className="th">  Type*            </th>  

          </tr>  
          <tr>  
            <th className="th">NPI</th>  
            <th className="th">PROVIDER</th>  
            <th className="th">PROG.YEAR</th>  
            <th className="th">PY</th>
            <th className="th">I/G/H</th>
      </tr>  
        </thead>  
        <tbody>  
 		
		</tbody>
		</table>
  </ form>

  <br />


<form className='form2'  >
<table id="myTable" class="display wrap" >
        <thead>  
          <tr>  
            <th className="th">  Asset*</th>  
            <th className="th"> Commission Date* </th>  
            <th className="th">Department*     </th>  
            <th className="th"> Description* </th>
            <th className="th">  Organization*    </th>
            <th className="th">   State*   </th>
            <th className="th">Status*</th>
            <th className="th">  Type*            </th>  

            <th className="th">  Asset*</th>  
            <th className="th"> Commission Date* </th>  
            <th className="th">Department*     </th>  
            <th className="th"> Description* </th>
            <th className="th">  Organization*    </th>
            <th className="th">   State*   </th>
            <th className="th">Status*</th>
            <th className="th">  Type*            </th>  

          </tr>  
          <tr>  
            <th className="th">NPI</th>  
            <th className="th">PROVIDER</th>  
            <th className="th">PROG.YEAR</th>  
            <th className="th">PY</th>
            <th className="th">I/G/H</th>
      </tr>  
        </thead>  
        <tbody>  
 		
		</tbody>
		</table>
  </ form>










      </Wrapper3>
      );
  }

  const Wrapper3 = styled.section`
  position: absolute;
  min-height: 60vh;
  display: grid;
  place-items: left;
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

export default Upload