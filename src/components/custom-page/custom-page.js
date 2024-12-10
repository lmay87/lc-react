import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className="slick-prev" onClick={onClick}></div>;
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className="slick-next" onClick={onClick}></div>;
}

const CustomPage = ({ imageList }) => {
  const slideRef = useRef(null);
  const [show, setShow] = useState(false);
  const { height, width } = useWindowDimensions();

  const handleClick = (key) => {
    slideRef.current?.slickGoTo(key);
    setShow(true);
  };

  const goToNext = () => {
    slideRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      {/* Image Grid */}
      <div className="row">
        {imageList.map((data, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="col-12 col-md-6 col-lg-4"
            style={{ cursor: 'pointer' }}
          >
            {/* Wrapper div for hover effect */}
            <div className="image-wrapper">
              <img style={{ width: '100%' }} src={data.src} alt={`Image ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Modal Slider */}
      <div className={`slider-modal ${show ? 'model-visible' : 'model-hidden'}`}>
        <div className="btn-close" onClick={() => setShow(false)}></div>
        <Slider ref={slideRef} {...settings}>
          {imageList.map((image, index) => (
            <div key={index} className="step">
              <div
                onClick={() => goToNext()}
                style={{
                  display: 'flex',
                  height: '100vh',
                  width: '100vw',
                }}
              >
                <img
                  src={image.src}
                  style={{
                    margin: 'auto',
                    width: width > 990 ? 'auto' : '100%',
                  }}
                  alt={`Modal Image ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomPage;
