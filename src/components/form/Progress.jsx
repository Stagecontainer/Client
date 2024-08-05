import Head from "../../styles/components/loginjoin/Progress"
import Boldright from "../../assets/icon/boldright-icon.svg?react";

const Progress = ({currentStep}) => {

    return (
        <Head>
            <span className={currentStep === "agree" ? "active" : ""}>정보동의</span>
            <Boldright />
            <span className={currentStep === "user" ? "active" : ""}>인적사항</span>
            <Boldright />
            <span className={currentStep === "success" ? "active" : ""}>가입완료</span>
        </Head>

    );
};

export default Progress;