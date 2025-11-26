import styled from 'styled-components';
import theme from '../theme';
import { useNavigate } from 'react-router-dom';




export default function BtnPrimary({children, inverse, lien}) {

      
      let color
      let backgroundColor
      !inverse ? color= "white": color=theme.colors.primary
      !inverse ? backgroundColor = theme.colors.primary : backgroundColor="white"

      const navigate = useNavigate()



  return <BtnPrimaryStyled className='min-w-45 h-10 rounded-[30px] px-5 font-bold text-sm cursor-pointer uppercase' color={color} background={backgroundColor} onClick={()=> navigate(lien)}>
          {children}
        </BtnPrimaryStyled>

}


const BtnPrimaryStyled = styled.button`

    background-color: ${({background})=>(background)};
    color: ${({color})=>(color)};

    &:hover{
      background-color: ${({color})=>(color)};
      color: ${({background})=>(background)};
    }
`;