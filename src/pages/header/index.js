import React from 'react';
import { Container, ContainerLogo, ContainerMenu ,Label, Logo, MenuOption } from './styles';

import logo from '../../assets/logo-lampcreated.svg';

const Header = () => {
  return(
    <Container>
      <ContainerLogo>
        <Logo src={logo} />
        <Label>Apoiamos ideias, boas ou ruins, tudo depende do ponto de vista. Valorizamos a cima de tudo a criatividade , liberdade e comunicar sempre da melhor forma.</Label>
      </ContainerLogo>
      <ContainerMenu>
        <MenuOption>
          Portifólio
        </MenuOption>
        <MenuOption>
          Sobre
        </MenuOption>
        <MenuOption>
          Contato
        </MenuOption>
      </ContainerMenu>
    </Container>
  )
}

export default Header;