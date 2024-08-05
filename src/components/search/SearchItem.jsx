import { useNavigate } from "react-router-dom";
import { Container, ItemCard } from "../../styles/components/search/SearchItem";
import { useEffect, useState } from "react";
import { getPosts } from "../../api/posts";
import notFoundImg from "../../assets/product/image-not-found.png";
const BaseURL = "https://port-0-server-1272llx0bndkw.sel5.cloudtype.app";

const SearchItem = ({ filter, sort }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const posts = await handleGetData();
      setData(posts);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await handleGetData();
      const filteredPosts = posts.filter((item) => {
        const matchesCategory =
          filter.category.length > 0
            ? filter.category.includes(item.category)
            : true;
        const matchesPurpose =
          filter.purpose.length > 0
            ? filter.purpose.includes(item.purpose)
            : true;
        const matchesRating =
          filter.rating > 0 ? item.rating >= filter.rating : true;

        return matchesCategory && matchesPurpose && matchesRating;
      });

      if (sort === "낮은 가격순") {
        setData(
          filteredPosts.sort((a, b) => Number(a.price) - Number(b.price))
        );
      } else if (sort === "높은 가격순") {
        setData(
          filteredPosts.sort((a, b) => Number(b.price) - Number(a.price))
        );
      } else if (sort === "리뷰 좋은순") {
        setData(
          filteredPosts.sort((a, b) => Number(b.rating) - Number(a.rating))
        );
      } else {
        setData(filteredPosts);
      }
    };

    fetchData();
  }, [filter, sort]);

  const handleGetData = async () => {
    try {
      const { data } = await getPosts();
      return data;
    } catch (e) {
      return [];
    }
  };

  return (
    <Container>
      {data?.map((value) => {
        return (
          <ItemCard
            key={value.id}
            onClick={() => {
              navigate(`/company/products/${value.post_id}`);
            }}
          >
            <img
              src={
                value.images[0] === "" ? notFoundImg : BaseURL + value.images[0]
              }
              alt={value.title}
            />
            <div style={{ width: "700px" }}>
              <span className="type">{value.purpose}</span>
              <span className="title">{value.title}</span>
              <div className="user-rating">
                <span className="user">{value.company}</span>
                <div className="rating-box">
                  <div className="star"></div>
                  <span className="rating">{value.rating}</span>
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
