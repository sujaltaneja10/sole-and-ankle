import styled from 'styled-components';
import { ShoppingBag } from 'react-feather';

import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton/UnstyledButton';
import SearchInput from '../SearchInput/SearchInput';
import { BREAKPOINTS } from '../../breakpoints';

export default function SuperHeader() {
  return (
    <Wrapper>
      <Message>Free shipping on domestic orders over $75!</Message>
      <SearchInput />
      <HelpLink href="/help" aria-label="Get help">
        Help
      </HelpLink>
      <UnstyledButton aria-label="View shopping cart">
        <Bag color={COLORS.gray['300']} strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  font-size: 0.875rem;
  background-color: var(--color-gray-900);
  color: var(--color-white);
  display: flex;
  align-items: center;
  padding: 0 36px;
  gap: 36px;

  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: none;
  }
`;

const Message = styled.div`
  margin-right: auto;
  color: inherit;
`;

const HelpLink = styled.a`
  text-decoration: none;
  color: inherit;
  font: inherit;

  &:focus-visible {
    outline: 2px solid var(--color-white);
  }
`;

const Bag = styled(ShoppingBag)`
  height: 24px;
  width: 24px;
  color: var(--color-gray-300);
  font-weight: var(--weight-normal);
  font: inherit;
`;
