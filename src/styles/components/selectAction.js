import styled from "styled-components";

const Container = styled.div`
    width: 410px;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 48px;

    & > span {
        font-size: 24px;
        font-weight: 700;
    }
`;

const RadiusBigBtn = styled.div`
  width: 410px;
  height: 410px;

  border: 4px solid ${(props) => props.theme.color.gray100};
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  & > span {
    font-size: 32px;
    font-weight: 500;
  }
`;

export { Container, RadiusBigBtn };
