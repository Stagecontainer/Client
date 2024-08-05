import { useNavigate } from "react-router-dom";
import { Container } from "../styles/pages/NeedLoginPage";

const NeedLoginPage = () => {
    const navigate = useNavigate();
  return (
    <Container>
      <div className="modal">
        <div>
          <span>해당 서비스를 이용하기 위해서는</span>
          <br />
          <span>로그인이 필요합니다.</span>
        </div>
        <button onClick={() => navigate('/login')}>로그인하러 가기</button>
      </div>
    </Container>
  );
};

export default NeedLoginPage;
