import instance from "./instance";

export const getPosts = async () => {
  const response = await instance.get("/posts");
  return response;
};

export const Posts = async (payload) => {
  const response = await instance.post("/posts/", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    transformRequest: [
      function () {
        return payload;
      },
    ],
  });
  return response;
};
