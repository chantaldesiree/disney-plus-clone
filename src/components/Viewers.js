import styled from 'styled-components'

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676296-national-geographic.mp4"/>
        </video>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 50%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.5, 0.9) 0s;
  border: 3px solid rgba(250, 250, 250, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
    border-radius: 10px;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    opacity: 0;
    top: 0px;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
    transform: scale(1.1);
    opacity: 1;
    border-color: rgba(250, 250, 250, 0.8);
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;