import styled from "styled-components";
import OrderProgress from "../../styles/components/order/OrderProgress";
import logo from "../../assets/order/company-logo.svg";
import orderReceiveImg from "../../assets/order/order-received.png";
import inProductionImg from "../../assets/order/in-production.png";
import inDeliveryImg from "../../assets/order/in-delivery.png";
import deliveryCompleteImg from "../../assets/order/delivery-complete.png";
import stepArrowIcon from "../../assets/order/step-arrow.svg";

const OrderProgressPage = () => {
  return (
    <Container>
      <div className="flex-wrapper">
        <div className="order-container">
          <div className="logo-container">
            <img src={logo} className="company-logo" alt="logo" />
          </div>
          <div className="order-details">
            <h3 className="order-number">
              주문번호: <span>ABCDEF123456</span>
            </h3>
            <strong className="order-type">한라상회 · 의상</strong>
            <p className="order-content">
              의뢰내용 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ 의뢰내용
              ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ 의뢰내용 의뢰내용
              ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ 의뢰내용
              ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ 의뢰내용 의뢰내용
              ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ 의뢰내용
              ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ 의뢰내용
            </p>
          </div>
        </div>

        <div className="service-buttons">
          <button className="producer-report">제작자 신고</button>
          <button className="messenger-consultation">메신저 상담</button>
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

  .order-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 84px;
    margin-bottom: 27px;

    .logo-container {
      margin-right: 24px;

      .company-logo {
        width: 84px;
        height: 84px;
      }
    }

    .order-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: inherit;

      .order-number {
        font-size: 12px;
        font-weight: 500;
      }

      .order-number > span {
        font-size: 12px;
        font-weight: 400;
        color: #0033ff;
      }
    }

    .order-type {
      font-size: 14px;
      font-weight: 500;
      color: #ff7a00;
    }

    .order-content {
      width: 1172px;
      font-size: 16px;
      color: #1d1d1d;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

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
