import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { getChatRoomList } from "../../api/chat";
import { getDetailPost } from "../../api/products";
import { product } from "../../assets/mock-data/product-mock-data";
import { BASE_URL } from "../../constant/product";

import notFoundImg from "../../assets/product/image-not-found.png";
import notFoundImg_2 from "../../assets/product/image-not-found-2.png";
import ratingIcon from "../../assets/product/rating-icon.svg";
import quotationLeftMark from "../../assets/product/quotation-mark-1.svg";
import quotationRightMark from "../../assets/product/quotation-mark-2.svg";
import { createChatRoom } from "../../api/chat";

const SearchDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const handleLoadPost = async (id) => {
    try {
      const response = await getDetailPost(id);
      setData(response.data);
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 새 채팅방 만들기
  const startNewChat = async () => {
    const response = await createChatRoom({
      name: data.company,
      invited_user_id: data.user,
    });
  };

  // 이미 존재하는 채팅방 있는지 확인
  const getChatList = async () => {
    let hasChatRoom = false;
    const response = await getChatRoomList();
    response.data.map((chatRoom) => {
      if (chatRoom.name === data.company) {
        hasChatRoom = true;
        return;
      } else {
        hasChatRoom = false;
      }
    });
    hasChatRoom ? null : startNewChat();
    console.log(response.data);
  };

  // 채팅방 생성
  const navigateToChat = async () => {
    getChatList();
    navigate(`/company/products/${id}/chat`);
  };

  useEffect(() => {
    handleLoadPost(id);
  }, []);

  return (
    <>
      {data && (
        <Container>
          <div className="reference-image">
            <div className="representative-image-container">
              <img
                className="representative-image"
                src={
                  data?.images[0] ? `${BASE_URL}${data.images[0]}` : notFoundImg
                }
                alt="representative-image"
              />
            </div>
            <div className="product-images">
              {data.images
                .filter((_, idx) => idx !== 0)
                .map((_, idx) => (
                  <img
                    className="product-image"
                    key={data.images.image_id}
                    src={
                      data?.images[idx + 1]
                        ? `${BASE_URL}${data.images[idx + 1]}`
                        : notFoundImg
                    }
                  />
                ))}
            </div>
          </div>

          <div className="product-header">
            <div className="product-info-container">
              <div className="company-logo">
                <img
                  src={
                    data?.logo_img
                      ? `${BASE_URL}${data.logo_img}`
                      : notFoundImg_2
                  }
                  alt="company-logo"
                />
              </div>
              <div className="product-info">
                <div className="purpose">{data.purpose}</div>
                <h2 className="product-title">{data.title}</h2>
                <span className="company-address">{data.address}</span>
                <div className="company-rating">
                  <img
                    className="rating-icon"
                    src={ratingIcon}
                    alt="rating-icon"
                  />
                  <strong className="rating">{product.rating}</strong>
                  <span className="review-count">123명 평가</span>
                </div>
              </div>
            </div>
            <div className="product-stats">
              <div className="product-price">{data.price}~</div>
              <div className="project-container">
                <span className="current-projects">
                  현재 진행 중인 작업
                  <span className="current-highlight"> 2건</span>
                </span>
                <span className="total-projects">
                  지금까지 무대창고에서 진행한 작업
                  <span className="total-highlight"> 123건</span>
                </span>
              </div>
            </div>
          </div>

          <div className="product-content">
            <div className="service-overview">
              <div className="quotation-mark-1">
                <img src={quotationLeftMark} alt="quotation-mark" />
              </div>
              <div className="quotation-mark-2">
                <img src={quotationRightMark} alt="quotation-mark" />
              </div>
              <p className="overview">{data.promotion}</p>
            </div>

            <div className="product-description">
              <p>{data.content}</p>
            </div>

            <div className="refund-policy">
              <h3 className="refund-title">환불/취소 규정</h3>
              <ul className="refund-details">
                <li>
                  · 제공자와 신청자가 상호 협의한 경우 이미 시작한 커미션을
                  취소할 수 있어요. 이 경우 환불 금액은 상호 협의한 금액에
                  따릅니다.
                </li>
                <li>
                  · 이용 약관에 따라 커미션주의 귀책 사유로 커미션이 취소될 경우
                  신청자는 결제 금액 전액을 환불받을 수 있습니다
                </li>
                <li>
                  · 이용 약관에 따라 신청자의 귀책 사유로 커미션이 취소될 경우
                  환불이 제한될 수 있습니다.
                </li>
              </ul>
            </div>
          </div>

          <div className="button-container">
            <button className="consult-button" onClick={navigateToChat}>
              상담하기
            </button>
            <Link to={`/company/products/${id}/order-request`}>
              <button className="request-button">의뢰서 작성</button>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
};

export default SearchDetailPage;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
  padding-top: 36px;

  img {
    object-fit: cover;
  }

  .reference-image {
    display: flex;
    width: 1063px;
    height: 396px;
    margin-bottom: 42px;

    img {
      border-radius: 12px;
    }

    .representative-image {
      width: 519px;
      height: 396px;
      margin-right: 24px;
    }

    .product-images {
      display: flex;
      flex-wrap: wrap;
      column-gap: 24px;
      row-gap: 12px;

      .product-image {
        width: 248px;
        height: 192px;
      }
    }
  }

  .product-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1063px;
    height: 108px;
    margin-bottom: 38px;

    .product-info-container {
      display: flex;
    }

    .company-logo > img {
      display: block;
      width: 108px;
      height: 108px;
      border-radius: 50%;
      margin-right: 26px;
    }

    .product-info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .purpose {
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.4em;
        color: #ff7a00;
      }

      .product-title {
        margin-bottom: 4px;
        font-size: 24px;
        font-weight: 700;
        line-height: 1.4em;
        color: #1d1d1d;
      }

      .company-address {
        margin-bottom: 12px;
        font-size: 12px;
        font-weight: 400;
        color: #4d4d4d;
      }

      .company-rating {
        display: flex;
        align-items: center;

        .rating-icon {
          margin-right: 2px;
        }

        .rating {
          margin-right: 6px;

          font-size: 12px;
          font-weight: 700;
          color: #1d1d1d;
        }
        .review-count {
          font-size: 12px;
          font-weight: 400;
          color: #999999;
        }
      }
    }

    .product-stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 425px;
      height: 80px;
      border: 1px solid #ff7a00;
      border-radius: 8px;
      background-color: #ffefe0;

      .product-price {
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 1.4em;
        color: #1d1d1d;
      }

      .project-container {
        .current-projects,
        .total-projects {
          font-size: 14px;
          font-weight: 400;
          color: #1d1d1d;
        }

        .current-projects {
          margin-right: 27px;
        }

        .current-highlight {
          font-weight: 700;
          color: #0033ff;
        }
        .total-highlight {
          font-weight: 500;
          color: #1d1d1d;
        }
      }
    }
  }

  .product-content {
    width: 1063px;
    height: auto;
    margin-bottom: 120px;

    .service-overview {
      position: relative;
      width: 1062px;
      height: auto;
      padding: 24px 50px 24px 57px;
      margin-bottom: 40px;
      border-radius: 8px;
      background-color: #f1f1f1;

      .quotation-mark-1,
      .quotation-mark-2 {
        position: absolute;
        top: 24px;
      }
      .quotation-mark-1 {
        left: 16px;
      }
      .quotation-mark-2 {
        right: 16px;
      }

      .overview {
        font-size: 20px;
        font-weight: 500;
        line-height: 1.4em;
        color: #4d4d4d;
      }
    }

    .product-description {
      width: 1062px;
      height: auto;
      margin-bottom: 40px;
      font-size: 20px;
      font-weight: 500;
      line-height: 2em;
      color: #1d1d1d;
      background-color: white;
    }

    .refund-policy {
      width: 1062px;
      height: 168px;
      padding-top: 24px;
      background-color: #f1f1f1;

      .refund-title {
        margin-bottom: 20px;
        text-align: center;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.4em;
        color: #1d1d1d;
      }

      .refund-details {
        margin-left: 24px;
      }

      .refund-details > li {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4em;
        color: #1d1d1d;
        margin-bottom: 1px;
      }
    }
  }

  .button-container {
    position: fixed;
    bottom: 5%;
    left: 50%;
    transform: translate(-49%, 0);
    display: flex;

    .consult-button,
    .request-button {
      width: 519px;
      height: 48px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 700;
    }

    .consult-button {
      color: #ff7a00;
      background-color: white;
      border: 1px solid #ff7a00;
      margin-right: 25px;
    }

    .request-button {
      color: white;
      background-color: #ff7a00;
      border: none;
    }
  }
`;
