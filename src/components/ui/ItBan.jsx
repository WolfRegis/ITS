import React from 'react'
import {FiMail, FiPhoneCall} from "react-icons/fi";
import styled from 'styled-components';
import theme from '../theme';
import IconCompil from './IconCompil';


export default function ItBan() {
  return (
    <ItBanStyled className='flex flex-row justify-between items-center h-10 lg:px-30 px-8'>
      <IconCompil />      
          <span className='lg:text-sm text-xs text-white flex lg:flex-row flex-col gap-1 lg:gap-3'>        
            <a href="mailto:support@its-groupe.net" className='text-[9px] text-white flex flex-row items-center gap-2 lg:gap-1'> <FiMail />support@its-groupe.net</a>
            <a href="tel:+242 06 829 39 63" className='text-[9px] text-white flex flex-row items-center gap-2 lg:gap-1'><FiPhoneCall />+242 06 829 39 63</a>
          </span>
    </ItBanStyled>
  ) 
}

const ItBanStyled = styled.div`
      background-color: ${theme.colors.mainColor};
`;


