import { useState } from "react";
import { useLocation } from "react-router-dom";
import RequestHeader from "../../components/request/RequestHeader";
import Container from "../../styles/pages/RequestItemPage";
import RegistrationCompany from "../../components/request/RegistrationCompany";

const RequestItemPage = () => {
  const location = useLocation();
  const [isConsumptionFirst, setIsConsumptionFirst] = useState(
    location.state?.type
  ); // request or registration only
  if (!isConsumptionFirst) return <div>ERRRO</div>;
  return (
    <Container>
      <div className="wrap">
        <RequestHeader
          order={isConsumptionFirst}
          setOrder={setIsConsumptionFirst}
        />
        {isConsumptionFirst === "request" ? (
          <div>request</div>
        ) : (
          <RegistrationCompany />
        )}
      </div>
    </Container>
  );
};

export default RequestItemPage;
