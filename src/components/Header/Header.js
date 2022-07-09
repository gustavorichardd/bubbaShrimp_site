import { useEffect, useRef, useState } from 'react'

import logoBubba from '../../assets/logo.png'
import './Header.scss';
// import { useOutsideClick } from '../../utils/useOutsideClick';

export default function Header() {

  // const dropDownRef = useRef(null);


  return (
    <div className='header-site'>
      <div className='header-site--left'>
        <img src={logoBubba} alt="Bubba Shrimp Logo" className='header-site--left--image' />
      </div>


      <div className='header-site--right'>
        <label>
          Carrinho
        </label>

      </div>




    </div>
  );

}