import { useContext, useEffect, useState } from "react";
import { Container, OrderBox, OrderCard } from "../styles/components/OrderList";
import { AuthenticationContext } from "../contexts/user";
import { getUserId } from "../api/users";
import { PostsUser } from "../api/posts";
import Receipt from "../assets/icon/receipt.svg?react";
import NonImage from "../assets/icon/image.svg";

const baseURL = "https://port-0-server-1272llx0bndkw.sel5.cloudtype.app";

const OrderList = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (isAuthenticated === true) {
      handleGetOrderList(); // 로그인 되어 있을 경우에만 실행
    }
  }, []);

  const handleGetOrderList = async () => {
    try {
      const { data, status } = await getUserId();
      if (status === 200) {
        const posts = await PostsUser(data.id);
        if (posts.status === 200) setOrders(posts.data);
      }
    } catch (e) {
      //alert("불러오기 오류 발생"); // error
    }
  };
  return (
    <Container>
      <span style={{ fontSize: "14px", fontWeight: 400 }}>의뢰현황</span>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isAuthenticated ? (
          <OrderBox>
            {orders.length > 0 ? (
              orders.map((value, index) => {
                return (
                  <OrderCard key={index}>
                    <Receipt />
                    <div className="logo-box">
                      <img
                        src={
                          value.post.logo_img === null
                            ? ""
                            : baseURL + value.post.logo_img
                        }
                        alt=""
                      />
                    </div>
                    <div className="content-box">
                      <span className="request-id">{`ABCDEF12345-${value.request_id}`}</span>
                      <span className="title">{value.post.title}</span>
                      <span className="promotion">{value.post.promotion}</span>
                    </div>
                  </OrderCard>
                );
              })
            ) : (
              <span style={{ fontSize: "16px", fontWeight: 400 }}>
                현재 주문이 없습니다.
              </span>
            )}
          </OrderBox>
        ) : (
          <span style={{ fontSize: "28px", fontWeight: 400 }}>
            진행 중인 의뢰가 없습니다.
          </span>
        )}
      </div>
    </Container>
  );
};

export default OrderList;
