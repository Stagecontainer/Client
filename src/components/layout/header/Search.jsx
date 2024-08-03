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
  onclickFun
}) => {
  return (
    <Container
      width={width}
      height={height}
      radius={radius}
      textColor={textColor}
      pad={pad}
      onClick={() => {onclickFun()}}
    >
      <div className="wrap">
        <input type="text" placeholder={text} style={{fontWeight : textWeight, fontSize : textSize+"px"}}/>
        <SearchIcon />
      </div>
    </Container>
  );
};
export default Search;
