import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Trending from './Trending'
import Viewers from './Viewers'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase'
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'

const Home = (props) => {

  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch(doc.data().type) {
          case 'recommend' : recommends = [...recommends, {id: doc.id, ...doc.data()}];
            break;
          case 'new' : newDisney = [...newDisney, {id: doc.id, ...doc.data()}];
            break;
          case 'original' : originals = [...originals, {id: doc.id, ...doc.data()}];
            break;
          case 'trending' : trending = [...trending, {id: doc.id, ...doc.data()}];
            break;
        }
      });

    dispatch(setMovies({
      recommend: recommends,
      newDisney: newDisney,
      original: originals,
      trending: trending
    }));
  });
  }, [username]);

  return (
    <Container>
      <ImgSlider />
      <Viewers/>
      <Recommends/>
      <NewDisney/>
      <Originals/>
      <Trending/>
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0));
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;