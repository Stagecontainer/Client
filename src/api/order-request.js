import instance from "./instance";

export const createOrderRequest = async (data, userId, postId) => {
  const response = await instance.post(
    `/posts/requests/${userId}/${postId}/`,
    data
  );
  return response;
};
