import { Container, Item } from "../../styles/components/user/HomeImgsButton";
import Ad1 from "../../assets/ad1.png";
import Ad2 from "../../assets/ad2.png";
import Ad3 from "../../assets/ad3.png";
import Ad4 from "../../assets/ad4.png";
import Ad5 from "../../assets/ad5.png";
import Ad6 from "../../assets/ad6.png";

const imgs = [Ad1, Ad2, Ad3, Ad4, Ad5, Ad6];
const HomeImgsButton = () => {
  return (
    <Container>
      {imgs.map((src, idx) => {
        return (
          <Item key={idx}>
            <img src={src} alt="" />
          </Item>
        );
      })}
    </Container>
  );
};

export default HomeImgsButton