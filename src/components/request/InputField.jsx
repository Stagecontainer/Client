import {
  CustomInput,
  CustomTextarea,
  CustomFileInput,
} from "../../styles/components/request/InputFiled";

const InputField = ({ type, holderText, width, height, accept = "" }) => {
  if (type === "textarea")
    return (
      <CustomTextarea width={width} height={height} placeholder={holderText} />
    );

  if (type === "file") {
    return (
      <CustomFileInput width={width} height={height}>
        <label htmlFor="file">
          <span>{holderText}</span>
        </label>
        <input type="file" name="file" id="file" accept={accept} />
      </CustomFileInput>
    );
  }

  return (
    <CustomInput
      type="text"
      width={width}
      height={height}
      placeholder={holderText}
    />
  );
};

export default InputField;
