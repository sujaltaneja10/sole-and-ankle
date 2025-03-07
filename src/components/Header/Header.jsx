import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants.js';
import SuperHeader from '../SuperHeader/SuperHeader';

export default function Header() {
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo>
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
        <Side />
      </MainHeader>
    </header>
  );
}

const MainHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${COLORS.gray['300']};
  padding: 0 36px;
`;

const Logo = styled.a`
  text-decoration: none;
  color: inherit;
`;

const LogoWrapper = styled.h1`
  font-size: 1.2rem;
  color: ${COLORS.gray['900']};
  font-weight: ${WEIGHTS.bold};
`;

const Side = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  gap: 36px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray['900']};
  font-weight: ${WEIGHTS.medium};
  font-size: 0.875rem;
  text-transform: uppercase;

  &:first-child {
    color: ${COLORS.secondary};
  }
`;
