import { Container, Item } from "../../styles/components/user/HomeImgsButton";

const imgs = ["A", "B", "C", "D", "E", "F"];
const HomeImgsButton = () => {
  return (
    <Container>
      {imgs.map((src, idx) => {
        return (
          <Item key={idx}>
            
          </Item>
        );
      })}
    </Container>
  );
};

export default HomeImgsButton