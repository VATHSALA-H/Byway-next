"use client"
import styled from "styled-components";


const Container = styled.div`
font-family:poppins;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 150px;
  background-color: #fff;
  max-width: 100%;
  margin: 15px 0;
  margin-bottom: 34px;
  gap: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 1280px){
    padding: 20px 130px;
  }
  @media (max-width: 1080px){
    padding: 20px 100px;
  }
  @media (max-width: 900px){
    flex-direction: column;
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
  @media (max-width: 360px){
    padding: 10px 10px;
  }
`;

const LeftContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    align-items: center;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Heading = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  color: #0F172A;

  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.5;
  color: #334155;

  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 13px 24px;
  background-color: #3B82F6;
  color: #fff;
  text-decoration: none;
  max-width: 40%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const RightContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 80%;
  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;

const Introduction = () => {
  return (
    <Container>
      <LeftContainer>
        <Heading>Unlock Your Potential with Byway</Heading>
        <Paragraph>
          Welcome to Byway, where learning knows no bounds. We believe that
          education is the key to personal and professional growth, and we are
          here to guide you on your journey to success.
        </Paragraph>
        <Button href="#">Start your instructor journey</Button>
      </LeftContainer>
      <RightContainer>
        <StyledImage src='/assets/Group 8.png' alt="student" />
      </RightContainer>
    </Container>
  );
};

export default Introduction;