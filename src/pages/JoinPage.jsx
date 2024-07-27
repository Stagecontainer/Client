import styled from "styled-components";
import theme from "../styles/theme"
import { Container, Form } from "../styles/components/loginjoin/LoginJoinPage";
import LoginJoinButton from "../components/form/LoginJoinButton";
import Progress from "../components/form/Progress";
import RequiredAgreements from "../components/form/RequiredAgreements";
import { ButtonWrapper } from "../styles/components/loginjoin/LoginJoinButton";
import { useNavigate } from "react-router";


const JoinPage = () => {
  const navigate = useNavigate();


  return (
    <Container>
      <Form>

        <div className="title">회원가입</div>
        <Progress />
        <div className="join-wrap">
          <RequiredAgreements text={"이용약관 동의"} marginBottom="12px"/>
          <RequiredAgreements text={"개인정보처리방침 동의"}/>
        </div>

        <ButtonWrapper>
          <LoginJoinButton
            text={"다음단계"}
            textColor={theme.color.gray0}
            bgColor={theme.color.main}
            
          />
        </ButtonWrapper>

      </Form>
    </Container>

  );
}

export default JoinPage;