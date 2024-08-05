import {
  CustomInput,
  CustomTextarea,
  CustomFileInput,
} from "../../styles/components/request/InputFiled";
import { forwardRef } from "react";

const InputField = forwardRef(
  (
    {
      type,
      holderText,
      width,
      height,
      accept = "",
      id,
      onchangeFun,
    },
    ref
  ) => {
    if (type === "textarea") {
      return (
        <CustomTextarea
          id={id}
          width={width}
          height={height}
          placeholder={holderText}
          onChange={(e) => onchangeFun(id, e.target.value)}
        />
      );
    }

    if (type === "file") {
      return (
        <CustomFileInput width={width} height={height}>
          <label htmlFor={id}>
            <span>{holderText}</span>
          </label>
          <input
            type="file"
            name="file"
            id={id}
            accept={accept}
          />
        </CustomFileInput>
      );
    }

    return (
      <CustomInput
        type="text"
        width={width}
        height={height}
        placeholder={holderText}
        id={id}
        onChange={(e) => onchangeFun(id, e.target.value)}
      />
    );
  }
);

export default InputField;
