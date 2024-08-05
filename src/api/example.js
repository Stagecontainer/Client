import axios from "axios";
import { AxiosError } from "axios";
import instance from "./instance";

const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyODQ3MzU3LCJpYXQiOjE3MjI3NjA5NTcsImp0aSI6IjBmZWEwYWIxNTAxYTQ5NWM5NDcxMzAwY2EyMWQ5Zjk2IiwidXNlcl9pZCI6Miwibmlja25hbWUiOiJcdWQ1NThcdWIwZTVcdWM3NzQifQ.EDJ5RBHWH6JtD_AnZuJD5v7abBqwT1IUqpX0xEd2u1s";

export const getUsername = async () => {
  const response = await instance.get("/username");
  return response.data;
};

export const getPost = async () => {
  const response = await instance.post("/posts");
  return response;
};

export const getDetailPost = async (id) => {
  const response = await instance.get(`/posts/${id}`);
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

// jsx에서 사용
const handleGetname = async () => {
  try {
    const res = await getUsername();
    if (res.data.success) {
      // success logic
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      // error logic
    }
  }
};

/* export const [methodType + apiName] = async ({ requestData : optional }) => {
    const response = await instance.get[put,post,delete...]('url', requestData);
    return response; <- data만 필요하면 response.data를 return으로 사용해도 무관
}
*/

// fileName은 비슷한 api끼리 묶어서 적합한 단어로 저장해주세요
