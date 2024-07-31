import Container from "../styles/components/OrderList";

const OrderList = () => {
  return (
    <Container>
      <span style={{fontSize : "14px", fontWeight : 400}}>의뢰현황</span>
      <div style={{display : "flex", justifyContent : "center"}}>
        <span style={{fontSize : "28px", fontWeight : 400}}>진행 중인 의뢰가 없습니다.</span>
      </div>
    </Container>
  );
};

export default OrderList;
