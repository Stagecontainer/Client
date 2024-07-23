import { useNavigate } from "react-router-dom";
import Container from "../../../styles/components/header/Menu";

const Menu = ({ dataIndex }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="wrap">
        <div className="menu-left">
          {dataIndex?.data.map((value, index) => {
            return (
              <span
                key={dataIndex.key + index}
                onClick={() => navigate(value.locate)}
              >
                {value.name}
              </span>
            );
          })}
        </div>

        <div className="menu-right">
          <span
            onClick={() => {
              dataIndex.key !== "company" && navigate("/company");
            }}
            style={dataIndex.key === "user"? {color : "#AAAAAA"} : {}}
          >
            공연 준비
          </span>
          <span
            onClick={() => {
              dataIndex.key !== "user" && navigate("/");
            }}
            style={dataIndex.key === "company"? {color : "#AAAAAA"} : {}}
          >
            공연 찾기
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
