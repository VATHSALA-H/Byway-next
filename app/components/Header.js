"use client"

import styled from 'styled-components'   
import { useState, useEffect } from 'react'; 
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {Popup} from '../Login/page'

export default function Header() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleLoginPopup = () => {
    setShowLogin(!showLogin);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <>
          <NavbarContainer>
        <Link href="/" style={{textDecoration:'none'}}>
          <LogoContainer>
              <StyledLogo src="/assets/logo.png" alt="logo"  width={10} height={10} />
              <StyledHeading>Byway</StyledHeading>  
          </LogoContainer>
        </Link>
        <RightNav>
          <StyledIcon src="/assets/cart.png" alt="cart"  width={10} height={10} />
          {isLoggedIn ? (
            <>
            <StyledIcon src="/assets/like.png" alt='like'  width={10} height={10}/>
            <StyledIcon src="/assets/bell.png" alt='bell'  width={10} height={10}/>
            <StyledLink onClick={handleLogout}>Logout</StyledLink>
            </>
          ) : (
            <>
              <StyledLink onClick={toggleLoginPopup}>Login</StyledLink>
              <StyledLink1 href="#">Sign Up</StyledLink1>
            </>
          )}
        </RightNav>
      </NavbarContainer>
      {showLogin && (
        <Popup
          onClose={toggleLoginPopup}
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setShowLogin(false);
          }}/>
          )}
    </>
  )
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  background-color: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
  padding: 10px 150px;

  @media (max-width: 768px) {
    
    padding: 10px 150px;
  }
  @media (max-width: 1280px){
    padding: 20px 130px;
  }
  @media (max-width: 1080px){
    padding: 20px 100px;
  }
  @media (max-width: 900px){
    padding: 20px 50px;
  }
  @media (max-width: 768px) {
    
    padding: 20px 40px;
  }
  @media (max-width: 640px){
    padding: 15px 30px;
  }
  @media (max-width: 540px){
    padding: 15px 20px;
  }
  @media (max-width: 480px){
    padding: 10px 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledLogo = styled.img`
  width: 40px;

  @media (max-width: 768px) {
    width: 30px;
  }
`;

const StyledHeading = styled.h1`
  font-size: 24px;
  color: #334155;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    
  }

  @media (max-width: 480px) { 
    gap: 10px;
  }
`;

const StyledIcon = styled.img`
  width: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 25px;
  }
  @media (max-width: 640px) {
    width: 20px;
  }
  @media (max-width: 480px) {
    width: 15px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #334155;
  background-color: transparent;
  font-size: 16px;
  padding: 10px 15px;
  cursor: pointer;
  border: 1px solid #334155;
  &:hover{
    background-color: #9daec5e8;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`;

const StyledLink1 = styled.a`
  text-decoration: none;
  color: #FFFFFF;
  background-color: #334155;
  font-size: 16px;
  padding: 10px 15px;
  border: 1px solid #334155;
  cursor: pointer;
  &:hover{
    background-color:#1a212c;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`;

