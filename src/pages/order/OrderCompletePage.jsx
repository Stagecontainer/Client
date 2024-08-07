import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import requestCompleteImg from "../../assets/order/request-completed.png";

const OrderCompletePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(location.state.data);

  const navigateToProgress = () => {
    navigate(`/company/products/${id}/order-progress`, {
      state: { data: data },
    });
  };

  const navigateToMain = () => {
    navigate("/company", { state: { data: data } });
  };

  return (
    <Container>
      <img src={requestCompleteImg} alt="" />
      <strong>제작 의뢰를 맡겨주셔서 감사합니다</strong>
      <p>
        제작 일정은 주기적으로 업데이트 돼서 반영될 예정이며 <br />
        최종 기간은 제작사마다 상이하지만 평균 5-7일 정도 소요됩니다.
      </p>
      <div className="navigation-buttons">
        <button className="check-progress-btn" onClick={navigateToProgress}>
          진행사항 확인하기
        </button>
        <button className="back-to-main" onClick={navigateToMain}>
          메인으로 돌아가기
        </button>
      </div>
    </Container>
  );
};

export default OrderCompletePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: 59px;

  button {
    cursor: pointer;
  }

  img {
    margin-bottom: 32px;
  }

  strong {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
  }

  p {
    text-align: center;
    font-size: 20px;
    margin-bottom: 32px;
  }

  .check-progress-btn,
  .back-to-main {
    width: 302px;
    height: 50px;
    border-radius: 8px;
  }

  .check-progress-btn {
    color: white;
    background-color: #ff7a00;
    border: none;
    margin-right: 24px;
  }

  .back-to-main {
    color: #ff7a00;
    background-color: white;
    border: 1px solid #ff7a00;
  }
`;
