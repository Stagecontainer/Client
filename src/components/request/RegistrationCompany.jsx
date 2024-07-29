import InputField from "./InputField";
import LabelField from "./LabelField";
import {
  Container,
  CustomButton,
  SubmitContainer,
} from "../../styles/components/request/RegistrationCompany";
import { useRef, useState } from "react";

const RegistrationCompany = () => {
  const inputRef = useRef([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [companyInfo, setCompanyInfo] = useState({
    companyName: "",
    companyType: "",
    category: {
      costume: false,
      prop: false,
      expendables: false,
    },
    ad: "",
    poster: "",
    main: "",
    logo: "",
    price: "",
    businessNum: "",
    businessCard: "",
  });

  const [validCheck, setValidCheck] = useState({
    companyName: true,
    ad: true,
    main: true,
    price: true,
  });

  const updateValue = (key, value) => {
    const innerKey = key in companyInfo.category;

    setCompanyInfo((prevData) => {
      const newCompanyInfo = {
        ...prevData,
        [innerKey ? "category" : key]: innerKey
          ? {
              ...prevData.category,
              [key]: value,
            }
          : value,
      };
      validHandler(key, newCompanyInfo);
      setIsDisabled(disabledHandler());
      return newCompanyInfo;
    });
  };

  const disabledHandler = () => {
    for (const key in validCheck) {
      if (!validCheck[key] || companyInfo[key] === "") {
        return true; 
      }
    }
    return false; 
  };

  const validHandler = (key, updatedCompanyInfo) => {
    if (!updatedCompanyInfo[key]) {
      setValidCheck((prevData) => ({
        ...prevData,
        [key]: false,
      }));
    } else {
      setValidCheck((prevData) => ({
        ...prevData,
        [key]: true,
      }));
    }
  };

  return (
    <Container>
      <div className="field-box" style={{ width: "100%" }}>
        <LabelField label={"제작사 명"} valid={validCheck.companyName}>
          <InputField
            width={519}
            height={48}
            holderText={"예)대한의상"}
            type={"text"}
            ref={(el) => (inputRef.current[0] = el)}
            onchangeFun={updateValue}
            id={"companyName"}
          />
        </LabelField>
        <LabelField label={"유형"} valid={validCheck.type}>
          <div className="field-box" style={{ width: "519px" }}>
            <CustomButton
              width={243}
              height={40}
              radius={200}
              defaultColor={"#1D1D1D"}
              isChecked={companyInfo.companyType === "make"}
              onClick={() => {
                updateValue("companyType", "make");
                console.log("A")
              }}
              fontSize={16}
              fontWeight={500}
            >
              의뢰 제작
            </CustomButton>
            <CustomButton
              width={243}
              height={40}
              radius={200}
              isChecked={companyInfo.companyType === "sell"}
              onClick={() => {
                updateValue("companyType", "sell");
              }}
              fontSize={16}
              fontWeight={500}
            >
              중고 판매/대여
            </CustomButton>
          </div>
        </LabelField>
      </div>
      <LabelField label={"카테고리"} valid={validCheck.category}>
        <div className="field-box" style={{ width: "1062px" }}>
          <CustomButton
            width={243}
            height={40}
            radius={200}
            isChecked={companyInfo.category.costume}
            onClick={() =>
              updateValue("costume", !companyInfo.category.costume)
            }
            fontSize={16}
            fontWeight={500}
          >
            의상
          </CustomButton>
          <CustomButton
            width={243}
            height={40}
            radius={200}
            isChecked={companyInfo.category.prop}
            onClick={() => updateValue("prop", !companyInfo.category.prop)}
            fontSize={16}
            fontWeight={500}
          >
            소품
          </CustomButton>
          <CustomButton
            width={243}
            height={40}
            radius={200}
            isChecked={companyInfo.category.expendables}
            onClick={() =>
              updateValue("expendables", !companyInfo.category.expendables)
            }
            fontSize={16}
            fontWeight={500}
          >
            소모품
          </CustomButton>
        </div>
      </LabelField>
      <LabelField label={"홍보내용"} valid={validCheck.ad}>
        <InputField
          type="textarea"
          width={1062}
          height={140}
          holderText={"제작사의 포트폴리오나 어필 내용을 입력해주세요"}
          ref={(el) => (inputRef.current[1] = el)}
          id={"ad"}
          onchangeFun={updateValue}
        />
      </LabelField>
      <LabelField label={"홍보 포스터"}>
        <InputField
          type="file"
          width={1062}
          height={48}
          holderText={
            "홍보 포스터나 페이지의 경우, 이곳에 등록해주세요(파일형식: pdf, png, jpg...)"
          }
          ref={(el) => (inputRef.current[2] = el)}
          id={"poster"}
        />
      </LabelField>
      <LabelField label={"메인 홍보 문구"} valid={validCheck.main}>
        <InputField
          type="text"
          width={1062}
          height={48}
          holderText={"최상단에 띄울 홍보 문구를 입력해주세요"}
          id={"main"}
          onchangeFun={updateValue}
        />
      </LabelField>
      <LabelField label={"로고 파일"}>
        <InputField
          type="file"
          width={1062}
          height={48}
          holderText={"로고 파일을 등록해주세요(파일형식: pdf, png, jpg...)"}
          id={"logo"}
        />
      </LabelField>
      <LabelField label={"가격"} valid={validCheck.price}>
        <InputField
          type="text"
          width={1062}
          height={48}
          holderText={"상품의 가격 또는 최소 의뢰 비용을 입력해주세요"}
          ref={(el) => (inputRef.current[3] = el)}
          id={"price"}
          onchangeFun={updateValue}
        />
      </LabelField>
      <LabelField label={"사업자 번호"}>
        <InputField
          type="text"
          width={1062}
          height={48}
          holderText={"사업자 번호를 입력해주세요"}
          ref={(el) => (inputRef.current[4] = el)}
          id={"bussinessNum"}
          onchangeFun={updateValue}
        />
      </LabelField>
      <LabelField label={"사업자 등록증"}>
        <InputField
          type="file"
          width={1062}
          height={48}
          holderText={"사업자 등록증 사본을 등록해주세요(pdf)"}
          ref={(el) => (inputRef.current[5] = el)}
          id={"businessCard"}
        />
      </LabelField>
      <SubmitContainer>
        <CustomButton
          width={1062}
          height={60}
          radius={8}
          isChecked={true}
          disabled={isDisabled}
          fontSize={20}
          fontWeight={600}
        >
          제작자 등록 신청
        </CustomButton>
        <div>
          <span
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            · 작성해주신 내용을 바탕으로 ‘무대창고’에서 심사를 거치고 제작사에
            연락 및 방문할 수도 있습니다.
          </span>
          <span>
            · 홍보 이미지와 로고 파일의 경우, 없어도 등록신청과 심사에 문제
            없습니다.
          </span>
          <span>
            · 중고 판매 및 대여의 경우, 사업자 번호와 등록증이 없어도
            가능합니다.
          </span>
          <span>· 심사 기간은 2~3일 정도 소요됩니다.</span>
        </div>
      </SubmitContainer>
    </Container>
  );
};

export default RegistrationCompany;
