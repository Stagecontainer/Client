import SearchBox from "../../components/search/SearchBox";
import Container from "../../styles/pages/SearchItemPage";
import Accordion from "../../components/Accordion";
import FilterBox from "../../components/search/FilterBox";
import SortList from "../../components/search/SortList";
import SearchItem from "../../components/search/SearchItem";
import { useState } from "react";

const SearchItemPage = () => {
  const [filter, setFilter] = useState({
    category: ["의상", "소품", "소모품"],
    purpose: ["의뢰 제작", "중고 판매", "중고 대여"],
    rating: 0,
  });
  const [sort, setSort] = useState("");

  return (
    <Container>
      <div className="wrap">
        <Accordion>
          <FilterBox filter={filter} setFilter={setFilter} />
        </Accordion>
        <div>
          <SortList sort={sort} setSort={setSort}/>
          <SearchItem filter={filter} sort={sort}/>
        </div>
      </div>
    </Container>
  );
};

export default SearchItemPage;
