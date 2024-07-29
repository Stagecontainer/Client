import styled from "styled-components";
import theme from "../../styles/theme"
import { Container, Form, Input, PasswordToggle } from "../../styles/components/loginjoin/LoginJoinPage";
import LoginJoinButton from "../../components/form/LoginJoinButton";
import Progress from "../../components/form/Progress";
import { ButtonWrapper } from "../../styles/components/loginjoin/LoginJoinButton";
import Label from "../../components/form/Label"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import EyeOff from "../../assets/icon/eyeoff-icon.svg?react"
import EyeOn from "../../assets/icon/eye-icon.svg?react"



const UserDetailPage = () => {
    const navigate = useNavigate();
    const [nick, setNick] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [repw, setRepw] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isShowPassword, setShowPassword] = useState(
        {
            비밀번호: false,
            확인비밀번호: false
        }
    )
    const PasswordVisibility = (key) => {
        setShowPassword((prev) => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    useEffect(() => {
        const allFieldsFilled = nick !== '' && id !== '' && pw !== '' && repw !== '';
        const PasswordMatch = pw === repw;

        setIsFormValid(allFieldsFilled && PasswordMatch);
    }, [nick, id, pw, repw])

    const handleSubmit = (e) => {

        console.log('회원가입 시도');
        navigate("/join/success");
    };
    return (
        <Container>
            <Form onSubmit={handleSubmit}>

                <div className="title">회원가입</div>
                <Progress currentStep={"인적사항"} />
                <div className="wrap">
                    <Label label={"닉네임"}>
                        <Input
                            type="text"
                            value={nick}
                            onChange={(e) => setNick(e.target.value)}
                            placeholder="사용할 닉네임을 설정해주세요" />
                    </Label>
                    <div style={{ margin: "24px 0" }} />
                    <Label label={"아이디"}>
                        <Input
                            type="text"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="아이디를 입력해주세요" />
                    </Label>
                    <div style={{ margin: "24px 0" }} />
                    <Label label={"비밀번호"}>
                        <Input
                            type={isShowPassword.비밀번호 ? "text" : "password"}
                            value={pw}
                            onChange={(e) => setPw(e.target.value)}
                            placeholder="비밀번호를 입력해주세요" >

                        </Input>
                        <PasswordToggle onClick={() => PasswordVisibility('비밀번호')}>
                            {isShowPassword.비밀번호 ? <EyeOn /> : <EyeOff />}
                        </PasswordToggle>


                    </Label>
                    <div style={{ margin: "24px 0" }} />
                    <Label label={"비밀번호 확인"}>
                        <Input
                            type={isShowPassword.확인비밀번호 ? "text" : "password"}
                            value={repw}
                            onChange={(e) => setRepw(e.target.value)}
                            placeholder="비밀번호를 한번 더 입력해주세요" />
                        <PasswordToggle onClick={() => PasswordVisibility('확인비밀번호')}>
                            {isShowPassword.확인비밀번호 ? <EyeOn /> : <EyeOff />}
                        </PasswordToggle>
                    </Label>

                </div>

                <ButtonWrapper>
                    <LoginJoinButton
                        text={"다음 단계"}
                        textColor={theme.color.gray0}
                        bgColor={theme.color.main}
                        isDisabled={!isFormValid}
                        onClick={(e) => handleSubmit()}
                        type="submit"
                    />
                </ButtonWrapper>

            </Form>
        </Container>


    );
};

export default UserDetailPage;