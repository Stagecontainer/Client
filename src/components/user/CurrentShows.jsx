import { Container, ShowCard } from "../../styles/components/user/CurrentShows";
import FetchBtnImgs from "./FetchBtnImgs";
import Carousel from "../../components/Carousel";
import M1 from "../../assets/m1.png";
import M2 from "../../assets/m2.png";
import M3 from "../../assets/m3.png";
import M4 from "../../assets/m4.png";

const showingData = [
  {
    img: M1,
    title: "뮤지컬 〈홍련〉",
    place: "대학로 자유극장",
    date: "2024.07.30 - 2024.10.20",
  },
  {
    img: M2,
    title: "뮤지컬 〈영웅〉 15주년 기념공연",
    place: "세종문화회관 대극장",
    date: "2024.05.29 - 2024.08.11",
  },
  {
    img: M3,
    title: "뮤지컬 〈프랑켄슈타인〉 10주년 기념공연",
    place: "블루스퀘어 신한카드홀",
    date: "2024.06.05 - 2024.08.25",
  },
  {
    img: M4,
    title: "뮤지컬 〈베르사유의 장미〉",
    place: "충무아트센터 대극장",
    date: "2024.07.16 - 2024.10.13",
  },
  {
    img: M1,
    title: "뮤지컬 〈홍련〉",
    place: "대학로 자유극장",
    date: "2024.07.30 - 2024.10.20",
  },
  {
    img: M2,
    title: "뮤지컬 〈영웅〉 15주년 기념공연",
    place: "세종문화회관 대극장",
    date: "2024.05.29 - 2024.08.11",
  },
];

const showingDataArr = showingData.map((value, _) => {
  return (
    <ShowCard>
      <img src={value.img}></img>
      <div className="content">
        <div className="title">{value.title}</div>
        <span className="place">{value.place}</span>
        <span className="date">{value.date}</span>
      </div>
    </ShowCard>
  );
});

const CurrentShows = () => {
  return (
    <Container>
      <div className="header">
        <span className="header-title">지금 뜨고 있는 공연</span>
        <span className="header-sub">오늘 뭐볼까? 지금 HOT한 공연</span>
      </div>
      <FetchBtnImgs />
      <Carousel
        width={1280}
        height={535}
        components={showingDataArr}
        gap={28}
        type="right"
      />
    </Container>
  );
};

export default CurrentShows;
