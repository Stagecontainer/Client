import Search from "../layout/header/Search";

const SearchBox = () => {
  return (
    <div>
      <Search
        width="846"
        height="54"
        text="검색어를 입력해주세요."
        textSize={20}
        radius="200"
        pad={24}
        textColor="#999999"
      />
    </div>
  );
};

export default SearchBox;
