import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { getDetailPost } from "../../api/products";
import {
  getChatRoomList,
  getUserId,
  getChatRoom,
  sendMessage,
} from "../../api/chat";
import { BASE_URL } from "../../constant/product";
import { roomId, userToken } from "../../constant/chat";

import notFoundImg_2 from "../../assets/product/image-not-found-2.png";
import menuIcon from "../../assets/order/vertical-menu-icon.svg";
import infoIcon from "../../assets/chat/info.svg";
import sharedIcon from "../../assets/chat/shared.svg";
import ratingIcon from "../../assets/product/rating-icon.svg";
import reportIcon from "../../assets/chat/report.svg";
import orderRequestIcon from "../../assets/chat/order-request.svg";
import emojiIcon from "../../assets/chat/emoji.svg";
import paperClipIcon from "../../assets/chat/paper-clip.svg";
import sendMessageIcon from "../../assets/chat/send-message.svg";

const ChattingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatRoomList, setChatRoomList] = useState([]);
  const webSocket = useRef(null);

  // useEffect(() => {
  //   const handleGetId = async () => {
  //     const response = await getUserId();
  //     console.log(response);
  //   };

  //   handleGetId();
  // }, []);

  useEffect(() => {
    const handleLoadPost = async (id) => {
      try {
        const response = await getDetailPost(id);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    handleLoadPost(id);
  }, []);

  useEffect(() => {
    webSocket.current = new WebSocket(
      `wss://port-0-server-1272llx0bndkw.sel5.cloudtype.app/ws/chat/${roomId}/?token=${userToken}`
    );

    webSocket.current.onopen = () => {
      console.log("WebSocket 연결 성공");
    };

    webSocket.current.onerror = (error) => {
      console.log(error);
    };

    webSocket.current.onclose = () => {
      console.log("WebSocket 연결 종료");
    };

    return () => {
      webSocket.current?.close();
    };
  }, [id]);

  // 실시간 채팅 불러오기
  useEffect(() => {
    const getChat = async () => {
      try {
        const response = await getChatRoom(5);
        if (response) console.log(response.data.messages);
        setMessages(response.data.messages);
      } catch (error) {
        console.error(error);
      }
    };

    getChat();
  }, [message]);

  //채팅 리스트 불러오기
  useEffect(() => {
    const getChatList = async () => {
      const response = await getChatRoomList();
      setChatRoomList(response.data);
    };

    getChatList();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (webSocket.current && message.trim() !== "") {
      const messsageData = {
        room: 5,
        message: message,
      };
      const response = await sendMessage(messsageData);
      console.log(response);
      setMessage("");
    }
  };

  const navigateToRequest = () => {
    navigate(`/company/products/${id}/order-request`, {
      state: {
        companyLogo: data.companyLogo,
        company: data.title,
      },
    });
  };

  return (
    <Container>
      <ChatRoomList>
        <h3>채팅</h3>
        <div className="chat-list">
          <ul className="chat-list">
            {chatRoomList.map((chatRoom, idx) => (
              <li key={idx}>{chatRoom.name}</li>
            ))}
          </ul>
        </div>
      </ChatRoomList>

      <ChatWindow>
        <div className="header">
          <div className="logo-container">
            <img
              src={
                data?.logo_img ? `${BASE_URL}${data.logo_img}` : notFoundImg_2
              }
              className="company-logo"
            />
            <strong className="logo-text">{data?.company}</strong>
          </div>
          <img src={menuIcon} alt="menu-icon" />
        </div>

        <ul className="chat">
          {messages.map((msg, idx) => (
            <li key={idx}>{msg.message}</li>
          ))}
        </ul>

        <span></span>
      </ChatWindow>

      <MessageInput>
        <form action="" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="내용을 입력해주세요"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="icon-container">
            <img src={emojiIcon} alt="emoji-icon" />
            <img src={paperClipIcon} alt="paper-clip-icon" />
            <button type="submit">
              <img src={sendMessageIcon} alt="paper-clip-icon" />
            </button>
          </div>
        </form>
      </MessageInput>

      <CompanyInfo>
        <div className="header">
          <img
            src={data?.logo_img ? `${BASE_URL}${data.logo_img}` : notFoundImg_2}
            alt="company-logo"
            className="big-size"
          />
          <strong className="logo-text-big">{data?.company}</strong>
          <span className="category">의상</span>
        </div>

        <div className="icon-container">
          <div className="info-container">
            <img src={infoIcon} alt="info-icon" />
            <span className="info-text">정보</span>
          </div>
          <div className="shared-container">
            <img src={sharedIcon} alt="shared-icon" />
            <span className="shared-text">공유</span>
          </div>
        </div>

        <div className="company-info">
          <div className="purpose-rating-container">
            <span className="purpose">{data?.purpose}</span>
            <img src={ratingIcon} alt="rating-icon" />
            <strong className="rating">4.9</strong>
          </div>
          <span className="address">{data?.address}</span>
        </div>

        <div className="button-container">
          <button className="report-button">
            <img src={reportIcon} alt="report-icon" />
            <span>신고하기</span>
          </button>

          <button className="request-button" onClick={navigateToRequest}>
            <img src={orderRequestIcon} alt="order-request-icon" />
            <span>의뢰서 작성</span>
          </button>
        </div>
      </CompanyInfo>
    </Container>
  );
};

export default ChattingPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 88vh;
`;

const ChatRoomList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 324px;
  height: 648px;
  padding-top: 24px;
  margin-top: 41px;
  border-right: 1px solid #f1f1f1;
  background-color: white;

  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4em;
    color: #ff7a00;
  }
`;

const ChatWindow = styled.div`
  width: 792px;
  height: 674px;
  margin-top: 15px;
  background-color: white;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 792px;
    height: 72px;
    padding: 0 24px;
    border-bottom: 2px solid #f1f1f1;

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
`;

const MessageInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 792px;
  height: 68px;
  background-color: #f1f1f1;

  form {
    display: flex;
    align-items: center;
  }

  input {
    width: 576px;
    height: 40px;
    padding: 10px 0 10px 16px;
    margin-right: 24px;
    border: none;
    border-radius: 30px;
    background-color: white;
    outline: none;
  }
  input::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4em;
    color: #aaaaaa;
  }

  .icon-container > img {
    margin-right: 24px;
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 324px;
  height: 441px;
  padding-top: 24px;
  margin-top: 36px;
  background-color: white;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;

    .big-size {
      width: 108px;
      height: 108px;
      border-radius: 50%;
      margin-bottom: 8px;
    }

    .logo-text-big {
      margin-bottom: 2px;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.4em;
      color: #1d1d1d;
    }

    .category {
      font-size: 12px;
      font-weight: 400;
      color: #ff7a00;
    }
  }

  .icon-container {
    display: flex;
    margin-bottom: 24px;

    .info-container,
    .shared-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        margin-bottom: 8px;
      }

      span {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4em;
        color: #1d1d1d;
      }
    }

    .info-container {
      margin-right: 30px;
    }
  }

  .company-info {
    margin-bottom: 24px;

    .purpose-rating-container {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      .purpose {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.4em;
        color: #1d1d1d;
        margin-right: 8px;
      }

      img {
        margin-right: 2px;
      }

      .rating {
        font-size: 12px;
        font-weight: 700;
        line-height: 1.4em;
        color: #1d1d1d;
      }
    }

    .address {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.4em;
      color: #999999;
    }
  }

  .button-container {
    display: flex;

    button {
      width: 132px;
      height: 60px;
      border: none;
      border-radius: 8px;
    }

    img {
      margin-bottom: 4px;
    }

    .report-button,
    .request-button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .report-button {
      margin-right: 12px;
      color: white;
      background-color: #ff0000;
    }

    .request-button {
      color: #ff7a00;
      border: 1px solid #ff7a00;
      background-color: white;
    }
  }
`;
