import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;

  & > img {
    width: 193px;
    height: 193px;
    border-radius: 16px;
  }
  & > div {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  & > span {
    font-size: 24px;
    font-weight: 600;
  }
  & .type {
    font-size: 12px;
    font-weight: 500;
    color: ${(props) => props.theme.color.main};
  }
  & .title {
    font-size: 20px;
    font-weight: 500;
  }
  & .user-rating {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  & .rating-box {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  & .rating {
    font-size: 14px;
    font-weight: 700;
  }
  & .text {
    align-items: center;
    font-size: 14px;
    font-size: 500;
  }
  & .price {
    font-size: 24px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .star {
    position: relative;
    width: 22px;
    height: 22px;
    background-color: ${(props) => props.theme.color.yellow};
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  }
`;

export { Container, ItemCard };
