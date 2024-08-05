import InputField from "./InputField";
import LabelField from "./LabelField";
import {
  Container,
  CustomButton,
  SubmitContainer,
  CustomSubmitButton
} from "../../styles/components/request/RegistrationCompany";
import { useRef, useState, useContext, useEffect } from "react";
import FileField from "./FileField";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/user";
import { Posts } from "../../api/posts";

const RegistrationCompany = () => {
  const navigate = useNavigate();
  const { userid } = useContext(AuthenticationContext);
  const inputRef = useRef([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [fileInfo, setFileInfo] = useState({
    content_img: [],
    logo_img: [],
    images: [],
    company_img: [],
  });

  const [companyInfo, setCompanyInfo] = useState({
    company: "",
    purpose: "",
    category: "",
    content: "",
    address: "",
    title: "",
    promotion: "",
    price: "",
    company_num: "",
  });

  const [validCheck, setValidCheck] = useState({
    company: true,
    purpose: true,
    category: true,
    address: true,
    title: true,
    content: true,
    promotion: true,
    price: true,
  });

  useEffect(() => {
    submitCheck(companyInfo.purpose, companyInfo);
  }, [companyInfo, fileInfo]);

  const updateValue = (key, value) => {
    setCompanyInfo((prevData) => {
      const newCompanyInfo = {
        ...prevData,
        [key]: value,
      };
      validHandler(key, newCompanyInfo);
      return newCompanyInfo;
    });
    submitCheck();
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

  const submitCheck = (purpose) => {
    const isValid =
      companyInfo.company &&
      companyInfo.address &&
      companyInfo.purpose &&
      companyInfo.category &&
      companyInfo.title &&
      companyInfo.promotion &&
      companyInfo.price;

    const onlyValid =
      (companyInfo.content === "" && fileInfo.content_img.length === 0) ||
      (companyInfo.content !== "" && fileInfo.content_img.length !== 0)
        ? false
        : true;
    if (purpose === "의뢰 제작") {
      setIsDisabled(
        isValid === "" ||
          companyInfo.company_num === "" ||
          fileInfo.company_img.length === 0 || onlyValid === false
      );
    } else {
      console.log((isValid === "" || onlyValid === false) ? true : false)
      setIsDisabled((isValid === "" || onlyValid === false) ? true : false);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // FormData 객체 생성
    const formData = new FormData();

    // 기존 파일 정보 업데이트
    const updatedFileInfo = Object.keys(fileInfo).reduce((acc, key) => {
      acc[key] = fileInfo[key].length > 0 ? fileInfo[key] : null; // 빈 배열이면 null로 설정
      return acc;
    }, {});

    // 요청 정보 구성
    const requestInfo = {
      ...companyInfo,
      user: userid,
    };

    // 일반 요청 정보 추가
    Object.keys(requestInfo).forEach((key) => {
      formData.append(key, requestInfo[key]);
    });

    // 파일 정보 추가 (여러 개의 이미지 처리)
    Object.keys(updatedFileInfo).forEach((key) => {
      if (updatedFileInfo[key]) {
        updatedFileInfo[key].forEach((file, index) => {
          if (key === "images")
            formData.append(key.slice(0, -1) + (index + 1), file);
          else formData.append(key, file);
        });
      } else {
        formData.append(key, "");
      }
    });

    console.log("FormData 내용:", Array.from(formData.entries())); // FormData 내용 확인

    try {
      const { status } = await Posts(formData); // FormData 전송
      if (status === 201) navigate("/company/regist/complete");
    } catch (e) {
      alert("등록 오류"); // 오류 처리
    }
    // navigate("/company/regist/complete"); // 필요 시 네비게이션
  };

  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <div className="field-box" style={{ width: "100%" }}>
        <LabelField label={"제작사 명"} valid={validCheck.company}>
          <InputField
            width={519}
            height={48}
            holderText={"예)대한의상"}
            type={"text"}
            onchangeFun={updateValue}
            id={"company"}
          />
        </LabelField>
        <LabelField label={"유형"} valid={validCheck.purpose}>
          <div className="field-box" style={{ width: "519px" }}>
            <CustomButton
              width={150}
              height={40}
              radius={200}
              defaultColor={"#1D1D1D"}
              isChecked={companyInfo.purpose === "의뢰 제작"}
              onClick={() => {
                updateValue("purpose", "의뢰 제작");
                submitCheck();
              }}
              fontSize={16}
              fontWeight={500}
            >
              의뢰 제작
            </CustomButton>
            <CustomButton
              width={150}
              height={40}
              radius={200}
              isChecked={companyInfo.purpose === "중고 판매"}
              onClick={() => {
                updateValue("purpose", "중고 판매");
              }}
              fontSize={16}
              fontWeight={500}
            >
              중고 판매
            </CustomButton>
            <CustomButton
              width={150}
              height={40}
              radius={200}
              isChecked={companyInfo.purpose === "중고 대여"}
              onClick={() => {
                updateValue("purpose", "중고 대여");
              }}
              fontSize={16}
              fontWeight={500}
            >
              중고 대여
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
            isChecked={companyInfo.category === "의상"}
            onClick={() => {
              updateValue("category", "의상");
            }}
            fontSize={16}
            fontWeight={500}
          >
            의상
          </CustomButton>
          <CustomButton
            width={243}
            height={40}
            radius={200}
            isChecked={companyInfo.category === "소품"}
            onClick={() => {
              updateValue("category", "소품");
            }}
            fontSize={16}
            fontWeight={500}
          >
            소품
          </CustomButton>
          <CustomButton
            width={243}
            height={40}
            radius={200}
            isChecked={companyInfo.category === "소모품"}
            onClick={() => {
              updateValue("category", "소모품");
            }}
            fontSize={16}
            fontWeight={500}
          >
            소모품
          </CustomButton>
        </div>
      </LabelField>
      <LabelField label={"주소"} valid={validCheck.address}>
        <InputField
          type="text"
          width={1062}
          height={48}
          holderText={"판매처 주소를 입력해주세요"}
          id={"address"}
          onchangeFun={updateValue}
        />
      </LabelField>
      <LabelField label={"게시글 제목"} valid={validCheck.title}>
        <InputField
          type="text"
          width={1062}
          height={48}
          holderText={"예)중고 의상 판매합니다"}
          id={"title"}
          onchangeFun={updateValue}
        />
      </LabelField>
      <LabelField
        label={"홍보내용"}
        valid={validCheck.content}
        subText={
          "홍보 텍스트와 포트폴리오는 함께 등록할 수 없으므로 <span class=span-blue>하나만</span> 작성해주세요."
        }
      >
        <InputField
          type="textarea"
          width={1062}
          height={48}
          holderText={"제작사의 포트폴리오나 어필 내용을 입력해주세요"}
          ref={(el) => (inputRef.current[1] = el)}
          id={"content"}
          onchangeFun={updateValue}
        />
        <FileField
          width={1062}
          height={48}
          holderText={
            "미리 제작된 포트폴리오를 등록해주세요(파일형식: pdf, png, jpg...)"
          }
          id={"content_img"}
          file={fileInfo.content_img}
          setFile={setFileInfo}
          accept={".pdf, .png, .jpg, .jpeg"}
          maxFiles={1}
        />
      </LabelField>
      <LabelField
        label={"홍보 이미지"}
        subText="최대 5개의 이미지를 등록할 수 있고 한번 등록할 때, 5개를 <span class=span-blue>함께</span> 선택하여 주세요"
      >
        <FileField
          width={1062}
          height={48}
          holderText={
            "홍보에 사용할 이미지를 등록해주세요(파일형식: png, jpg...)"
          }
          id={"images"}
          file={fileInfo.images}
          setFile={setFileInfo}
          accept={".png, .jpg, .jpeg"}
          maxFiles={5}
        />
      </LabelField>
      <LabelField label={"메인 홍보 문구"} valid={validCheck.promotion}>
        <InputField
          type="text"
          width={1062}
          height={48}
          holderText={"최상단에 띄울 홍보 문구를 입력해주세요"}
          id={"promotion"}
          onchangeFun={updateValue}
        />
      </LabelField>
      <LabelField label={"(선택) 로고 파일"}>
        <FileField
          width={1062}
          height={48}
          holderText={"로고 파일을 등록해주세요(파일형식: png, jpg...)"}
          id={"logo_img"}
          file={fileInfo.logo_img}
          setFile={setFileInfo}
          accept={".png, .jpg, .jpeg"}
          maxFiles={1}
        />
      </LabelField>
      <LabelField label={"가격"} valid={validCheck.price}>
        <InputField
          type="number"
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
          type="number"
          width={1062}
          height={48}
          holderText={"사업자 번호를 입력해주세요"}
          ref={(el) => (inputRef.current[4] = el)}
          id={"company_num"}
          onchangeFun={updateValue}
        />
      </LabelField>
      <LabelField label={"사업자 등록증"}>
        <FileField
          width={1062}
          height={48}
          holderText={
            "홍보에 사용할 이미지를 등록해주세요(파일형식: png, jpg...)"
          }
          id={"company_img"}
          file={fileInfo.company_img}
          accept={".png, .jpg, .jpeg"}
          maxFiles={1}
          setFile={setFileInfo}
        />
      </LabelField>
      <SubmitContainer>
        <CustomSubmitButton
          width={1062}
          height={60}
          radius={8}
          isChecked={true}
          disabled={isDisabled}
          fontSize={20}
          fontWeight={600}
          onClick={(e) => handleSubmit(e)}
        >
          제작자 등록 신청
        </CustomSubmitButton>
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
