import React from 'react'
import List from './List'
import styled from 'styled-components';
import theme from './theme';
import { IoIosArrowRoundForward } from 'react-icons/io';
import CopyrightBan from './ui/CopyrightBan';

export default function Footer() {
  return (
  <FooterStyled className=' lg:px-25 px-0 pt-20 flex flex-col items-center lg:gap-10 w-full' >

      <div className='relative lg:flex lg:flex-row grid grid-cols-2 gap-2 px-8 lg:justify-between items-right w-full md:grid-cols-4'>
            <List title="Services" >
                  <li><button>sms marketing</button></li>
                  <li><button>voip</button></li>
                  <li><button>vps - cloud</button></li>
                  <li><button>fibre optique</button></li>
            </List>
            <List title="Liens">
                  <li><button>data protection</button></li>
                  <li><button>électricité</button></li>
                  <li><button>site internet</button></li>
                  <li><button>vidéo surveillance</button></li>
            </List>
            <List title="Futures">
                  <li><button>Job</button></li>
                  <li><button>Recrutement</button></li>
                  <li><button>Atelier</button></li>
                  <li><button>Action sociale</button></li>
            </List>
            <List title="Formations">
                  <li><button>bureautique</button></li>
                  <li><button className='text-xs'>Sage compta & paie</button></li>
                  <li><button className='text-xs'>Developpement web</button></li>
                  <li><button>infographie</button></li>
            </List>
            <List title="Formations">
                  <li><p>Récevez les informations de nos nouveaux services et produits en vous abonnant à notre Newsletter</p></li>
                  <li className='flex flex-row '><input type="text" name="clientMail" className='border-white lg:h-10 lg:w-10/12 bg-white pl-2 text-sm outline-0' placeholder='entrez votre Email'/><button className=' h-full w-10 text-sm text-white cursor-pointer'> <IoIosArrowRoundForward  id='icone' className=' h-full w-full text-sm'/></button>
</li>
                  
            </List>
      </div>
      <CopyrightBan/>
  </FooterStyled>)
}

const FooterStyled = styled.footer`

      background-color: ${theme.colors.mainColor};
      color: ${theme.colors.other};

      #icone{
         background-color: ${theme.colors.primary};   
      }

  
`;