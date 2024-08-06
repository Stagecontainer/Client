import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { getDetailPost } from "../../api/products";
import { getChatRoomList, getChatRoom, sendMessage } from "../../api/chat";
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
import chatRoomImg from "../../assets/chat/chat-room.svg";

const ChattingPage = () => {
  const { id } = useParams();
  const webSocket = useRef(null);

  const [data, setData] = useState(null);
  const [companyId, setCompanyId] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState("");
  const [chatRoomList, setChatRoomList] = useState([]);

  useEffect(() => {
    const handleLoadPost = async (id) => {
      try {
        const response = await getDetailPost(id);
        setData(response.data);
        setCompanyId(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    handleLoadPost(id);
  }, [id]);

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
        if (companyId) {
          const response = await getChatRoom(companyId);
          setMessages(response.data.messages);
          if (response.data.messages.length > 0) {
            setSender(response.data.messages[0].sender);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    getChat();
  }, [companyId]);

  // 속해 있는 채팅방 리스트 불러오기
  useEffect(() => {
    const getChatList = async () => {
      const response = await getChatRoomList();
      setChatRoomList(response.data);
      console.log(response.data);
    };

    getChatList();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (companyId) {
      const messsageData = {
        room: companyId,
        message: message,
      };
      const response = await sendMessage(messsageData);
      console.log(response);
      setMessage("");
      setMessages((prevMessages) => [...prevMessages, { sender, message }]);
    }
  };

  return (
    <Container>
      <ChatRoomList>
        <h3>채팅</h3>
        <ul className="chat-list">
          {data &&
            chatRoomList.map((chatRoom, idx) => (
              <li
                className={
                  chatRoom.name === data.company
                    ? "select-chat-room"
                    : "chat-room"
                }
                key={idx}
              >
                <img src={chatRoomImg} />
                <div className="chat-info">
                  <h4>{chatRoom.name}</h4>
                  <span>
                    {chatRoom.last_message?.message
                      ? chatRoom.last_message.message
                      : "새로운 채팅방입니다"}
                  </span>
                </div>
              </li>
            ))}
        </ul>
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
            <li
              className={msg.sender === sender ? "user" : "company"}
              key={idx}
            >
              {msg.message}
            </li>
          ))}
        </ul>

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
      </ChatWindow>

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

          <Link to={`/company/products/${id}/order-request`}>
            <button className="request-button">
              <img src={orderRequestIcon} alt="order-request-icon" />
              <span>의뢰서 작성</span>
            </button>
          </Link>
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
  overflow: auto;

  h3 {
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4em;
    color: #ff7a00;
  }

  .chat-list {
    display: flex;
    flex-direction: column;
    gap: 12px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }

    .select-chat-room,
    .chat-room {
      display: flex;
      align-items: center;
      width: 300px;
      height: 68px;
      padding-left: 10px;
      border-radius: 6px;
    }

    .select-chat-room {
      border: 1px solid #f1f1f1;
      background-color: white;
    }

    .chat-room {
      background-color: #f1f1f1;
    }
    .chat-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 38px;
      h4 {
        font-size: 12px;
        font-weight: 700;
        line-height: 1.4em;
        color: #ff7a00;
      }
      span {
        font-size: 12px;
        font-weight: 400;
        line-height: 1.4em;
        color: #999999;
      }
    }
  }
`;

const ChatWindow = styled.div`
  position: relative;
  width: 792px;
  height: 88vh;
  margin-top: 15px;
  background-color: white;
  box-sizing: border-box;
  overflow: auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: inherit;
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

  .chat {
    display: flex;
    flex-direction: column;
    width: inherit;
    gap: 15px;
    padding: 24px 24px 0 24px;
    box-sizing: border-box;

    .user,
    .company {
      max-width: 360px;
      padding: 12px;
      line-height: 1.4em;
    }

    .user {
      align-self: flex-end;
      background-color: #ff7a00;
      color: white;
      border-radius: 10px 10px 0 10px;
    }

    .company {
      align-self: flex-start;
      background-color: #e1e1e1;
      color: #1d1d1d;
      border-radius: 10px 10px 10px 0;
    }
  }
`;

const MessageInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
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

  a {
    all: unset;
  }

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
