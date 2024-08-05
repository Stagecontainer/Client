import instance from "./instance";

export const createOrderRequest = async (data, userId, postId) => {
  const response = await instance.post(
    `/posts/requests/${userId}/${postId}/`,
    data
  );
  return response;
};

export const getOrderRequest = async (userId) => {
  const response = await instance.get(`/posts/requests/${userId}/`);
  response.response;
};
