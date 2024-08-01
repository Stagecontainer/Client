
import instance from "./instance";

export const postSignup = async(user) => {
    const response = await instance.post('/users/signup/', user);
    console.log(response);
    return response.data;
}

export default postSignup;