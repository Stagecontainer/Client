import CurrentShows from "../../components/user/CurrentShows";
import HomeImgsButton from "../../components/user/HomeImgsButton";
import Slideshow from "../../components/user/Slidershow";
import Container from "../../styles/pages/UserHomePage";

const UserHomePage = () => {
  return (
    <Container>
      <Slideshow />
      <div className="wrap">
        <HomeImgsButton />
        <CurrentShows />
      </div>
    </Container>
  );
};

export default UserHomePage;
