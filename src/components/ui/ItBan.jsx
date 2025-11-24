import React from 'react'
import {FiMail, FiPhoneCall} from "react-icons/fi";
import styled from 'styled-components';
import theme from '../theme';
import IconCompil from './IconCompil';


export default function ItBan() {
  return (
    <ItBanStyled className='flex flex-row justify-between items-center h-10 px-30'>
      <IconCompil />      
            <span className='text-sm text-white flex flex-row gap-2'>        
            <a href="mailto:support@its-groupe.net" className='text-xs text-white flex flex-row items-center gap-2'> <FiMail />support@its-groupe.net</a> |
            <a href="tel:+242 06 829 39 63" className='text-xs text-white flex flex-row items-center gap-2'><FiPhoneCall />+242 06 829 39 63</a>
      </span>
    </ItBanStyled>
  )
}

const ItBanStyled = styled.div`
      background-color: ${theme.colors.mainColor};

  
`;


