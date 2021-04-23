import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../firebase';
import {selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState} from '../features/user/userSlice';
import { useEffect } from 'react';

const Header = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user)
        history.push('/home')
      }
    })
  }, [username])

  const handleAuth = () => {

    if (!username) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
      }).catch((error) => {
        alert(error.message)
      })
    } else if (username) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        history.push('/')
      }).catch((err) => alert(err.message));
    }

  }

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    )
  }

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      {!username ? (
        <Login onClick={handleAuth}>Login</Login>
      ) :
      (
        <>
        <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="Home"/>
          <span>HOME</span>
        </a>
        <a href="/search">
          <img src="/images/search-icon.svg" alt="Search"/>
          <span>SEARCH</span>
        </a>
        <a href="/watchlist">
          <img src="/images/watchlist-icon.svg" alt="Watchlist"/>
          <span>WATCHLIST</span>
        </a>
        <a href="/originals">
          <img src="/images/original-icon.svg" alt="Originals"/>
          <span>ORIGINALS</span>
        </a>
        <a href="/movies">
          <img src="/images/movie-icon.svg" alt="Movies"/>
          <span>MOVIES</span>
        </a>
        <a href="/series">
          <img src="/images/series-icon.svg" alt="Series"/>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <SignOut>
      <UserImg src={userPhoto} alt={username} />
        <Dropdown>
          <span onClick={handleAuth}>Sign out</span>
          </Dropdown>
      </SignOut>
      </>
      )}
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #03030f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 35px;
  letter-spacing: 15px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row no-wrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.1;
      padding: 2px 0px;
      margin-left: 5px;
      white-space: no-wrap;
      position: relative;


    &:before {
      background-color: white;
      border-radius: 0px 0px 2px 2px;
      bottom: -2px;
      right: 0px;
      left: 0px;
      height: 2px;
      opacity: 0;
      position: absolute;
      content: "";
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 850px){
    display: none;
`;

const Login = styled.a`
  color: white;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid white;
  border-radius: 5px;
  transition: all 0.2 ease 0s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #040413;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: black;
  border: solid 1px rgba(150, 150, 150, 0.34);
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 34%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 1px;
  width: 97px;
  opacity: 0;
  white-space: nowrap;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(170, 170, 170, 0.2)
  }
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 1s;

    }
  }
`;

export default Header;