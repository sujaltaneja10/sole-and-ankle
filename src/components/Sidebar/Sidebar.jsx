import styled from 'styled-components';
import { Breadcrumbs, Crumbs } from '../BreadCrumbs/BreadCrumbs';
import { COLORS, WEIGHTS } from '../../constants';

const BreadCrumbItems = [
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
        <Crumbs href="/">Home</Crumbs>
        <Crumbs href="/living-room">Sale</Crumbs>
        <Crumbs href="/couches">Shoes</Crumbs>
      </Breadcrumbs>
      <SidebarIndex>
        {BreadCrumbItems.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </SidebarIndex>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  width: 20%;
  font-size: 0.875rem;
  color: ${COLORS.gray['500']};
  font-weight: ${WEIGHTS.normal};
  display: flex;
  flex-direction: column;
`;

const SidebarIndex = styled.ul`
  margin: 36px 0;
`;

const Item = styled.li`
  font-size: 1rem;
  list-style-type: none;
  color: ${COLORS.gray['900']};
  font-weight: 550;
  margin: 6px 0;

  &:nth-of-type(3) {
    color: ${COLORS.primary};
  }
`;
