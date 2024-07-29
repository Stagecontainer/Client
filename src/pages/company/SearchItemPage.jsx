import { Link } from "react-router-dom";
import SearchBox from "../../components/search/SearchBox";
import Container from "../../styles/pages/SearchItemPage";
import Accordion from "../../components/Accordion";

const SearchItemPage = () => {
  const id = 99;
  return (
    <Container>
      <div className="wrap">
        <SearchBox />
        <Accordion>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </Accordion>
        <h1>검색 페이지입니다</h1>
        <Link to={`/company/${id}`}>
          <button>디테일 페이지로 이동</button>
        </Link>
      </div>
    </Container>
  );
};

export default SearchItemPage;
