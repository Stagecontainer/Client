import styled from "styled-components";
import { Container, Form, Progress } from "../styles/components/loginjoin/LoginJoinPage";
import { Button } from "../components/form/LoginJoinButton";
import {
  ButtonWrapper
} from "../styles/components/loginjoin/LoginJoinButton";
import { useNavigate } from "react-router";
import Boldright from "../assets/icon/boldright-icon.svg?react";


const JoinPage = () => {
    const navigate = useNavigate();
  
  
    return (
      <Container>
        <Form>
  
          <div className="Title">회원가입</div>
          <Progress>
                <span className="Active">정보동의</span>
                <Boldright/>
                <span>인적사항</span>
                <Boldright/>
                <span>가입완료</span>
            </Progress>
          <div className="Wrap">

          </div>
  
          <ButtonWrapper>
            <Button
              type="submit" onClick={() => navigate("/join")}>
              다음단계
            </Button>
          </ButtonWrapper>
  
        </Form>
      </Container>
  
    );
}

export default JoinPage;