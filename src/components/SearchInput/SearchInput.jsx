import styled from 'styled-components';
import { Search } from 'react-feather';
import { COLORS, WEIGHTS } from '../../constants';

export default function SearchInput() {
  return (
    <Label>
      <SearchIcon strokeWidth={1} height={16} width={16} color={COLORS.white} />
      <Input type="text" placeholder="Search..." aria-label="Search" />
    </Label>
  );
}

const Label = styled.label`
  position: relative;
  border-bottom: 1px solid ${COLORS.white};
  display: flex;
  align-items: baseline;
  padding: 4px;
`;

const SearchIcon = styled(Search)`
  position: absolute;
`;

const Input = styled.input`
  background: inherit;
  border: 0;
  color: ${COLORS.white};
  padding: 0 4px;
  padding-left: 24px;
  width: 175px;
  font-weight: ${WEIGHTS.normal};

  &:focus {
    border: 1px solid white;
  }
`;
