import axios from "axios";

// const userToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyODQ3MzU3LCJpYXQiOjE3MjI3NjA5NTcsImp0aSI6IjBmZWEwYWIxNTAxYTQ5NWM5NDcxMzAwY2EyMWQ5Zjk2IiwidXNlcl9pZCI6Miwibmlja25hbWUiOiJcdWQ1NThcdWIwZTVcdWM3NzQifQ.EDJ5RBHWH6JtD_AnZuJD5v7abBqwT1IUqpX0xEd2u1s";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyOTQwNzI2LCJpYXQiOjE3MjI4NTQzMjYsImp0aSI6ImIyM2QxZTExNjZkYzQxNDZhNGZjMGJkM2E2ZTUwOWNiIiwidXNlcl9pZCI6Miwibmlja25hbWUiOiJcdWQ1NThcdWIwZTVcdWM3NzQifQ.UofceIUHmIQaq7XixBgW43V6xUNa42NJVH2k0hHd1P0";

const nickName = "하냥이";

export const getUserId = async () => {
  const response = await axios.get(
    `https://port-0-server-1272llx0bndkw.sel5.cloudtype.app/users/get_user_id/?nickname=${nickName}`,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    }
  );

  return response;
};

export const sendMessage = async (messageData) => {
  const response = await axios.post(
    "https://port-0-server-1272llx0bndkw.sel5.cloudtype.app/chat/message/",
    messageData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
  return response;
};

export const getChatRoomList = async () => {
  const response = await axios.get(
    "https://port-0-server-1272llx0bndkw.sel5.cloudtype.app/chat/rooms/",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
  return response;
};

export const getChatRoom = async (roomId) => {
  const response = await axios.get(
    `https://port-0-server-1272llx0bndkw.sel5.cloudtype.app/chat/room/${roomId}/`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
  return response;
};
