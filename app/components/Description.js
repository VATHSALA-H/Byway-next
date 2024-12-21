"use client"
// import Link from 'next/link';
import styled from 'styled-components';
import {Link} from 'react-scroll'

const TabsContainer = styled.div`
font-family:poppins;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 10px 100px;
  max-width: 800;
  margin: 0 auto;

  @media (max-width: 1280px) {
    padding: 20px 90px;
  }
  @media (max-width: 1080px) {
    padding: 20px 80px;
  }
  @media (max-width: 900px) {
    padding: 20px 50px;
  }
  @media (max-width: 768px) {
    padding: 20px 40px;
    max-width: 100%;
    gap: 20px;
  }
  @media (max-width: 640px) {
    padding: 15px 30px;
    gap: 10px;
  }
  @media (max-width: 540px) {
    padding: 15px 20px;
    
  }
  @media (max-width: 480px) {
    padding: 10px 10px;
    gap: 20px;
    flex-wrap: wrap;
  }
  @media (max-width: 360px) {
    padding: 10px 10px;
    gap: 15px;
  }
`;


const Tab = styled.div`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  color:#0F172A;
  padding: 15px 25px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
  border: 1px solid #E2E8F0;

  &:hover {
    background-color:#EFF6FF;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }

  @media (max-width: 640px) {
    padding: 8px 15px;
  }

  @media (max-width: 540px) {
    padding: 8px 10px;
  }
`;


const Container = styled.div`
font-family:poppins;
  max-width: 800px;
  margin: 0;
  padding: 20px 100px;
  @media (max-width: 1280px) {
    padding: 20px 90px;
  }
  @media (max-width: 1080px) {
    padding: 20px 80px;
  }
  @media (max-width: 900px) {
    padding: 20px 50px;
  }
  @media (max-width: 768px) {
    padding: 20px 40px;
  }
  @media (max-width: 640px) {
    padding: 15px 30px;
  }
  @media (max-width: 540px) {
    padding: 15px 20px;
  }
  @media (max-width: 480px) {
    padding: 10px 10px;
  }
  @media (max-width: 360px) {
    padding: 10px 10px;
  }
`;

const HR = styled.hr`
  border: 1px solid #E2E8F0;
`;

const Heading = styled.h2`
  font-size: 20px;
  color: #0F172A;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #334155;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 540px) {
    font-size: 12px;
  }
`;

const Description = () => {
  return (
    <>
    <TabsContainer>
      <Tab>
        <Link href="description" smooth="true" duration={500}>
          Description
        </Link>
      </Tab>
      <Tab>
        <Link href="teacher"  smooth="true" duration={500}>
          Instructor
        </Link>
      </Tab>
      <Tab>
        <Link href="syllabus"  smooth="true" duration={500}>
          Syllabus
        </Link>
      </Tab>
      <Tab>
        <Link href="reviews" smooth="true" duration={500}>
          Reviews
        </Link>
      </Tab>
      <HR />
    </TabsContainer>
    <Container id="description">
      <Heading>Course Description</Heading>
      <Paragraph>
        This interactive e-learning course will introduce you to User Experience (UX) design, the art
        of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a
        solid foundation in UX principles and learn to apply them in real-world scenarios through
        engaging modules and interactive exercises.
      </Paragraph>
      <Heading>Certification</Heading>
      <Paragraph>
        At Byway, we understand the significance of formal recognition for your hard work and
        dedication to continuous learning. Upon successful completion of our courses, you will earn a
        prestigious certification that not only validates your expertise but also opens doors to new
        opportunities in your chosen field.
      </Paragraph>
      <HR />
    </Container>
    </>
  );
};

export default Description;