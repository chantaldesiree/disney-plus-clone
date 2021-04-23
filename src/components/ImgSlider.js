import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick"

const ImgSlider = (props) => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <Carousel {...settings}>
      <Wrap>
        <a><img src="/images/slider-badging.jpg" alt="" /></a>
      </Wrap>
      <Wrap>
        <a><img src="/images/slider-scale.jpg" alt="" /></a>
      </Wrap>
      <Wrap>
        <a><img src="/images/slider-badag.jpg" alt="" /></a>
      </Wrap>
      <Wrap>
        <a><img src="/images/slider-scales.jpg" alt="" /></a>
      </Wrap>
    </Carousel>
  )
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    font-size: 50px;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
      height: 100%;
    }
  }

  ul li button {
    &:before {
      font-size: 12px;

    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -20px;
  }

  .slick-next {
    right: -20px;
  }
`;

const Wrap = styled.div`
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 5px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(255, 255, 255, 0.7);
      transition-duration: 200ms;
    }
  }
`;

export default ImgSlider;