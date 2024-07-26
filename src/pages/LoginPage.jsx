import styled from "styled-components";
import { Container, Form, Input } from "../styles/components/loginjoin/LoginJoinPage";
import Label from "../components/form/Label";
import { Button } from "../components/form/LoginJoinButton";
import {
  ButtonWrapper
} from "../styles/components/loginjoin/LoginJoinButton";
import React, { useState } from "react";
import { useNavigate } from "react-router";


const LoginPage = () => {
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    console.log('로그인 시도:', id, pw);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>

        <div className="Title">로그인</div>
        <div className="Wrap">
          <Label label={"아이디"}>
            <Input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디를 입력해주세요" />
          </Label>
          <Label label={"비밀번호"} style={{marginTop:"12px"}}>
            <Input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="비밀번호를 입력해주세요" />
          </Label>
        </div>

        <ButtonWrapper>
          <Button
            type="submit" onClick={()=>navigate("/join")}>
            로그인
          </Button>
          <Button
            type="join" onClick={() => navigate("/join")}>
            회원가입
          </Button>
        </ButtonWrapper>

      </Form>
    </Container>

  );

};

export default LoginPage;
