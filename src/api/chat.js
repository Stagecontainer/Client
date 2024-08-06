import instance from "./instance";
import { BASE_URL } from "../constant/product";

export const createChatRoom = async (data) => {
  const response = await instance.post(`${BASE_URL}/chat/room/`, data);
  return response;
};

export const getUserId = async (nickName) => {
  const response = await instance.get(
    `${BASE_URL}/users/get_user_id/?nickname=${nickName}`
  );
  return response;
};

export const sendMessage = async (messageData) => {
  const response = await instance.post(
    `${BASE_URL}/chat/message/`,
    messageData
  );
  return response;
};

export const getChatRoomList = async () => {
  const response = await instance.get(`${BASE_URL}/chat/rooms/`);
  return response;
};

export const getChatRoom = async (roomId) => {
  const response = await instance.get(`${BASE_URL}/chat/room/${roomId}/`);
  return response;
};
