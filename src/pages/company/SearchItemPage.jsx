import SearchBox from "../../components/search/SearchBox";
import Container from "../../styles/pages/SearchItemPage";
import Accordion from "../../components/Accordion";
import FilterBox from "../../components/search/FilterBox";

const SearchItemPage = () => {
  return (
    <Container>
      <div className="wrap">
        <SearchBox />
        <Accordion>
          <FilterBox/>
        </Accordion>
        <div>
          
        </div>
      </div>
    </Container>
  );
};

export default SearchItemPage;
