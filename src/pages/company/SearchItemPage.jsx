import { Link } from "react-router-dom";
import SearchBox from "../../components/search/SearchBox";
import Container from "../../styles/pages/SearchItemPage";

const SearchItemPage = () => {
  const id = 99;
  return (
    <Container>
      <div className="wrap">
        <SearchBox />
        <h1>검색 페이지입니다</h1>
        <Link to={`/company/${id}`}>
          <button>디테일 페이지로 이동</button>
        </Link>
      </div>
    </Container>
  );
};

export default SearchItemPage;
