import InputField from "./InputField";
import LabelField from "./LabelField";
import {
  Container,
  CustomButton,
  SubmitContainer
} from "../../styles/components/request/RegistrationCompany";
import { useState } from "react";

const RegistrationCompany = () => {
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
    logo: "",
    price: "",
    businessNum: "",
    businessCard: "",
  });

  const updateValue = (key, value) => {
    setCompanyInfo((prevData) => {
      if (key in prevData.category) {
        return {
          ...prevData,
          category: {
            ...prevData.category,
            [key]: value,
          },
        };
      }
      return {
        ...prevData,
        [key]: value,
      };
    });
  };

  return (
    <Container>
      <div className="field-box" style={{ width: "100%" }}>
        <LabelField label={"제작사 명"}>
          <InputField
            width={519}
            height={48}
            holderText={"예)대한의상"}
            type={"text"}
          />
        </LabelField>
        <LabelField label={"유형"}>
          <div className="field-box" style={{ width: "519px" }}>
            <CustomButton
              width={243}
              height={40}
              radius={200}
              isChecked={companyInfo.companyType === "make"}
              onClick={() => {
                updateValue("companyType", "make");
              }}
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
            >
              중고 판매/대여
            </CustomButton>
          </div>
        </LabelField>
      </div>
      <LabelField label={"카테고리"}>
        <div className="field-box" style={{ width: "1062px" }}>
          <CustomButton
            width={243}
            height={40}
            radius={200}
            isChecked={companyInfo.category.costume}
            onClick={() =>
              updateValue("costume", !companyInfo.category.costume)
            }
          >
            의상
          </CustomButton>
          <CustomButton
            width={243}
            height={40}
            radius={200}
            isChecked={companyInfo.category.prop}
            onClick={() => updateValue("prop", !companyInfo.category.prop)}
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
          >
            소모품
          </CustomButton>
        </div>
      </LabelField>
      <LabelField label={"홍보내용"}>
        <InputField
          type="textarea"
          width={1062}
          height={140}
          holderText={"제작사의 포트폴리오나 어필 내용을 입력해주세요"}
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
        />
      </LabelField>
      <LabelField label={"메인 홍보 문구"}>
        <InputField
          type="text"
          width={1062}
          height={48}
          holderText={"최상단에 띄울 홍보 문구를 입력해주세요"}
        />
      </LabelField>
      <LabelField label={"로고 파일"}>
        <InputField
          type="file"
          width={1062}
          height={48}
          holderText={"로고 파일을 등록해주세요(파일형식: pdf, png, jpg...)"}
        />
      </LabelField>
      <LabelField label={"가격"}>
        <InputField
          type="text"
          width={1062}
          height={48}
          holderText={"상품의 가격 또는 최소 의뢰 비용을 입력해주세요"}
        />
      </LabelField>
      <LabelField label={"사업자 번호"}>
        <InputField
          type="text"
          width={1062}
          height={48}
          holderText={"사업자 번호를 입력해주세요"}
        />
      </LabelField>
      <LabelField label={"사업자 등록증"}>
        <InputField
          type="file"
          width={1062}
          height={48}
          holderText={"사업자 등록증 사본을 등록해주세요(pdf)"}
        />
      </LabelField>
      <SubmitContainer>
        <CustomButton width={1062} height={60} radius={8} isChecked={true}>
          제작자 등록 신청
        </CustomButton>
        <div>
          <span style={{display : "flex", flexDirection : "column", gap : "14px"}}>
            · 작성해주신 내용을 바탕으로 ‘무대창고’에서 심사를 거치고 제작사에
            연락 및 방문할 수도 있습니다.
          </span>
          <span>· 심사 기간은 2~3일 정도 소요됩니다.</span>
        </div>
      </SubmitContainer>
    </Container>
  );
};

export default RegistrationCompany;
