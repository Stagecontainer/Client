import {
  CustomFileInput,
  FileItem,
} from "../../styles/components/request/InputFiled";
import ImageIcon from "../../assets/icon/img-file.svg?react";
import FileIcon from "../../assets/icon/pdf-file.svg?react";
import CloseIcon from "../../assets/icon/close.svg?react";

const FileField = ({
  width,
  height,
  id,
  holderText,
  file,
  setFile,
  accept,
  maxFiles,
  readOnly = false,
}) => {
  const handleFileUpload = (e, id) => {
    const selectedFiles = Array.from(e.target.files);
    if (readOnly) {
      alert(`홍보 텍스트와 포트폴리오는 함께 등록할 수 없으므로 하나만 작성해주세요.
      `);
      return;
    }
    if (selectedFiles.length > maxFiles) {
      alert(`최대 ${maxFiles}개의 파일만 업로드할 수 있습니다.`);
      return;
    }

    setFile((prev) => ({
      ...prev,
      [id]: [...prev[id], ...selectedFiles],
    }));
  };

  const handleRemoveBtn = (index) => {
    setFile((prev) => ({
      ...prev,
      [id]: prev[id].filter((_, i) => i !== index),
    }));
  };

  const handlePlusClick = () => {
    document.getElementById(id).click();
  }; // 미사용

  return (
    <CustomFileInput width={width} height={height}>
      {file.length === 0 ? (
        <label htmlFor={id}>
          <span>{holderText}</span>
        </label>
      ) : (
        ""
      )}

      <div style={{ display: "flex" }}>
        {file.map((value, index) => {
          return (
            <FileItem key={index}>
              {value.type.startsWith("image") ? <ImageIcon /> : <FileIcon />}
              <span>{value.name}</span>
              <div onClick={() => handleRemoveBtn(index)}>
                <CloseIcon />
              </div>
            </FileItem>
          );
        })}
      </div>
      <input
        type="file"
        name="file"
        id={id}
        accept={accept}
        multiple
        onChange={(e) => handleFileUpload(e, id)}
        readOnly={readOnly}
      />
    </CustomFileInput>
  );
};

export default FileField;
