import Carousel from "./Carousel";
import CarouselBox from "./CarouselBox";
import Sp1 from "../assets/sp1.png";
import Sp2 from "../assets/sp2.png";
import Sp3 from "../assets/sp3.png";
import Sp4 from "../assets/sp4.png";
import { CenterMenu } from "../styles/components/CompanyHomeMenu";
import CompanyBtnMenu from "./CompanyBtnMenu";

const centerMenus = [
  {
    img: Sp1,
    link: "",
  },
  {
    img: Sp2,
    link: "",
  },
  {
    img: Sp3,
    link: "",
  },
  {
    img: Sp4,
    link: "",
  },
];

const centerMenusMap = centerMenus.map((value) => {
  return (
    <CenterMenu>
      <img src={value.img} />
    </CenterMenu>
  );
});

const CompanyHomeMenu = () => {
  return (
    <CarouselBox>
      <Carousel
        width={1281}
        height={340}
        step={652}
        items={centerMenus.length / 2}
        components={centerMenusMap}
      />
      <CompanyBtnMenu/>
    </CarouselBox>
  );
};

export default CompanyHomeMenu;
