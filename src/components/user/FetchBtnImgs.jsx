import { useState } from "react";
import { userMenu } from "../../constans/MenuData";
import { CustomButton } from "../../styles/components/request/RegistrationCompany";
import Container from "../../styles/components/user/FetchBtnImgs";

const FetchBtnImgs = () => {
  const [type, setType] = useState("뮤지컬");

  return (
    <Container>
      <div className="btn-wrap">
        {userMenu.data.map((value, idx) => {
          return (
            <CustomButton
              key={idx}
              onClick={() => {
                setType(value.name);
              }}
              width={44}
              height={44}
              radius={24}
              defaultColor={"rgba(0,0,0,10%)"}
              pad={"16px 20px"}
              isChecked={value.name === type}
            >
              {value.name}
            </CustomButton>
          );
        })}
      </div>
    </Container>
  );
};

export default FetchBtnImgs;
