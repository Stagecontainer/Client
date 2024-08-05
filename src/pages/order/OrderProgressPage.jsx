import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import OrderInfo from "./OrderInfo";
import OrderProgress from "../../styles/components/order/OrderProgress";
import orderReceiveImg from "../../assets/order/order-received.png";
import inProductionImg from "../../assets/order/in-production.png";
import inDeliveryImg from "../../assets/order/in-delivery.png";
import deliveryCompleteImg from "../../assets/order/delivery-complete.png";
import stepArrowIcon from "../../assets/order/step-arrow.svg";

const OrderProgressPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [content, setContent] = useState(location.state.data);

  return (
    <Container>
      <div className="flex-wrapper">
        <OrderInfo id={id} content={content} />
        <div className="service-buttons">
          <button className="producer-report">제작자 신고</button>
          <Link to={`/company/products/${id}/chat`}>
            <button className="messenger-consultation">메신저 상담</button>
          </Link>
          <button className="order-cancellation">주문 취소</button>
          <button className="confirm-delivery">상품 수령 확인</button>
        </div>

        <OrderProgress />

        <div className="order-status">
          <img
            src={orderReceiveImg}
            className="order-receive"
            alt="order-receive"
          />
          <img src={stepArrowIcon} className="step-arrow" alt="step-arrow" />
          <img
            src={inProductionImg}
            className="in-production"
            alt="in-production"
          />
          <img src={stepArrowIcon} className="step-arrow" alt="step-arrow" />
          <img src={inDeliveryImg} className="in-delivery" alt="in-delivery" />
          <img src={stepArrowIcon} className="step-arrow" alt="step-arrow" />
          <img
            src={deliveryCompleteImg}
            className="delivery-complete"
            alt="delivery-complete"
          />
        </div>
      </div>
    </Container>
  );
};

export default OrderProgressPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 82vh;
  padding-top: 24px;

  .service-buttons {
    display: flex;
    justify-content: space-between;
    width: 1280px;
    margin-bottom: 25px;

    button {
      width: 302px;
      height: 48px;
      border-radius: 8px;
      cursor: pointer;
    }

    .producer-report {
      border: none;
      color: white;
      background-color: #ff0000;
    }

    .messenger-consultation {
      border: 1px solid #0033ff;
      color: #0033ff;
      background-color: white;
    }

    .order-cancellation {
      border: 1px solid #ff7a00;
      color: #ff7a00;
      background-color: white;
    }

    .confirm-delivery {
      border: 1px solid #aaaaaa;
      color: #999999;
      background-color: white;
    }
  }

  .order-status {
    display: flex;
    justify-content: center;
    align-items: center;

    .order-receive,
    .in-production,
    .in-delivery,
    .delivery-complete {
      margin-right: 36px;
    }

    .step-arrow {
      margin-right: 36px;
    }
  }
`;
