import styled from "styled-components";

const CustomInput = styled.input`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 0px 12px;

  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.color.gray100};

  border: 1px solid #eaeaea;
  border-radius: 8px;

  display: flex;
  align-items: center;
  &::placeholder {
    color: ${(props) => props.theme.color.gray60};
  }
  &::-webkit-file-upload-button,
  &::file-selector-button {
    display: none;
  }
`;

const CustomTextarea = styled.textarea`
  width: ${(props) => props.width}px;
  min-height: ${(props) => props.height}px;
  padding: 10px 12px;

  font-size: 16px;
  font-weight: 500;

  color: ${(props) => props.theme.color.gray100};

  border: 1px solid ${(props) => props.theme.color.gray20};
  border-radius: 8px;
  &::placeholder {
    color: ${(props) => props.theme.color.gray60};
  }
`;

const CustomFileInput = styled.div`
  width: ${(props) => props.width}px;
  min-height: ${(props) => props.height}px;
  padding: 10px 12px;

  font-size: 16px;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.color.gray20};
  border-radius: 8px;

  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.gray60};
  & > label {
    cursor: pointer;
  }
  & > input {
    display: none;
  }
`;

const FileItem = styled.div`
  display: flex;
  height: 48px;
  gap: 12px;
  align-items: center;
`;

export { CustomInput, CustomTextarea, CustomFileInput, FileItem };
