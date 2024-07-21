import { useNavigate } from "react-router-dom";
import { Container, RadiusBigBtn } from "../../styles/components/selectAction";

const SelectAction = ({ title = "제목", type = "종류", Logo }) => {
  const navigate = useNavigate();

  const getType = (type) => {
    if (type === "물건찾기/의뢰") return "request";
    if (type === "제작자 등록") return "registration";
    return null;
  };

  const navigateTo = (type) => {
    const navigationType = getType(type);
    if (!navigationType) return;

    navigate("/company/request", {
      state: {
        type: navigationType,
      },
    });
  };

  return (
    <Container>
      <span>{title}</span>
      <RadiusBigBtn onClick={() => navigateTo(type)}>
        <Logo />
        <span>{type}</span>
      </RadiusBigBtn>
    </Container>
  );
};

export default SelectAction;
