import styled from "styled-components";
import theme from "../../styles/theme"
import { Container, Form, Input } from "../../styles/components/loginjoin/LoginJoinPage";
import LoginJoinButton from "../../components/form/LoginJoinButton";
import Progress from "../../components/form/Progress";
import { ButtonWrapper } from "../../styles/components/loginjoin/LoginJoinButton";
import Label from "../../components/form/Label"
import { useState } from "react";




const UserDetailPage = () => {
    const [nick,setNick] = useState('');

    const [id,setId] = useState('');
    const [pw,setPw] = useState('');
    const [repw,setRepw] = useState('');

    return (
        <Container>
            <Form>

                <div className="title">회원가입</div>
                <Progress currentStep={"인적사항"} />
                <div className="wrap">
                    <Label label={"닉네임"}>
                        <Input
                            type="text"
                            value={nick}
                            onChange={(e) => setNick(e.target.value)}
                            placeholder="사용할 닉네임을 설정해주세요." />
                    </Label>
                    <div style={{ margin: "24px 0" }}/>
                    <Label label={"아이디"}>
                        <Input
                            type="text"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="아이디를 입력해주세요" />
                    </Label>
                    <div style={{ margin: "24px 0" }}/>
                    <Label label={"비밀번호"}>
                        <Input
                            type="password"
                            value={pw}
                            onChange={(e) => setPw(e.target.value)}
                            placeholder="비밀번호를 입력해주세요" />
                    </Label>
                    <div style={{ margin: "24px 0" }}/>
                        <Label label={"비밀번호 확인"}>
                            <Input
                                type="password"
                                value={repw}
                                onChange={(e) => setRepw(e.target.value)}
                                placeholder="비밀번호를 한번 더 입력해주세요" />
                        </Label>
                    
                </div>

                <ButtonWrapper>
                    <LoginJoinButton
                        text={"다음 단계"}
                        textColor={theme.color.gray0}
                        bgColor={theme.color.main}

                        onClick={() => navigate("/join/user")}
                    />
                </ButtonWrapper>

            </Form>
        </Container>


                );
};

export default UserDetailPage;