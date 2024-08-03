import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ChattingPage = () => {
  const { id } = useParams();
  const location = useLocation();

  console.log(location.state);

  return (
    <Container>
      <Link to={`/company/products/${id}/order-request`}>
        <button>의뢰서 작성</button>
      </Link>
    </Container>
  );
};

export default ChattingPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
`;
