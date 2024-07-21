import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};

  border: 1px solid #eeeeee;
  border-radius: ${(props) => props.radius + "px"};

  display: flex;
  justify-content: center;
  & > .wrap {
    width: ${(props) => props.width - 2 * props.pad}px;
    height: 100%;
    display: flex;
    align-items: center;

    & > input {
      width: calc(100% - 24px);
      height: 22px;
      font-size: 16px;
      border: none;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: ${(props) => props.textColor};
      }
    }
  }
`;

export default Container;
