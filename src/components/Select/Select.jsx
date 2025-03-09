import React from 'react';
import styled from 'styled-components';

import { ChevronDown } from 'react-feather';
import { BREAKPOINTS } from '../../breakpoints';

export default function Select({ label, children, ...delegated }) {
  return (
    <Wrapper>
      <VisibleLabel>{label}</VisibleLabel>

      <SelectWrapper>
        <NativeSelect {...delegated}>{children}</NativeSelect>

        <DisplayedBit>
          Newest Releases
          <ChevronIcon id="chevron-down" size={24} strokeWidth={1.5} />
        </DisplayedBit>
      </SelectWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.label`
  display: flex;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.phone}rem) {
    display: none;
  }
`;

const VisibleLabel = styled.span`
  color: var(--color-gray-500);
  margin-right: 16px;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DisplayedBit = styled.span`
  display: block;
  background: var(--color-gray-100);
  font-size: 0.875rem;
  font-weight: var(--weight-medium);
  color: var(--color-gray-900);
  padding: 12px 36px 12px 12px;
  border-radius: 8px;
  pointer-events: none;

  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const ChevronIcon = styled(ChevronDown)`
  position: absolute;
  top: 0;
  right: 9px;
  bottom: 0;
  margin: auto;
  width: 24px;
  height: 24px;
`;
