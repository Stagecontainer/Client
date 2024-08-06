import axios from "axios";
import { BASE_URL } from "../constant/product";

const tokens = JSON.parse(localStorage.stageContainer);
// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyOTQwNzI2LCJpYXQiOjE3MjI4NTQzMjYsImp0aSI6ImIyM2QxZTExNjZkYzQxNDZhNGZjMGJkM2E2ZTUwOWNiIiwidXNlcl9pZCI6Miwibmlja25hbWUiOiJcdWQ1NThcdWIwZTVcdWM3NzQifQ.UofceIUHmIQaq7XixBgW43V6xUNa42NJVH2k0hHd1P0`;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${tokens["user-token"]}`,
  // Authorization: `Bearer ${token}`,
};

export const createChatRoom = async (data) => {
  const response = await axios.post(`${BASE_URL}/chat/room/`, data, {
    headers,
  });
  return response;
};

export const getUserId = async () => {
  const response = await axios.get(
    `${BASE_URL}/users/get_user_id/?nickname=${nickName}`,
    { headers }
  );
  return response;
};

export const sendMessage = async (messageData) => {
  const response = await axios.post(`${BASE_URL}/chat/message/`, messageData, {
    headers,
  });
  return response;
};

export const getChatRoomList = async () => {
  const response = await axios.get(`${BASE_URL}/chat/rooms/`, { headers });
  return response;
};

export const getChatRoom = async (roomId) => {
  const response = await axios.get(`${BASE_URL}/chat/room/${roomId}/`, {
    headers,
  });
  return response;
};
