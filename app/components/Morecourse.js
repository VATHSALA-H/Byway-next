"use client"
import Random from './Random'
import styled from 'styled-components';

const Container = styled.div`
font-family:poppins;
  max-width: 1200px;
  margin: 0 ;
  padding: 20px 150px;
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
  @media (max-width: 360px){
    padding: 10px 10px;
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #0F172A;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px){
    font-size: 18px;
  }
`;


export default function Morecourse() {
  return (
    <div>
       <Container>
      <Heading>More Courses Like This</Heading>
    </Container>
    <Random/>
    </div>
  )
}

