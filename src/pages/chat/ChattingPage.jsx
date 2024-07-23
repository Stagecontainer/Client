import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ChattingPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>채팅 페이지입니다</h1>
      <Link to={`/company/${id}/order-request`}>
        <button>의뢰서 작성</button>
      </Link>
    </>
  );
};

export default ChattingPage;
