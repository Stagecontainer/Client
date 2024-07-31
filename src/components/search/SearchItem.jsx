import { useNavigate } from "react-router-dom";
import { Container, ItemCard } from "../../styles/components/search/SearchItem";

const DummyData = [
  {
    id: 1,
    img: "",
    type: "중고판매·소모품",
    title: "공연용 벽지(높이 3m) 판매합니다",
    user: "홍길동",
    rating: "4.8",
    text: "지난 공연에 사용하고 남은 소모품인데 높이는 3m정도 되고 길이는 15m정도 남아있어요 배송도 가능하고 직접 가지러 오셔도 됩니다",
    price: "16,000원",
  },
  {
    id: 1,
    img: "",
    type: "중고판매·소모품",
    title: "공연용 벽지(높이 3m) 판매합니다",
    user: "홍길동",
    rating: "4.8",
    text: "지난 공연에 사용하고 남은 소모품인데 높이는 3m정도 되고 길이는 15m정도 남아있어요 배송도 가능하고 직접 가지러 오셔도 됩니다",
    price: "16,000원",
  }
  ,
  {
    id: 1,
    img: "",
    type: "중고판매·소모품",
    title: "공연용 벽지(높이 3m) 판매합니다",
    user: "홍길동",
    rating: "4.8",
    text: "지난 공연에 사용하고 남은 소모품인데 높이는 3m정도 되고 길이는 15m정도 남아있어요 배송도 가능하고 직접 가지러 오셔도 됩니다",
    price: "16,000원",
  },
  {
    id: 1,
    img: "",
    type: "중고판매·소모품",
    title: "공연용 벽지(높이 3m) 판매합니다",
    user: "홍길동",
    rating: "4.8",
    text: "지난 공연에 사용하고 남은 소모품인데 높이는 3m정도 되고 길이는 15m정도 남아있어요 배송도 가능하고 직접 가지러 오셔도 됩니다",
    price: "16,000원",
  },
  {
    id: 1,
    img: "",
    type: "중고판매·소모품",
    title: "공연용 벽지(높이 3m) 판매합니다",
    user: "홍길동",
    rating: "4.8",
    text: "지난 공연에 사용하고 남은 소모품인데 높이는 3m정도 되고 길이는 15m정도 남아있어요 배송도 가능하고 직접 가지러 오셔도 됩니다",
    price: "16,000원 ~",
  }
];
const SearchItem = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {DummyData.map((value, _) => {
        return (
          <ItemCard key={value.id} onClick={() => {navigate(`/company/search/${value.id}`)}}>
            <img src={value.img}></img>
            <div>
              <span className="type">{value.type}</span>
              <span className="title">{value.title}</span>
              <div className="user-rating">
                <span className="user">{value.user}</span>
                <div className="rating-box">
                  <div className="star"></div>
                  <span className="rating">{value.rating}</span>
                </div>   
              </div>
              <span className="text">{value.text}</span>
            </div>
            <div className="price">{value.price}</div>
          </ItemCard>
        );
      })}
    </Container>
  );
};

export default SearchItem;
