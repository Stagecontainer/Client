import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterCell = styled.div`
  width: 822px;
  padding: 12px 0px 12px 0px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.color.gray20};
  & > .filter-title {
    width: 150px;
    font-size: 16px;
    font-weight: 600;
  }
  & > .filter-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${(props) => props.gap}px;
  }
`;

const RatingButton = styled.button`
  height: 40px;
  border-radius: 100px;
  padding: 0px 16px 0px 16px;
  border: 1px solid
    ${(props) =>
      props.isCheck ? props.theme.color.main : props.theme.color.gray100};
  color: ${(props) =>
    props.isCheck ? props.theme.color.main : props.theme.color.gray100};
  font-size: 14px;
  background-color: transparent;

  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
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
  & .star-gray {
    position: relative;
    width: 22px;
    height: 22px;
    background-color: ${(props) => props.theme.color.gray20};
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
  & .half {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  & .gold {
    background-color: ${(props) => props.theme.color.yellow};
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
  }

  & .gray {
    background-color: ${(props) => props.theme.color.gray20};
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  }
`;

export { Container, FilterCell, RatingButton };
