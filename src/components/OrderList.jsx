import { useLocation } from "react-router-dom";
import Container from "../styles/components/OrderList";

const OrderList = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <Container>
      <span style={{ fontSize: "14px", fontWeight: 400 }}>의뢰현황</span>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span style={{ fontSize: "28px", fontWeight: 400 }}>
          진행 중인 의뢰가 없습니다.
        </span>
      </div>
    </Container>
  );
};

export default OrderList;
