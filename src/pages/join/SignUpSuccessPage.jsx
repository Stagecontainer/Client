import styled from "styled-components";
import theme from "../../styles/theme"
import { Container, Form } from "../../styles/components/loginjoin/LoginJoinPage";
import LoginJoinButton from "../../components/form/LoginJoinButton";
import Progress from "../../components/form/Progress";
import { ButtonWrapper } from "../../styles/components/loginjoin/LoginJoinButton";
import { useNavigate } from "react-router";
import SuccessImg from "../../assets/success.png";

const SignUpSuccessPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
        <Form>
  
          <div className="title">회원가입</div>
          <Progress currentStep={"가입완료"} />
          <div style={{margin: "24px 0", display:"flex", width: "100%", justifyContent:"center" }}>
            <img src={SuccessImg} alt="Success" style={{}} />  
          </div>
  
          <ButtonWrapper>
            <LoginJoinButton
              text={"로그인 하러가기"}
              textColor={theme.color.gray0}
              bgColor={theme.color.main}
              onClick={() => navigate("/login")}
            />
            <LoginJoinButton
              text={"메인으로 돌아가기"}
              textColor={theme.color.main}
              bgColor={theme.color.gray0}
              borderColor={theme.color.main}
              onClick={() => navigate("/")}
            />
          </ButtonWrapper>
  
        </Form>
      </Container>
    );
};

export default SignUpSuccessPage;