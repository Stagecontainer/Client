import Container from "../../../styles/components/Search";
import SearchIcon from "../../../assets/icon/search-icon.svg?react";

const Search = ({
  width = "628",
  height = "48",
  text = "나에게 필요한 소품을 찾고 싶어",
  textSize = 16,
  textWeight = 400,
  textColor = "#4D4D4D",
  radius = "16",
  pad = 12,
  onclickFun,
  readOnly
}) => {
  return (
    <Container
      width={width}
      height={height}
      radius={radius}
      textColor={textColor}
      pad={pad}
      style={{cursor : readOnly ? 'pointer' : 'default'}}
      onClick={() => { readOnly && onclickFun(); }} // onclickFun이 존재할 때만 호출
    >
      <div className="wrap">
        <input
          type="text"
          placeholder={text}
          style={{
            fontWeight: textWeight,
            fontSize: textSize + "px",
            cursor: readOnly ? 'pointer' : 'default' // onclickFun이 있을 때 포인터로 변경
          }}
          readOnly={readOnly} // onclickFun이 없으면 readonly로 설정
        />
        <SearchIcon />
      </div>
    </Container>
  );
};

export default Search;
