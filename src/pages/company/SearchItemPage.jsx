import { Link } from "react-router-dom";

const SearchItemPage = () => {
  const id = 99;
  return (
    <>
      <h1>검색 페이지입니다</h1>
      <Link to={`/company/${id}`}>
        <button>디테일 페이지로 이동</button>
      </Link>
    </>
  );
};

export default SearchItemPage;
