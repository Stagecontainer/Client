import axios from "axios";
import { BASE_URL } from "../constant/product";

const tokens = JSON.parse(localStorage.stageContainer);

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${tokens["user-token"]}`,
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
