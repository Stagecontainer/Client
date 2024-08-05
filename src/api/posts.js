import instance from "./instance";

export const getPosts = async () => {
  const response = await instance.get("/posts");
  return response;
};
