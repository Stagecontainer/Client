import { useNavigate } from "react-router-dom";
import { Container, ItemCard } from "../../styles/components/search/SearchItem";
import { useEffect, useState } from "react";
import { getPosts } from "../../api/posts";
import notFoundImg from "../../assets/product/image-not-found.png";
const BaseURL = "https://port-0-server-1272llx0bndkw.sel5.cloudtype.app";

const SearchItem = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const posts = await handleGetData();
      setData(posts);
    };

    fetchData();
  }, []);
  const handleGetData = async () => {
    try {
      const { data } = await getPosts();
      console.log(data)
      return data;
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const navigate = useNavigate();
  return (
    <Container>
      {data?.map((value, _) => {
        return (
          <ItemCard
            key={value.id}
            onClick={() => {
              navigate(`/company/products/${value.post_id}`);
            }}
          >
            <img src={value.images[0] === "" ? notFoundImg : BaseURL+value.images[0]}></img>
            <div style={{width : "700px"}}>
              <span className="type">{value.purpose}</span>
              <span className="title">{value.title}</span>
              <div className="user-rating">
                <span className="user">{value.company}</span>
                <div className="rating-box">
                  <div className="star"></div>
                  <span className="rating">{"4.8"}</span>
                </div>
              </div>
              <span className="text">{value.content}</span>
            </div>
            <div className="price">{value.price}원</div>
          </ItemCard>
        );
      })}
    </Container>
  );
};

export default SearchItem;
