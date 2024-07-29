import styled from "styled-components";
import OrderProgress from "../../styles/components/order/OrderProgress";
import logo from "../../assets/icon/company-logo.svg";

const OrderProgressPage = () => {
  return (
    <Container>
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
            의뢰내용 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
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
    </Container>
  );
};

export default OrderProgressPage;

const Container = styled.div`
  width: 100vw;
  height: 82vh;
  margin: 24px 0 0 80px;

  .order-container {
    display: flex;
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
      font-size: 16px;
      color: #1d1d1d;
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
`;
