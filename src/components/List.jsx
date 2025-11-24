import React from 'react'
import styled from 'styled-components';
import theme from './theme';

export default function List({title, children}) {
  return (
    <ListStyled className='flex flex-col gap-3 max-w-[350px]'>
          <h3 className='text-white text-lg font-semibold'>{title}</h3>
          <ul className='flex flex-col gap-2 '>
            {children}
          </ul>
    </ListStyled>
  )
}

const ListStyled = styled.div`

      li{
            color: ${theme.colors.secondary};
      }
  
`;