import {
  Container,
  FilterCell,
  RatingButton,
} from "../../styles/components/search/FilterBox";
import { CustomButton } from "../../styles/components/request/RegistrationCompany";
const FilterBox = () => {
  return (
    <Container>
      <FilterCell gap="78">
        <span className="filter-title">검색 항목</span>
        <div className="filter-content">
          <CustomButton width="150" height="40" fontSize="16" radius="100">
            제목
          </CustomButton>
          <CustomButton width="150" height="40" fontSize="16" radius="100">
            설명
          </CustomButton>
          <CustomButton width="150" height="40" fontSize="16" radius="100">
            제작자
          </CustomButton>
        </div>
      </FilterCell>
      <FilterCell gap="78">
        <span className="filter-title">카테고리</span>
        <div className="filter-content">
          <CustomButton width="150" height="40" fontSize="16" radius="100">
            의상
          </CustomButton>
          <CustomButton width="150" height="40" fontSize="16" radius="100">
            소품
          </CustomButton>
          <CustomButton width="150" height="40" fontSize="16" radius="100">
            소모품
          </CustomButton>
        </div>
      </FilterCell>
      <FilterCell gap="78">
        <span className="filter-title">유형</span>
        <div className="filter-content">
          <CustomButton width="150" height="40" fontSize="16" radius="100">
            의뢰제작
          </CustomButton>
          <CustomButton width="150" height="40" fontSize="16" radius="100">
            중고판매
          </CustomButton>
          <CustomButton width="150" height="40" fontSize="16" radius="100">
            중고대여
          </CustomButton>
        </div>
      </FilterCell>
      <FilterCell gap="12">
        <span className="filter-title">평점</span>
        <div className="filter-content">
          <RatingButton>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star">
              <div className="half gray"></div>
              <div className="half gold"></div>
            </div>
            4.5점 이상
          </RatingButton>
          <RatingButton>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star-gray"></div>
            4점 이상
          </RatingButton>
          <RatingButton>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star-gray"></div>
            <div className="star-gray"></div>
            3점 이상
          </RatingButton>
          <RatingButton>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star-gray"></div>
            <div className="star-gray"></div>
            <div className="star-gray"></div>
            2점 이상
          </RatingButton>
          <RatingButton>
            <div className="star"></div>
            <div className="star-gray"></div>
            <div className="star-gray"></div>
            <div className="star-gray"></div>
            <div className="star-gray"></div>
            1점 이상
          </RatingButton>
        </div>
      </FilterCell>
    </Container>
  );
};

export default FilterBox;
