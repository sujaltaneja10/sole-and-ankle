import styled from 'styled-components';
import { COLORS } from '../../constants';

export default function UnstyledButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

const Button = styled.button`
  background-color: ${COLORS.gray['900']};
  border: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  display: flex;
  align-items: center;
`;
