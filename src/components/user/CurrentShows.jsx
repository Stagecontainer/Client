import Container from "../../styles/components/user/CurrentShows";
import FetchBtnImgs from "./FetchBtnImgs";

const CurrentShows = () => {
  return (
    <Container>
      <div className="header">
        <span className="header-title">지금 뜨고 있는 공연</span>
        <span className="header-sub">오늘 뭐볼까? 지금 HOT한 공연</span>
      </div>
      <FetchBtnImgs />
    </Container>
  );
};

export default CurrentShows;
