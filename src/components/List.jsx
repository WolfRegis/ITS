import React from 'react'
import styled from 'styled-components';
import theme from './theme';

export default function List({title, children}) {
  return (
    <ListStyled className='flex flex-col gap-3'>
          <h3 className='text-white text-lg font-semibold'>{title}</h3>
          <ul className='flex flex-col gap-1 '>
            {children}
          </ul>
    </ListStyled>
  )
}

const ListStyled = styled.div`

      max-width: 350px;

      li{
            color: ${theme.colors.secondary};
            margin-bottom: 4px;

     
            & button:hover{
                  color: ${theme.colors.primary};
                  cursor: pointer;

            }

            button{       
                  text-transform: capitalize;

            }

      }
  
`;