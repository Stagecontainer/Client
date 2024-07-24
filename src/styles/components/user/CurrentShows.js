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

export default Container