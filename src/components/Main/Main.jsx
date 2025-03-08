import styled from 'styled-components';
import ShoeIndex from '../ShoeIndex/ShoeIndex';
import Sidebar from '../Sidebar/Sidebar';

export default function Main() {
  return (
    <Wrapper>
      <Sidebar />
      <ShoeIndex />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  align-items: baseline;
  padding: 36px;
`;
