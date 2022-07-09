import { useEffect, useState } from 'react'

import './Footer.scss';

export default function Footer() {
   return (
      <div className='footer-site'>
         <div className='footer-site--top' />
         <div className='footer-site--bottom'>
            <p>Powered by Gustavo & Jhonathan</p>
         </div>
      </div>
   );
}