import Head from "../../styles/components/loginjoin/Progress"
import Boldright from "../../assets/icon/boldright-icon.svg?react";

const Progress = ({currentStep}) => {

    return (
        <Head>
            <span className={currentStep === "정보동의" ? "active" : ""}>정보동의</span>
            <Boldright />
            <span className={currentStep === "인적사항" ? "active" : ""}>인적사항</span>
            <Boldright />
            <span className={currentStep === "가입완료" ? "active" : ""}>가입완료</span>
        </Head>

    );
};

export default Progress;