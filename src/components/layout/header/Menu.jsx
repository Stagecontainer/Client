import Container from "../../../styles/components/header/Menu";

const Menu = () => {
  return (
    <Container>
      <div className="wrap">
        <span>뮤지컬</span>
        <span>연극</span>
        <span>콘서트</span>
        <span>무용/클래식</span>
        <span>전시/행사</span>
      </div>
    </Container>
  );
};

export default Menu;
