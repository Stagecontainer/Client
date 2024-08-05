import {
  Container,
  FilterCell,
  RatingButton,
} from "../../styles/components/search/FilterBox";
import { CustomButton } from "../../styles/components/request/RegistrationCompany";

const FilterBox = ({ filter, setFilter }) => {
  const setFilterHandler = (key, value) => {
    console.log(filter);
    if (key === "rating") {
      setFilter((prev) => {
        if (prev[key] === value) {
          return {
            ...prev,
            [key]: 0,
          };
        }
        return {
          ...prev,
          [key]: value,
        };
      });
    } else {
      setFilter((prev) => {
        const currentValues = prev[key] || [];
        if (currentValues.includes(value)) {
          // 이미 선택된 값이면 배열에서 제거
          return {
            ...prev,
            [key]: currentValues.filter((item) => item !== value),
          };
        } else {
          // 새 값을 배열에 추가
          return {
            ...prev,
            [key]: [...currentValues, value],
          };
        }
      });
    }
  };

  return (
    <Container>
      <FilterCell gap="78">
        <div className="filter-title">카테고리</div>
        <div className="filter-content">
          <CustomButton
            width="150"
            height="40"
            fontSize="16"
            radius="100"
            isChecked={filter.category.includes("의상")}
            onClick={() => setFilterHandler("category", "의상")}
          >
            의상
          </CustomButton>
          <CustomButton
            width="150"
            height="40"
            fontSize="16"
            radius="100"
            isChecked={filter.category.includes("소품")}
            onClick={() => setFilterHandler("category", "소품")}
          >
            소품
          </CustomButton>
          <CustomButton
            width="150"
            height="40"
            fontSize="16"
            radius="100"
            isChecked={filter.category.includes("소모품")}
            onClick={() => setFilterHandler("category", "소모품")}
          >
            소모품
          </CustomButton>
        </div>
      </FilterCell>
      <FilterCell gap="78">
        <div className="filter-title">유형</div>
        <div className="filter-content">
          <CustomButton
            width="150"
            height="40"
            fontSize="16"
            radius="100"
            isChecked={filter.purpose.includes("의뢰 제작")}
            onClick={() => setFilterHandler("purpose", "의뢰 제작")}
          >
            의뢰제작
          </CustomButton>
          <CustomButton
            width="150"
            height="40"
            fontSize="16"
            radius="100"
            isChecked={filter.purpose.includes("중고 판매")}
            onClick={() => setFilterHandler("purpose", "중고 판매")}
          >
            중고판매
          </CustomButton>
          <CustomButton
            width="150"
            height="40"
            fontSize="16"
            radius="100"
            isChecked={filter.purpose.includes("중고 대여")}
            onClick={() => setFilterHandler("purpose", "중고 대여")}
          >
            중고대여
          </CustomButton>
        </div>
      </FilterCell>
      <FilterCell gap="12">
        <div className="filter-title">평점</div>
        <div className="filter-content">
          {[4.5, 4, 3, 2, 1].map((rating) => (
            <RatingButton
              key={rating}
              isChecked={filter.rating === rating}
              onClick={() => setFilterHandler("rating", rating)}
            >
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              {rating === 4.5 ? (
                <div className="star">
                  <div className="half gray"></div>
                  <div className="half gold"></div>
                </div>
              ) : (
                <div
                  className={`star${filter.rating >= rating ? "" : "-gray"}`}
                ></div>
              )}
              {rating}점 이상
            </RatingButton>
          ))}
        </div>
      </FilterCell>
    </Container>
  );
};

export default FilterBox;
