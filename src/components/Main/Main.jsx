import styled from 'styled-components';
import ShoeIndex from '../ShoeIndex/ShoeIndex';
import Sidebar from '../Sidebar/Sidebar';

export default function Main() {
  return (
    <Wrapper>
      <ShoeIndex />
      <Sidebar />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  padding: 36px;
`;
