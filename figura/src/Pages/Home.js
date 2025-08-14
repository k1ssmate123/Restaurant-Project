import "./Style/Home.css";
import Slideshow from "../Components/Slideshow/Slideshow";

function Home() {
  return (
    <div className="home">
      <div className="home__slide">
        <Slideshow />
      </div>
    </div>
  );
}

export default Home;
