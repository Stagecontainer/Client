import instance from "./instance";

export const getUsername = async() => {
    const response = await instance.get('/username');
    return response.data;
}

/* export const [methodType + apiName] = async ({ requestData : optional }) => {
    const response = await instance.get[put,post,delete...]('url', requestData);
    return response.data; <- status 등이 필요하면 response 만 받아서 사용해도 무관
}
*/

// fileName은 비슷한 api끼리 묶어서