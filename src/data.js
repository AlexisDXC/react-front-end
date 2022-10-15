import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'upload',
    links: [
      { label: 'Hexagon', icon: <FaCreditCard />, url: '/upload' },
      { label: 'ESRI', icon: <FaCreditCard />, url: '/' },
      { label: 'AssetWise', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'dashboard',
    links: [
      { label: 'Hexagon', icon: <FaBook />, url: '/dashboard' },
      { label: 'ESRI', icon: <FaBook />, url: '/products' },
      { label: 'AssetWise', icon: <FaBook />, url: '/products' },
      { label: 'Errors', icon: <FaBook />, url: '/products' },
      { label: 'History', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;
