import React from 'react'
import styled from 'styled-components';
import theme from './theme';

export default function List({title, children}) {
  return (
    <ListStyled className='flex flex-col lg:gap-3 lg:max-w-[350px] w-fit mt-1'>
          <h3 className='text-white text-lg font-semibold'>{title}</h3>
          <ul className='flex flex-col lg:gap-2'>
            {children}
          </ul>
    </ListStyled>
  )
}

const ListStyled = styled.div`

      li{
            color: ${theme.colors.secondary};
            & button:hover{
              color:${theme.colors.primary};
              cursor: pointer;
            }
      }
  
`;