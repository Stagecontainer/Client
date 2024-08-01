import Container from "../../styles/components/search/SortList";

const SortList = () => {
    return(
        <Container>
            <span>최신 등록순</span>
            <span>조회순</span>
            <span>낮은 가격순</span>
            <span>높은 가격순</span>
            <span>리뷰 좋은순</span>
        </Container>
    );
}

export default SortList