import styled from "styled-components";
import theme from "../../styles/theme"
import { Container, Form } from "../../styles/components/loginjoin/LoginJoinPage";
import LoginJoinButton from "../../components/form/LoginJoinButton";
import Progress from "../../components/form/Progress";
import RequiredAgreements from "../../components/form/RequiredAgreements";
import { ButtonWrapper } from "../../styles/components/loginjoin/LoginJoinButton";
import { useNavigate } from "react-router";
import React, { useState } from 'react';

const AgreementPage = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(
    {
      terms: false,
      personal: false
    }
  );
  const handleClick = (key) => {
    setIsActive((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Container>
      <Form>

        <div className="title">회원가입</div>
        <Progress currentStep={"agree"} />
        <div className="join-wrap">
          <RequiredAgreements 
            text={"이용약관 동의"}
            marginBottom="24px"
            isActive={isActive.terms}
            onClick={() => handleClick('terms')}
          />

          <RequiredAgreements
            text={"개인정보처리방침 동의"}
            isActive={isActive.personal}
            onClick={() => handleClick('personal')}
            />
        </div>

        <ButtonWrapper>
          <LoginJoinButton
            text={"다음 단계"}
            textColor={theme.color.gray0}
            bgColor={theme.color.main}
            isDisabled={!(isActive.terms && isActive.personal)}
            onClick={() => navigate("/join/user")}
          />
        </ButtonWrapper>

      </Form>
    </Container>

  );
}

export default AgreementPage;