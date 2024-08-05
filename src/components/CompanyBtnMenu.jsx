import FetchBtnImgs from "./user/FetchBtnImgs";
import Carousel from "./Carousel";
import { companyNavs } from "../constant/MenuData";
import C1 from "../assets/c1.png";
import C2 from "../assets/c2.png";
import C3 from "../assets/c3.png";
import C4 from "../assets/c4.png";
import { Container, NavCard } from "../styles/components/ CompanyBtnMenu";

const showingData = [
  {
    img: C1,
    title: "모란배필",
    place: "서울 종로구 성균관로 12-3 ",
  },
  {
    img: C2,
    title: "앙투아네트 스튜디오",
    place: "서울 종로구 자하문로14길 13-1",
  },
  {
    img: C3,
    title: "하나 공방",
    place: "서울 종로구 북촌로5가길 16",
  },
  {
    img: C4,
    title: "세인린트공방",
    place: "서울 종로구 삼봉로 53",
  },
  {
    img: C1,
    title: "모란배필",
    place: "서울 종로구 성균관로 12-3 ",
  },
  {
    img: C2,
    title: "앙투아네트 스튜디오",
    place: "서울 종로구 자하문로14길 13-1",
  },
];

const showingDataArr = showingData.map((value, _) => {
  return (
    <NavCard>
      <img src={value.img}></img>
      <div className="content">
        <div className="title">{value.title}</div>
        <span className="place">{value.place}</span>
      </div>
    </NavCard>
  );
});

const CompanyBtnMenu = () => {
  return (
    <Container>
      <div className="header">
        <span className="header-title">다른 예술인들이 많이 이용하는 회사</span>
        <span className="header-sub">인기 제작사/대여</span>
      </div>
      <FetchBtnImgs datas={companyNavs} />
      <Carousel
        width={1281}
        height={484}
        components={showingDataArr}
        gap={28}
        type="right"
      />
    </Container>
  );
};

export default CompanyBtnMenu;
