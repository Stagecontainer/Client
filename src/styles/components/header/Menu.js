import styled from "styled-components";

const Container = styled.div`
  height: 43px;

  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.color.gray100};
  & > .wrap {
    width: 1280px;
    display: flex;
    align-items: center;
    gap: 32px;

    & > span {
      color: #333333;
      font-weight: 600;
    }
  }
`;

export default Container;
