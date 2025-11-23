import React from 'react'
import List from './List'
import styled from 'styled-components';
import theme from './theme';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function Footer() {
  return (<FooterStyled className=' p-25 ' >

      <div className='relative flex flex-row justify-between w-full'>
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
                  <li><button>Sage compta & paie</button></li>
                  <li><button>Developpement web</button></li>
                  <li><button>infographie</button></li>
            </List>
            <List title="Formations">
                  <li><p>Récevez les informations de nos nouveaux services et produits en vous abonnant à notre Newsletter</p></li>
                  <li className='flex flex-row '><input type="text" className='border-white h-10 w-10/12 bg-white pl-2 text-sm' placeholder='entrez votre texte'/> <IoIosArrowRoundForward  id='icone' className=' h-full w-10 text-sm text-white'/>
</li>
                  
            </List>
      </div>
  </FooterStyled>)
}

const FooterStyled = styled.footer`

      background-color: ${theme.colors.mainColor};

      #icone{
         background-color: ${theme.colors.primary};   
      }

  
`;