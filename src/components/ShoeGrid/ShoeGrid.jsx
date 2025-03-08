import ShoeCard from '../ShoeCard/ShoeCard';
import { SHOES } from '../../data';
import styled from 'styled-components';

export default function ShoeGrid() {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 36px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 36px;
`;
