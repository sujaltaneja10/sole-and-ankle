import styled from 'styled-components';
import ShoeGrid from '../ShoeGrid/ShoeGrid';
import { BREAKPOINTS } from '../../breakpoints';
import { Breadcrumbs, Crumbs } from '../BreadCrumbs/BreadCrumbs';
import Select from '../Select/Select';

export default function ShoeIndex() {
  return (
    <Wrapper>
      <BCWrapper>
        <Breadcrumbs>
          <Crumbs href="/home">Home</Crumbs>
          <Crumbs href="/sale">Sale</Crumbs>
          <Crumbs href="/shoes">Shoes</Crumbs>
        </Breadcrumbs>
      </BCWrapper>
      <Topbar>
        <Text>Running</Text>
        <Select label={'Sort'}>
          <option value="new-released">New Released!</option>
          <option value="on-sale">On Sale</option>
        </Select>
      </Topbar>
      <ShoeGrid />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    width: 100%;
  }
`;

const BCWrapper = styled.article`
  display: none;

  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: block;
    font-size: 0.875rem;
    color: var(--color-gray-700);
  }
`;

const Topbar = styled.article`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.25rem;
  margin-right: auto;
  font-weight: var(--weight-medium);
  color: var(--color-gray-900);
`;
