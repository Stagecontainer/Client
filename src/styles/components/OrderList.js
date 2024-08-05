import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 143px;
  padding: 16px 24px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.gray20};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 6%);

  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const OrderBox = styled.div`
  width: 1232px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OrderCard = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & .logo-box {
    width: 84px;
    height: 84px;
    margin-left: 14px;
    border-radius : 50%;
    border: 1px solid ${(props) => props.theme.color.gray20};
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  & .content-box {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  & .request-id {
    font-size: 12px;
    color: ${(props) => props.theme.color.blue};
  }
  & .title {
    font-size: 14px;
    color : ${(props) => props.theme.color.main};
  }
  & .promotion {
    font-size: 16px;
  }
`;
export { Container, OrderBox, OrderCard };
