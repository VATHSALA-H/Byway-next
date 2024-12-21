"use client"
import Image from 'next/image';
import styled from 'styled-components';
import Syllabus from './Syllabus'

const Container = styled.div`
  max-width: 900px;
  margin: 0;
  
  padding: 10px 100px;
  font-family:poppins;
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

const Heading = styled.h2`
  font-size: 20px;
  color: #0F172A;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

const Subheading = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #2563EB;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

const Role = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #334155;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 540px) {
    font-size: 12px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.div`
  Img {
   border-radius: 50%;
  @media (max-width: 768px) {
    
    }
    @media (max-width: 540px) {
    
    }}
`;

const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: #0F172A;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 12px;
    }
    @media (max-width: 540px) {
      font-size: 10px;
    }
  }

  Image {
    width: 24px;
    height: 24px;
    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
    @media (max-width: 540px) {
      width: 15px;
      height: 15px;
    }
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #334155;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 540px) {
    font-size: 12px;
  }
`;

const HR = styled.hr`
  border: 1px solid #E2E8F0;
`;

const Teacher = () => {
    return (
        <Container id="teacher">
            <Heading>Instructor</Heading>
            <Subheading>Ronald Richards</Subheading>
            <Role>UI/UX Designer</Role>
            <ProfileContainer>
                <ProfileImage>
                    <Image src="/assets/teacher.jpg" alt="star" width={120} height={0} />
                </ProfileImage>
                <DetailsContainer>
                    <DetailItem>
                        <Image src="/assets/firstcap.png" alt="star" width={24} height={0} />
                        <p>40,445 Reviews</p>
                    </DetailItem>
                    <DetailItem>
                        <Image src="/assets/secondcap.png" alt="star" width={24} height={0} />
                        <p>500 Students</p>
                    </DetailItem>
                    <DetailItem>
                        <Image src="/assets/thirdcap.png" alt="star" width={24} height={0} />
                        <p>15 Courses</p>
                    </DetailItem>
                </DetailsContainer>
            </ProfileContainer>
            <Description>
                With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom.
                He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring
                seamless and engaging user experiences.
            </Description>
            <HR />
            <Syllabus/>
        </Container>
       
    );
};

export default Teacher;