import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';
import Select from '../Select/Select';
import ShoeGrid from '../ShoeGrid/ShoeGrid';

export default function ShoeIndex() {
  return (
    <Wrapper>
      <Topbar>
        <Text>Running</Text>
        <Select label="Sort">
          <option value="newest-releases">Newest Releases</option>
          <option value="on-sale">On sale</option>
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
`;

const Topbar = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.25rem;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray['900']};
`;
