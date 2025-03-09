import styled from 'styled-components';

function moreThan30Days(timestamp) {
  const thirtyDaysAgo = Date.now() - 1000 * 60 * 60 * 24 * 30;
  return timestamp < thirtyDaysAgo;
}

export default function ShoeCard({
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) {
  return (
    <Wrapper>
      {salePrice !== null ? (
        <SaleTag>Sale!</SaleTag>
      ) : moreThan30Days(releaseDate) === false ? (
        <ReleasedTag>Just released!</ReleasedTag>
      ) : null}
      <ImageWrapper>
        <Image src={imageSrc} alt={name} />
      </ImageWrapper>
      <ProductDetails>
        <ProductInfo>
          <p>{name}</p>
          <p>{numOfColors} Colors</p>
        </ProductInfo>
        <ProductPrice>
          {salePrice === null && <Price>{price / 100}</Price>}
          {salePrice !== null && <ActualPrice>{price / 100}</ActualPrice>}
          {salePrice !== null && <SalePrice>{salePrice / 100}</SalePrice>}
        </ProductPrice>
      </ProductDetails>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  position: relative;
  height: 30%;
  min-width: 275px;
  flex: 1;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: var(--weight-normal);
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  border-radius: 8px;
  width: 100%;
`;

const ProductDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ProductInfo = styled.div`
  color: var(--color-gray-900);
  width: calc(100% - 50px);

  & p:first-of-type {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  & p:last-of-type {
    color: var(--color-gray-500);
    width: 100%;
  }
`;

const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
`;

const Price = styled.p`
  font-size: 1rem;
  text-align: right;

  &::before {
    content: '$';
  }
`;

const ActualPrice = styled(Price)`
  text-decoration: line-through;
  color: var(--color-gray-700);
`;

const SalePrice = styled(Price)`
  color: var(--color-primary);
`;

const ContentTag = styled.div`
  width: 118px;
  height: 32px;
  background-color: var(--color-secondary);
  color: var(--color-white);
  position: absolute;
  right: -4px;
  top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-size: 14px;
  font-weight: var(--weight-normal);
`;

const ReleasedTag = styled(ContentTag)``;

const SaleTag = styled(ContentTag)`
  background-color: var(--color-primary);
  width: fit-content;
  padding: 0 20px;
`;
