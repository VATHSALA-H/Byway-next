"use client"
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  font-family:poppins;
 
`;

const Heading = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #0F172A;
  margin-bottom: 15px;

  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #E2E8F0;
  margin-bottom: 30px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E2E8F0;
  padding: 25px 30px;
  @media (max-width: 768px) {
    padding: 20px 25px;
  }
  @media (max-width: 540px) {
    padding: 10px 10px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    gap: 8px;
  }
  @media (max-width: 540px) {
    gap: 3px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ListTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #0F172A;
  margin: 0 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 7px;
  }
  @media (max-width: 540px) {
    font-size: 14px;
    margin: 0 3px;
  }
`;

const ListDetail = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #334155;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 8px;
  }
  @media (max-width: 540px) {
    font-size: 10px;
    margin:5px 3px;
  }
`;

const HR = styled.hr`
  border: 1px solid #E2E8F0;
`;

const Syllabus = () => {
  return (
    <Container id="syllabus">
      <Heading>Syllabus</Heading>
      <Lists>
        <ListItem>
          <Left>
          <Image src="/assets/downarrow.png" alt="star" width={10} height={0} />
            <ListTitle>Introduction to UX Design</ListTitle>
          </Left>
          <Right>
            <ListDetail>5 Lessons</ListDetail>
            <ListDetail>1 hour</ListDetail>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
          <Image src="/assets/downarrow.png" alt="star" width={10} height={0} />
            <ListTitle>Basics of User-Centered Design</ListTitle>
          </Left>
          <Right>
            <ListDetail>5 Lessons</ListDetail>
            <ListDetail>1 hour</ListDetail>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
          <Image src="/assets/downarrow.png" alt="star" width={20} height={0} />
            <ListTitle>Elements of User Experience</ListTitle>
          </Left>
          <Right>
            <ListDetail>5 Lessons</ListDetail>
            <ListDetail>1 hour</ListDetail>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
          <Image src="/assets/downarrow.png" alt="star" width={10} height={0} />
            <ListTitle>Visual Design Principles</ListTitle>
          </Left>
          <Right>
            <ListDetail>5 Lessons</ListDetail>
            <ListDetail>1 hour</ListDetail>
          </Right>
        </ListItem>
      </Lists>
      <HR />
    </Container>
  );
};

export default Syllabus;