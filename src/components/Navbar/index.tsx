import { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from 'components';
import { NavItems } from './NavItems.component';

const NavbarContainer = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    justify-between
    pl-4
    pr-4
    lg:pl-12
    lg:pr-12
    h-16
  `};
`;

const LogoContainer = styled.div``;
const NavItemsContainer = styled.div``;

export const Navbar = (): ReactElement => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItemsContainer>
        <NavItems />
      </NavItemsContainer>
    </NavbarContainer>
  );
};
