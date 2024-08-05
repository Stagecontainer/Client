import Container from "../../styles/components/search/SortList";

const SortList = ({ sort, setSort }) => {
  const handleSortClick = (newSort) => {
    setSort(sort === newSort ? "" : newSort);
  };

  return (
    <Container>
      <span
        style={{ color: sort === "낮은 가격순" ? "#1D1D1D" : "" }}
        onClick={() => handleSortClick("낮은 가격순")}
      >
        낮은 가격순
      </span>
      <span
        style={{ color: sort === "높은 가격순" ? "#1D1D1D" : "" }}
        onClick={() => handleSortClick("높은 가격순")}
      >
        높은 가격순
      </span>
      <span
        style={{ color: sort === "리뷰 좋은순" ? "#1D1D1D" : "" }}
        onClick={() => handleSortClick("리뷰 좋은순")}
      >
        리뷰 좋은순
      </span>
    </Container>
  );
};

export default SortList;
