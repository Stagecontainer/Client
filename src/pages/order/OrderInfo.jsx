import { useState, useEffect } from "react";
import { getDetailPost } from "../../api/products";
import { BASE_URL } from "../../constant/product";
import styled from "styled-components";
import notFoundImg_2 from "../../assets/product/image-not-found-2.png";

const OrderInfo = ({ id, content }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const handleLoadPost = async (id) => {
      try {
        const response = await getDetailPost(id);
        setData(response.data);
        if (data) {
          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    handleLoadPost(id);
  }, [id]);

  return (
    <Container>
      <div className="logo-container">
        <img
          src={data?.logo_img ? `${BASE_URL}${data.logo_img}` : notFoundImg_2}
          alt="company-logo"
        />
      </div>
      <div className="order-details">
        <h3 className="order-number">
          주문번호: <span>ABCDEF123456</span>
        </h3>
        <strong className="order-type">{data?.purpose}</strong>
        <p className="order-content">{content?.content}</p>
      </div>
    </Container>
  );
};

export default OrderInfo;

const Container = styled.div`
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
`;
