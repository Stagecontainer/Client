import Head from "../../styles/components/loginjoin/Progress"
import Boldright from "../../assets/icon/boldright-icon.svg?react";

const Progress = () => {

    return (
        <Head>
            <span className="active">정보동의</span>
            <Boldright />
            <span>인적사항</span>
            <Boldright />
            <span>가입완료</span>
        </Head>

    );
};

export default Progress;