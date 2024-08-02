import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { product } from "../../assets/mock-data/product-mock-data";
import notFoundImg from "../../assets/product/image-not-found.png";
import ratingIcon from "../../assets/product/rating-icon.svg";

const SearchDetailPage = () => {
  const { id } = useParams();
  return (
    <Container>
      <div className="reference-image">
        <div className="representative-image-container">
          <img
            className="representative-image"
            src={
              product.images[0]?.image ? product.images[0].image : notFoundImg
            }
            alt=""
          />
        </div>
        <div className="product-images">
          {product.images
            .filter((_, idx) => idx !== 0)
            .map((_, idx) => (
              <img
                className="product-image"
                key={product.images.image_id}
                src={
                  product.images[idx + 1]?.image
                    ? product.images[idx + 1].image
                    : notFoundImg
                }
              />
            ))}
        </div>
      </div>

      <div className="product-header">
        <div className="company-logo">
          <img src={product.company_img} alt="company-logo" />
        </div>
        <div className="product-info">
          <div className="purpose">{product.purpose}</div>
          <h2 className="product-title">{product.title}</h2>
          <span className="company-address">{product.address}</span>
          <div className="company-rating">
            <img className="rating-icon" src={ratingIcon} alt="rating-icon" />
            <strong className="rating">{product.rating}</strong>
            <span className="review-count">123명 평가</span>
          </div>
        </div>
        <div className="product-stats">
          <div className="product-price">{product.price}~</div>
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
            <img src="" alt="" />
          </div>
          <div className="quotation-mark-2">
            <img src="" alt="" />
          </div>
          <p className="overview">{product.content}</p>
        </div>

        <div className="product-description">
          <p>
            여성복, · 남성복, 캐쥬얼, 유.아동복등 모든 옷의 패턴제작, 샘플제작,
            소량생산을 하고 있습니다. <br />
            개성있는 스트릿의류, 핏이 중요한 여성복, 박시한 유니섹스의류,
            큐티하고 <br />
            엘레강스한 유,아동복, 정밀한 아웃도어및 스포츠웨어, 활동성이 좋은
            맨투맨과 후드티, <br />
            전통미 가득한 개량한복, 패딩과 다운의류등 원하시는 모든 의류를
            개발하고 있습니다 <br />
          </p>
        </div>

        <div className="refund-policy">
          <h3 className="refund-title">환불/취소 규정</h3>
          <ul className="refund-details">
            <li>
              제공자와 신청자가 상호 협의한 경우 이미 시작한 커미션을 취소할 수
              있어요. 이 경우 환불 금액은 상호 협의한 금액에 따릅니다.
            </li>
            <li>
              이용 약관에 따라 커미션주의 귀책 사유로 커미션이 취소될 경우
              신청자는 결제 금액 전액을 환불받을 수 있습니다
            </li>
            <li>
              이용 약관에 따라 신청자의 귀책 사유로 커미션이 취소될 경우 환불이
              제한될 수 있습니다.
            </li>
          </ul>
        </div>
      </div>

      <div className="button-container">
        <Link to={`/company/products/${id}/chat`}>
          <button className="consult-button">상담하기</button>
        </Link>
        <Link to={`/company/products/${id}/order-request`}>
          <button className="request-button">의뢰서 작성</button>
        </Link>
      </div>
    </Container>
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
  background-color: skyblue;

  .reference-image {
    display: flex;
    width: 1063px;
    height: 396px;
    margin-bottom: 42px;

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
    width: 1063px;
    height: 108px;
    margin-bottom: 38px;

    .company-logo {
      margin-right: 26px;
    }

    .product-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 74px;

      .purpose {
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 500;
        color: #ff7a00;
      }

      .product-title {
        margin-bottom: 4px;
        font-size: 24px;
        font-weight: 700;
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
    margin-bottom: 110px;

    .service-overview {
      width: 1062px;
      height: 104px;
      margin-bottom: 40px;
      background-color: #f1f1f1;
    }

    .product-description {
      width: 940px;
      height: auto;
      margin-bottom: 96px;
      background-color: white;
    }

    .refund-policy {
      width: 1062px;
      height: 168px;
      background-color: #f1f1f1;
    }
  }

  .button-container {
    position: fixed;
    bottom: 8%;
    left: 50%;
    transform: translate(-50%, 0);
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
