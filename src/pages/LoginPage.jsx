import styled from "styled-components";
import theme from "../styles/theme"
import { Container, Form, LoginInput } from "../styles/components/loginjoin/LoginJoinPage";
import Label from "../components/form/Label";
import LoginJoinButton from "../components/form/LoginJoinButton";
import {
  ButtonWrapper
} from "../styles/components/loginjoin/LoginJoinButton";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { postLogin } from "../api/users";
import { AuthenticationContext } from "../contexts/user";


const LoginPage = () => {
  const {login} = useContext(AuthenticationContext);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await postLogin({
        nickname : id,
        password : pw
      })
      login(res.data);
      navigate('/')
    } catch(e) {
      console.error(e);
      alert("아이디와 비밀번호가 올바르지 않습니다.")
      setId("")
      setPw("")
    }
    
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>

        <div className="title">로그인</div>
        <div className="wrap">
          <Label label={"아이디"}>
            <LoginInput
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디를 입력해주세요" />
          </Label>
          <div style={{ margin: "12px 0" }}>
            <Label label={"비밀번호"}>
              <LoginInput
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="비밀번호를 입력해주세요" />

            </Label>
          </div>
        </div>

        <ButtonWrapper>
          <LoginJoinButton
            text={"로그인"}
            textColor={theme.color.gray0}
            bgColor={theme.color.main}
            type= "submit"
            onClick={(e) => handleSubmit(e)}
          />
          <LoginJoinButton
            text={"회원가입"}
            textColor={theme.color.gray100}
            bgColor={theme.color.gray0}
            borderColor={theme.color.gray100}
            onClick={() => navigate("/join/agree")}
          />

        </ButtonWrapper>

      </Form>
    </Container>

  );

};

export default LoginPage;
