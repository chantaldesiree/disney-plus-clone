import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRecommend } from '../features/movie/movieSlice'

const Recommends = (props) => {

  const movies = useSelector(selectRecommend);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies && movies.map((movie, key) => (
          <Wrap key={key}>
            {movie.id}
          <Link to={"/detail/" + movie.id}>
            <img src={movie.cardImg} alt={movie.title} />
          </Link>
        </Wrap>
        ))}

      </Content>
    </Container>

  )
}

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap; 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 50%;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.5, 0.95) 0s;
  border: 3px solid rgba(250, 250, 250, 0.1);

  img {
    inset: 0px;
    display: block;
    width: 100%;
    height: 100%;
    opacity: 1;
    object-fit: cover;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
    transform: scale(1.1);
    border-color: rgba(250, 250, 250, 0.8);
  }
`;

export default Recommends