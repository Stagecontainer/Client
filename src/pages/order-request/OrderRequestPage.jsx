import styled from "styled-components";
import logo from "../../assets/icon/company-logo.svg";
import menuIcon from "../../assets/icon/vertical-menu-icon.svg";

const OrderRequestPage = () => {
  return (
    <Container>
      <div className="header">
        <img src={logo} alt="company-logo" />
        <img src={menuIcon} alt="company-logo" />
      </div>

      <div className="content">
        <form>
          <div className="client-tel-container">
            <div className="client-container">
              <label htmlFor="client-name">의뢰자</label>
              <input type="text" id="client-name" placeholder="홍길동" />
            </div>
            <div className="tel-container">
              <label htmlFor="tel">연락처</label>
              <input type="text" id="tel" placeholder="010-0000-0000" />
            </div>
          </div>
          <div className="address-container">
            <label htmlFor="address">배송지</label>
            <input type="text" id="address" placeholder="서울시 OO구 OO동" />
          </div>
          <div className="request-content-container">
            <label htmlFor="request-content">의뢰내용</label>
            <input
              type="text"
              id="request-content"
              placeholder="의상 컨셉과 필요한 장식, 색상 등을 작성해주세요 &#13;&#10; *치수의 경우, 필수적인 요소이기에 의뢰자와 먼저 상담 후 작성여부를 정해주세요"
            />
          </div>
          <div className="reference-image-container">
            <label htmlFor="reference-image">참고자료</label>
            <input
              type="text"
              id="reference-image"
              placeholder="예시 이미지나 컨셉 드로잉을 올려주세요 (파일형식: png, jpg, pdf)"
            />
          </div>
          <button className="apply-btn" type="submit">
            의뢰 신청
          </button>
        </form>
      </div>
    </Container>
  );
};

export default OrderRequestPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: 15px;
  box-sizing: border-box;

  input,
  button {
    all: unset;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1062px;
    height: 72px;
    margin-bottom: 32px;
  }

  label {
    font-weight: 500;
    margin-bottom: 8px;
  }

  input {
    padding: 13px 0 13px 12px;
  }

  input::placeholder {
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    color: #999999;
  }

  .content {
    width: 1062px;
    height: 476px;

    .client-tel-container {
      display: flex;
    }

    .client-container,
    .tel-container {
      display: flex;
      flex-direction: column;
    }

    .client-container {
      margin-right: 24px;
    }

    .reference-image-container {
      margin-bottom: 64px;
    }

    #client-name,
    #tel,
    #address,
    #request-content,
    #reference-image {
      border: 1px solid #f1f1f1;
      border-radius: 8px;
      margin-bottom: 24px;
      background-color: white;
    }
    #client-name,
    #tel {
      width: 519px;
    }

    #address,
    #request-content,
    #reference-image {
      width: 100%;
    }

    #request-content {
      height: 140px;
    }

    .apply-btn {
      width: 1062px;
      height: 60px;
      border-radius: 8px;
      text-align: center;
      color: white;
      background-color: #aaaaaa;
      cursor: pointer;
    }
  }
`;
