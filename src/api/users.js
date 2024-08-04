
import instance from "./instance";

export const postSignup = async(user) => {
    const response = await instance.post('/users/signup/', user);
    return response;
}
export const postLogin = async(user) => {
    const response = await instance.post('/users/login/', user);
    return response;
}
export default postSignup;