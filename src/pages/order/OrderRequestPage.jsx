import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getDetailPost } from "../../api/products";
import { getUserId } from "../../api/users";
import { createOrderRequest } from "../../api/order-request";
import { BASE_URL } from "../../constant/product";
import notFoundImg_2 from "../../assets/product/image-not-found-2.png";
import menuIcon from "../../assets/order/vertical-menu-icon.svg";

const OrderRequestPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState({
    name: "",
    number: "",
    address: "",
    content: "",
    reference: null,
  });
  const [inputValid, setInputValid] = useState({
    nameValid: true,
    numberValid: true,
    addressValid: true,
    contentValid: true,
    referenceValid: false,
  });
  const isValid =
    inputValue.name &&
    inputValue.number &&
    inputValue.address &&
    inputValue.content;

  const handleLoadPost = async (id) => {
    try {
      const res = await getUserId();
      console.log(res);
      setUserId(res.data.id);
      const response = await getDetailPost(id);
      setData(response.data);
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoadPost(id);
  }, []);

  const handleInput = (e) => {
    const { value, id } = e.target;

    const handleInput = (index) => {
      setInputValue((prev) => ({ ...prev, [index]: value }));
    };

    switch (id) {
      case "name":
        handleInput("name");
        break;
      case "number":
        handleInput("number");
        break;
      case "address":
        handleInput("address");
        break;
      case "content":
        handleInput("content");
        break;
    }
  };

  // input 클릭 후 값이 입력되지 않은 채 빠져나가면 빨간 글씨로 경고
  const handleBlur = (e) => {
    const { value, id } = e.target;

    const handleValid = (index) => {
      value === ""
        ? setInputValid((prev) => ({ ...prev, [`${index}Valid`]: false }))
        : setInputValid((prev) => ({ ...prev, [`${index}Valid`]: true }));
    };

    switch (id) {
      case "name":
        handleValid("name");
        break;
      case "number":
        handleValid("number");
        break;
      case "address":
        handleValid("address");
        break;
      case "content":
        handleValid("content");
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createOrderRequest(inputValue, userId, id);
      console.log(response);
      navigate(`/company/products/${id}/order-complete`, {
        state: { data: response.data },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <div className="header">
        <div className="logo-container">
          <img
            src={data?.logo_img ? `${BASE_URL}${data.logo_img}` : notFoundImg_2}
            className="company-logo"
          />
          <strong className="logo-text">{data?.company}</strong>
        </div>
        <img src={menuIcon} alt="menu-icon" />
      </div>

      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="client-number-container">
            <div className="client-container">
              <label htmlFor="name" className={inputValid.nameValid || "empty"}>
                의뢰자{inputValid.nameValid ? "" : "*"}
              </label>
              <input
                type="text"
                value={inputValue.name}
                id="name"
                placeholder="홍길동"
                onChange={handleInput}
                onBlur={handleBlur}
              />
            </div>
            <div className="number-container">
              <label
                htmlFor="number"
                className={inputValid.numberValid || "empty"}
              >
                연락처{inputValid.numberValid ? "" : "*"}
              </label>
              <input
                type="number"
                value={inputValue.number}
                id="number"
                placeholder="010-0000-0000"
                onChange={handleInput}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="address-container">
            <label
              htmlFor="address"
              className={inputValid.addressValid || "empty"}
            >
              배송지{inputValid.addressValid ? "" : "*"}
            </label>
            <input
              type="text"
              value={inputValue.address}
              id="address"
              placeholder="서울시 OO구 OO동"
              onChange={handleInput}
              onBlur={handleBlur}
            />
          </div>
          <div className="content-container">
            <label
              htmlFor="content"
              className={inputValid.contentValid || "empty"}
            >
              의뢰내용{inputValid.contentValid ? "" : "*"}
            </label>
            <textarea
              id="content"
              value={inputValue.content}
              placeholder="의상 컨셉과 필요한 장식, 색상 등을 작성해주세요&#13;&#10;
              *치수의 경우, 필수적인 요소이기에 의뢰자와 먼저 상담 후 작성여부를 정해주세요"
              onChange={handleInput}
              onBlur={handleBlur}
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
          <button
            className={`apply-btn ${isValid ? "abled" : "disabled"}`}
            disabled={!isValid}
            type="submit"
          >
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

  input,
  button,
  a,
  textarea {
    all: unset;
    box-sizing: border-box;
  }

  /* input number 타입 화살표 없애기 */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .empty {
    color: #ff0004;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1062px;
    height: 72px;
    margin-bottom: 32px;

    .logo-container {
      display: flex;
      align-items: center;

      .company-logo {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 12px;
        object-fit: cover;
      }

      .logo-text {
        font-size: 20px;
        font-weight: 500;
        color: #1d1d1d;
      }
    }
  }

  label {
    font-weight: 500;
    margin-bottom: 8px;
  }

  input {
    padding: 13px 0 13px 12px;
  }

  textarea {
    padding: 10px 0 0 12px;
  }

  input::placeholder,
  textarea::placeholder {
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    color: #999999;
  }

  .content {
    width: 1062px;
    height: 476px;

    .client-number-container {
      display: flex;
      justify-content: space-between;
    }

    .client-container,
    .number-container {
      display: flex;
      flex-direction: column;
    }

    .client-container {
      margin-right: 24px;
    }

    .reference-image-container {
      margin-bottom: 64px;
    }

    #name,
    #number,
    #address,
    #content,
    #reference-image {
      border: 1px solid #f1f1f1;
      border-radius: 8px;
      margin-bottom: 24px;
      background-color: white;
    }
    #name,
    #number {
      width: 519px;
    }

    #address,
    #content,
    #reference-image {
      width: 100%;
    }

    #content {
      height: 140px;
    }

    .apply-btn {
      width: 1062px;
      height: 60px;
      border-radius: 8px;
      text-align: center;
      color: white;
      cursor: pointer;
    }
    .abled {
      background-color: #ff7a00;
    }

    .disabled {
      background-color: #aaaaaa;
    }
  }
`;
