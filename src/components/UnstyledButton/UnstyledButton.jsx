import styled from 'styled-components';

export default function UnstyledButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

const Button = styled.button`
  background-color: var(--color-gray-900);
  border: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  display: flex;
  align-items: center;
`;
