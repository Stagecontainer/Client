import { AxiosError } from "axios";
import instance from "./instance";

export const getUsername = async() => {
    const response = await instance.get('/username');
    return response.data;
}
export const getPost = async() => {
  const response = await instance.post('/posts');
  return response;
}
// jsx에서 사용 
const handleGetname = async () => {
    try {
      const res = await getUsername();
      if (res.data.success) {
        // success logic
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        // error logic
      }
    }
  };

/* export const [methodType + apiName] = async ({ requestData : optional }) => {
    const response = await instance.get[put,post,delete...]('url', requestData);
    return response; <- data만 필요하면 response.data를 return으로 사용해도 무관
}
*/

// fileName은 비슷한 api끼리 묶어서 적합한 단어로 저장해주세요