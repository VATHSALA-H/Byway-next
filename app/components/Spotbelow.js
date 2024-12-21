"use client"
import styled from 'styled-components';


const Container = styled.div`
font-family:poppins;
  text-align: center;
  background: #F8FAFC;
  display: flex;
  padding: 0px 150px;
  max-width: 100%;
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
    flex-wrap: wrap;
    padding: 10px 10px;
  }
  @media (max-width: 360px){
    padding: 10px 10px;
  }
`;

const MentorCard = styled.div`
  margin: 20px 0;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
  @media (max-width: 480px) {
    
  }
`;

const Heading = styled.h2`
  font-size: 32px;
  color: #333;
  font-weight: 600;
  line-height: 41px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
    margin: 0;
    
  }
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: #0F172A;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 16px;
  }
`;

const Separator = styled.hr`
  border: 1px solid #E2E8F0;
  height: 70px;
  width: 2px;
  margin: auto;
  background-color: #E2E8F0;
`;

const Mentor = () => {
  return (
    <Container>
      <MentorCard>
        <Heading>250+</Heading>
        <Paragraph>Courses by our best mentors</Paragraph>
      </MentorCard>
      <Separator />
      <MentorCard>
        <Heading>1000+</Heading>
        <Paragraph>Courses by our best mentors</Paragraph>
      </MentorCard>
      <Separator />
      <MentorCard>
        <Heading>15+</Heading>
        <Paragraph>Courses by our best mentors</Paragraph>
      </MentorCard>
      <Separator />
      <MentorCard>
        <Heading>2400+</Heading>
        <Paragraph>Courses by our best mentors</Paragraph>
      </MentorCard>
    </Container>
  );
};

export default Mentor;