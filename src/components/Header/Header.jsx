import styled from 'styled-components';
import SuperHeader from '../SuperHeader/SuperHeader';
import { BREAKPOINTS } from '../../breakpoints.js';
import { Search, Menu, ShoppingBag } from 'react-feather';

export default function Header() {
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo href="/">
            <LogoWrapper>Sole&Ankle</LogoWrapper>
          </Logo>
        </Side>
        <Nav>
          <NavLink href="/">Sale</NavLink>
          <NavLink href="/">New Releases</NavLink>
          <NavLink href="/">Men</NavLink>
          <NavLink href="/">Women</NavLink>
          <NavLink href="/">Kids</NavLink>
          <NavLink href="/">Collections</NavLink>
        </Nav>
        <TabletIcons>
          <ShoppingBag />
          <Search />
          <Menu />
        </TabletIcons>
        <RightSide />
      </MainHeader>
    </header>
  );
}

const MainHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  width: 100%;
  border-bottom: 1px solid var(--color-gray-300);
  padding: 12px 32px;

  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    border-top: 10px solid var(--color-gray-900);
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.h1`
  font-size: 1.2rem;
  color: var(--color-gray-900);
  font-weight: var(--weight-bold);
`;

const Side = styled.div`
  flex: 1;
`;

const RightSide = styled(Side)`
  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: none;
  }
`;

const TabletIcons = styled.nav`
  display: none;

  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: flex;
    align-items: center;
    gap: 36px;
  }

  @media (max-width: ${BREAKPOINTS.phone}rem) {
    gap: 24px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  font-size: 0.875rem;
  text-transform: uppercase;

  &:first-child {
    color: var(--color-secondary);
  }
`;
