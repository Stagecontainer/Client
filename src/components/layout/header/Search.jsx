import Container from "../../../styles/components/Search";
import SearchIcon from "../../../assets/icon/search-icon.svg?react";

const Search = () => {
  return (
    <Container>
      <div className="wrap">
        <input type="text" placeholder="나에게 딱 맞는 제작사는 어디 있을까?" />
        <SearchIcon />
      </div>
    </Container>
  );
};
export default Search;
