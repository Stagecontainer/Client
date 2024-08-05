import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getOrderRequest } from "../api/order-request";
import Container from "../styles/components/OrderList";
import OrderInfo from "../pages/order/OrderInfo";

const OrderList = () => {
  const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState(location.state.data);
  console.log(location);

  useEffect(() => {
    const handleLoadOrder = async () => {
      try {
        const response = await getOrderRequest(1);
        console.log(response);
        // setData(response)
      } catch (error) {
        console.error(error);
      }
    };

    handleLoadOrder();
  }, []);

  return (
    <Container>
      {/* {location.state?.data ? (
        <OrderInfo id={id} content={data?.content} />
      ) : ( */}
      <>
        <span style={{ fontSize: "14px", fontWeight: 400 }}>의뢰현황</span>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span style={{ fontSize: "28px", fontWeight: 400 }}>
            진행 중인 의뢰가 없습니다.
          </span>
        </div>
      </>
      {/*)}*/}
    </Container>
  );
};

export default OrderList;
