import styled from 'styled-components';
import { Breadcrumbs, Crumbs } from '../BreadCrumbs/BreadCrumbs';
import { BREAKPOINTS } from '../../breakpoints';

const SidebarItems = [
  'Lifestyle',
  'Running',
  'Basketball',
  'Training and Gym',
  'Footabll',
  'Baseball',
  'Golf',
  'Tennis',
  'Athletics',
  'Walking',
];

export default function Sidebar() {
  return (
    <Wrapper>
      <Breadcrumbs>
        <Crumbs href="/home">Home</Crumbs>
        <Crumbs href="/sale">Sale</Crumbs>
        <Crumbs href="/shoes">Shoes</Crumbs>
      </Breadcrumbs>
      <SidebarIndex>
        {SidebarItems.map((item, index) => (
          <Item key={index}>
            <ItemLink href={item}>{item}</ItemLink>
          </Item>
        ))}
      </SidebarIndex>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  width: 20%;
  font-size: 0.875rem;
  color: var(--color-gray-500);
  font-weight: var(--weight-normal);
  display: flex;
  flex-direction: column;

  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: none;
  }
`;

const SidebarIndex = styled.ul`
  margin: 36px 0;
`;

const Item = styled.li`
  font-size: 1rem;
  list-style-type: none;
  color: var(--color-gray-900);
  font-weight: 550;
  margin: 6px 0;

  &:nth-of-type(3) {
    color: var(--color-primary);
  }
`;

const ItemLink = styled.a`
  text-decoration: none;
  color: inherit;
  font: inherit;
`;
