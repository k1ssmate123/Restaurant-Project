import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SlideshowImages from "./SlideshowImages";
const divStyle = {
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
  width: "100%",
};

const properties = {
  prevArrow: <KeyboardArrowLeftIcon className="home__slideArrow" />,
  nextArrow: <KeyboardArrowRightIcon className="home__slideArrow" />,
};

function Slideshow() {
  return (
    <Fade {...properties}>
      {SlideshowImages.map((slideImage, index) => (
        <div key={index}>
          <div>
            <img style={divStyle} src={slideImage} />
          </div>
        </div>
      ))}
    </Fade>
  );
}

export default Slideshow;
