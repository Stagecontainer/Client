import { useNavigate } from "react-router-dom";
import DoneImg from "../../assets/done.png";
import {Container, Button} from "../../styles/pages/RegistCompletePage";
const RegistCompletePage = () => {
    const navigate = useNavigate();
  return (
    <Container>
      <img src={DoneImg} />
      <span className="title">등록 신청이 완료되었습니다.</span>
      <div className="content">
        <span>등록 절차는 주기적으로 업데이트되서 반영될 예정이며</span>
        <br />
        <span>최종 기간은 제작사마다 상이하지만 평균 2~3일 정도 소요됩니다.</span>
      </div>
      <div className="button-box">
        <Button disabled>진행사항 확인하기</Button>
        <Button onClick={() => navigate('/company')}>메인으로 돌아가기</Button>
      </div>
    </Container>
  );
};

export default RegistCompletePage;
