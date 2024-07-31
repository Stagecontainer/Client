import { useState } from "react";
import { CustomButton } from "../../styles/components/request/RegistrationCompany";
import Container from "../../styles/components/user/FetchBtnImgs";

const FetchBtnImgs = ({datas}) => {
  const [type, setType] = useState(datas.data[0].name);

  return (
    <Container>
      <div className="btn-wrap">
        {datas.data.map((value, idx) => {
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
