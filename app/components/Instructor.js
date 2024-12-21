"use client"
import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
font-family:poppins;
  padding: 20px 0;
  width: 80%;
  margin: 20px auto;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    font-size: 1.5rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.2rem; /* Adjust heading size for small screens */
    }
  }

  p {
    font-size: 1rem;
    color: #007bff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem; /* Adjust paragraph size for small screens */
    }
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px; /* Center cards for smaller screens */
  }
`;

const Card = styled.div`
  width: 200px;
  margin: 15px 0;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: center;
  border: 1px solid #E2E8F0;

  @media (max-width: 768px) {
    width: 150px; /* Make cards take up more space on small screens */
    margin: 10px 0;
  }
`;

const InstructorImage = styled.img`
  width: 100%;
  border-radius: 8px;
  height: 150px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 120px; /* Adjust image height for smaller screens */
  }
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #0F172A;
  margin: 10px 0 5px;

  @media (max-width: 768px) {
    font-size: 16px; /* Reduce font size for small screens */
  }
`;

const Subject = styled.p`
  font-size: 14px;
  color: #334155;
  font-weight: 400;
  margin: 0 0 10px;

  @media (max-width: 768px) {
    font-size: 12px; /* Adjust font size */
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3px;
  height: 20px;

  .left {
    display: flex;
    align-items: center;

   Image {
      width: 20px;
      height: 20px;
    }

    .star-pt {
      font-size: 1rem;
      color: #0F172A;
      margin-left: 5px;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 0.9rem; /* Smaller font size for stars */
      }
    }
  }

  .right {
    .stud {
      font-size: 0.9rem;
      color: #334155;

      @media (max-width: 768px) {
        font-size: 0.8rem; /* Adjust student text size */
      }
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #E2E8F0;
  margin: 10px 0;
`;

const Instructor = () => {
  return (
    <Container>
      <TopSection>
        <h3>Top Instructors</h3>
        <p>See All</p>
      </TopSection>
      <BottomSection>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Card key={index}>
            <InstructorImage src='/assets/model-5.jpg' alt="no_img" />
            <Name>Ronald Richards</Name>
            <Subject>UI/UX Designer</Subject>
            <Divider />
            <Rating>
              <div className="left">
                <Image src='/assets/star.png' alt="star" width={15} height={10}/>
                <p className="star-pt">4.9</p>
              </div>
              <div className="right">
                <p className="stud">2400 Students</p>
              </div>
            </Rating>
          </Card>
        ))}
      </BottomSection>
    </Container>
  );
};

export default Instructor;