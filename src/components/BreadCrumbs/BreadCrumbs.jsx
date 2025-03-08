import styled from 'styled-components';

export function Breadcrumbs({ children }) {
  return (
    <Wrapper aria-label="Breadcrumb">
      <BreadCrumbList>{children}</BreadCrumbList>
    </Wrapper>
  );
}

export function Crumbs({ href, children }) {
  return (
    <BreadCrumbListItem>
      <BreadCrumbLink href={href}>{children}</BreadCrumbLink>
    </BreadCrumbListItem>
  );
}

const Wrapper = styled.nav`
  color: inherit;
`;

const BreadCrumbListItem = styled.li`
  display: inline;

  &:not(:first-of-type) {
    --spacing-value: 8px;

    margin-left: var(--spacing-value);

    &:before {
      /* better to use '|' and transform it to '/' for accessibility */
      content: '/';
      opacity: 0.6;
      margin-right: var(--spacing-value);
    }
  }
`;

const BreadCrumbList = styled.ol`
  list-style-type: none;
`;

const BreadCrumbLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: revert;
  }
`;
