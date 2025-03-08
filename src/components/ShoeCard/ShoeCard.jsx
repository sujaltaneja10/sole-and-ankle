import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';

function moreThan30Days(timestamp) {
  const thirtyDaysAgo = Date.now() - 1000 * 60 * 60 * 24 * 30; // Timestamp for 30 days ago
  return timestamp < thirtyDaysAgo; // Check if the given timestamp is older
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
      {moreThan30Days(releaseDate) === false && (
        <ReleasedTag>Just released!</ReleasedTag>
      )}
      {salePrice !== null && <SaleTag>Sale!</SaleTag>}
      <ImageWrapper>
        <Image src={imageSrc} />
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
  width: 30%;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: ${WEIGHTS.normal};
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
  color: ${COLORS.gray[900]};

  & p:last-of-type {
    color: ${COLORS.gray[500]};
  }
`;

const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.p`
  font-size: 1rem;

  &::before {
    content: '$';
  }
`;

const ActualPrice = styled(Price)`
  text-decoration: line-through;
  color: ${COLORS.gray['700']};
`;

const SalePrice = styled(Price)`
  color: ${COLORS.primary};
`;

const ContentTag = styled.div`
  width: 118px;
  height: 32px;
  background-color: ${COLORS.secondary};
  color: ${COLORS.white};
  position: absolute;
  right: -4px;
  top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-size: 14px;
  font-weight: ${WEIGHTS.normal};
`;

const ReleasedTag = styled(ContentTag)``;

const SaleTag = styled(ContentTag)`
  background-color: ${COLORS.primary};
`;
