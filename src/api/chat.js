import axios from "axios";

const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyODQ3MzU3LCJpYXQiOjE3MjI3NjA5NTcsImp0aSI6IjBmZWEwYWIxNTAxYTQ5NWM5NDcxMzAwY2EyMWQ5Zjk2IiwidXNlcl9pZCI6Miwibmlja25hbWUiOiJcdWQ1NThcdWIwZTVcdWM3NzQifQ.EDJ5RBHWH6JtD_AnZuJD5v7abBqwT1IUqpX0xEd2u1s";

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
