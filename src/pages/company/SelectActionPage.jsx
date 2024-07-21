import Container from "../../styles/pages/selectActionPage";
import SelectAction from "../../components/selectaction/SelectAction";
import SearchBigIcon from "../../assets/icon/search-big-icon.svg?react";
import UserAddIcon from "../../assets/icon/useradd-icon.svg?react";

const SelectActionPage = () => {
  return (
    <Container>
      <div className="wrap">
        <SelectAction
          title="공연용 제품이 필요하신가요?"
          type="물건찾기/의뢰"
          Logo={SearchBigIcon}
        />
        <SelectAction
          title="공연용 제품을 제공하시나요?"
          type="제작자 등록"
          Logo={UserAddIcon}
        />
      </div>
    </Container>
  );
};

export default SelectActionPage;
