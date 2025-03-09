import styled from 'styled-components';
import { ChevronDown } from 'react-feather';
import { BREAKPOINTS } from '../../breakpoints.js';

export default function Select({ label, children }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <SelectWrapper>
        <SelectIcon>{children}</SelectIcon>
        <ChevronIcon id="chevron-down" size={24} strokeWidth={1.5} />
      </SelectWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.phone}rem) {
    display: none;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  color: var(--color-gray-700);
  margin-right: 16px;
  font-weight: var(--weight-normal);
`;

const ChevronIcon = styled(ChevronDown)`
  position: absolute;
  right: 10px;
`;

const SelectIcon = styled.select`
  padding: 10px 12px;
  padding-right: 48px;
  appearance: none;
  background-color: var(--color-gray-100);
  border-radius: 4px;
  font-weight: var(--weight-normal);
`;
