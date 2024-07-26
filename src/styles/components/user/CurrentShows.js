import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    & .header-title {
      font-size: 24px;
      font-weight: 600;
      color: ${(props) => props.theme.color.gray100};
    }
    & .header-sub {
      font-size: 18px;
      font-weight: 400;
      color: ${(props) => props.theme.color.gray60};
    }
  }
`;

const ShowCard = styled.div`
  width: 300px;
  height: 535px;

  display: inline-block;
  margin-right: 24px;
  & .content {
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 16px 8px;
  }
  & .title {
    height: 56px;
   
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.color.gray100};
  }
  & .place {
    font-size: 15px;
    font-weight: 400;
    color: ${(props) => props.theme.color.gray60};
  }
  & .date {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.color.gray60};
  }
`;

export { Container, ShowCard };
