import instance from "./instance";

export const getDetailPost = async (id) => {
  const response = await instance.get(`/posts/${id}`);
  return response;
};
