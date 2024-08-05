
import instance from "./instance";

export const postSignup = async(user) => {
    const response = await instance.post('/users/signup/', user);
    return response;
}
export const postLogin = async(user) => {
    const response = await instance.post('/users/login/', user);
    return response;
}

export const postRefresh = async(payload) => {
    const response = await instance.post('/users/login/refresh/', payload);
    return response
}

export const getUserId = async() => {
    const storage = JSON.parse(localStorage.stageContainer);
    const nick = localStorage.getItem('username')
    
    const response = await instance.get('/users/get_user_id/', {
        headers : {
            Authorization : `Bearer ${storage['user-token']}`
        },
        params : {
            nickname : nick
        }
    });

    return response;
}
export default postSignup;