import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>디테일 페이지입니다</h1>
      <Link to={`/company/products/${id}/chat`}>
        <button>상담하기</button>
      </Link>
      <Link to={`/company/products/${id}/order-request`}>
        <button>의뢰서 작성</button>
      </Link>
    </>
  );
};

export default SearchDetailPage;
