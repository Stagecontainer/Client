import styled from "styled-components";

const CustomInput = styled.input`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 0px 12px;

  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.color.black};

  border: 1px solid #eaeaea;
  border-radius: 8px;

  display: flex;
  align-items: center;
  &::placeholder {
    color: ${(props) => props.theme.color.gray};
  }
  &::-webkit-file-upload-button,
  &::file-selector-button {
    display: none;
  }
`;

const CustomTextarea = styled.textarea`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 10px 12px;

  font-size: 16px;
  font-weight: 500;

  color: ${(props) => props.theme.color.black};

  border: 1px solid #eaeaea;
  border-radius: 8px;
  &::placeholder {
    color: ${(props) => props.theme.color.gray};
  }
`;

const CustomFileInput = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 10px 12px;

  font-size: 16px;
  font-weight: 500;
  border: 1px solid #eaeaea;
  border-radius: 8px;

  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.gray};
  & > label {
    cursor: pointer;
  }
  & > input {
    display: none;
  }
`;

export { CustomInput, CustomTextarea, CustomFileInput };
