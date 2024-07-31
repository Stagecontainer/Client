import CompanyHomeMenu from "../../components/CompanyHomeMenu";
import OrderList from "../../components/OrderList";
import Container from "../../styles/pages/CompanyHomePage";

const CompanyHomePage = () => {
  return (
    <Container>
      <div className="wrap">
        <OrderList/>
        <CompanyHomeMenu/>
      </div>
    </Container>
  );
};

export default CompanyHomePage;
