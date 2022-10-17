import { Button } from 'bootstrap';
import React from 'react';
import {AiOutlineUser} from 'react-icons/ai'
import { FaWpforms } from 'react-icons/fa';
import {BsFillBarChartFill} from 'react-icons/bs'
import { ImProfile } from 'react-icons/im';

const links = [


  { id: 1, text: 'stats', path: '/', icon: <BsFillBarChartFill /> },
  { id: 2, text: 'all jobs', path: 'all-jobs', icon: <FaWpforms /> },
  { id: 3, text: 'add job', path: 'add-job', icon: <ImProfile /> },
  { id: 4, text: 'profile', path: 'profile', icon: <AiOutlineUser /> },
  
];


export default links;
