import SearchBox from "../../components/search/SearchBox";
import Container from "../../styles/pages/SearchItemPage";
import Accordion from "../../components/Accordion";
import FilterBox from "../../components/search/FilterBox";
import SortList from "../../components/search/SortList";
import SearchItem from "../../components/search/SearchItem";

const SearchItemPage = () => {
  return (
    <Container>
      <div className="wrap">
        <SearchBox />
        <Accordion>
          <FilterBox/>
        </Accordion>
        <div>
          <SortList/>
          <SearchItem/>
        </div>
      </div>
    </Container>
  );
};

export default SearchItemPage;
