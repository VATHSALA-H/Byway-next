"use client"
import Image from 'next/image';
import styled from 'styled-components';


// Styled Components
const Container = styled.div`
font-family:poppins;
  max-width: 100%;
  margin: 0;
  padding: 20px 100px 0px;

  @media (max-width: 1280px) {
    padding: 20px 90px 0;
  }
  @media (max-width: 1080px) {
    padding: 20px 80px 0;
  }
  @media (max-width: 900px) {
    padding: 20px 50px 0;
  }
  @media (max-width: 768px) {
    padding: 20px 40px 0;
  }
  @media (max-width: 640px) {
    padding: 15px 30px 0;
  }
  @media (max-width: 540px) {
    padding: 15px 20px 0;
  }
  @media (max-width: 480px) {
    padding: 10px 10px 0;
  }
  @media (max-width: 360px) {
    padding: 10px 10px 0;
  }
`;

const Heading = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #0f172a;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
`;

const Rating = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  .point {
    font-size: 20px;
    font-weight: bold;
    color: #0f172a;

    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 540px) {
      font-size: 16px;
    }
  }

  .rev {
    color: #334155;
    margin: 0;
    font-size: 14px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 12px;
    }
    @media (max-width: 540px) {
      font-size: 10px;
    }
  }
`;

const ListContainer = styled.div`
  margin-top: 20px;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  p {
    margin: 0;
    color: #334155;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
    @media (max-width: 540px) {
      font-size: 10px;
    }
  }
`;

const RightSection = styled.div`
  flex: 2;
`;

const Card = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  max-width: 100%;
  @media (max-width: 1128px){
    flex-direction: column;
  }
  @media (max-width: 540px){
    padding: 10px;
    gap: 10px;
  }
`;

const LeftCard = styled.div`
  flex: 0.2;
  display: flex;
  gap: 10px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;

    @media (max-width: 540px) {
      width: 50px;
      height: 50px;
    }
  }

  .name {
    font-weight: bold;
    margin-top: 25px;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 540px) {
      font-size: 12px;
    }
  }
`;

const RightCard = styled.div`
  flex: 0.8;

  .top {
    display: flex;
    align-items: last baseline;
    gap: 5px;

    .pt {
      font-size: 18px;
      color: #0f172a;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 16px;
      }
      @media (max-width: 540px) {
        font-size: 14px;
      }
    }

    .date {
      margin-left: 20px;
      font-size: 14px;
      font-weight: 400;
      color: #334155;

      @media (max-width: 768px) {
        font-size: 12px;
      }
      @media (max-width: 540px) {
        font-size: 10px;
      }
    }
  }

  .bottom {
    margin-top: 10px;
    color: #334155;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 540px) {
      font-size: 12px;
    }
  }
`;

const Button = styled.button`
  display: block;
  margin: 20px 0;
  padding: 15px 25px;
  background-color: transparent;
  color: #060910;
  border: 1px solid #0f172a;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #949698;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px 20px;
  }
  @media (max-width: 540px) {
    font-size: 10px;
    padding: 10px 15px;
  }
`;

export default function Reviews() {
  return (
    <div>
      <Container id="reviews">
      <Heading>Learner Reviews</Heading>
      <ReviewContainer>
        {/* Left Section */}
        <LeftSection>
          <Rating>
          <Image src = "/assets/star.png" alt="star" width={20} height={20} style={{ width: "auto", height: "auto" }}/>
            <p className="point">4.6</p>
            <p className="rev">146,951 reviews</p>
          </Rating>
          <ListContainer>
          <List>
          <Image src = "/assets/star.png" alt="star" width={20} height={20} />
          <Image src = "/assets/star.png" alt="star" width={20} height={20} />
          <Image src = "/assets/star.png" alt="star" width={20} height={20} />
          <Image src = "/assets/star.png" alt="star" width={20} height={20} />
          <Image src = "/assets/star.png" alt="star" width={20} height={20} />
              <p>80%</p>
            </List>
            <List>
            <Image src = "/assets/star.png" alt="star" width={20} height={20} />
            <Image src = "/assets/star.png" alt="star" width={20} height={20} />
            <Image src = "/assets/star.png" alt="star" width={20} height={20} />
            <Image src = "/assets/star.png" alt="star" width={20} height={20} />
            <Image src = "/assets/emptystar.png" alt="star" width={20} height={20} />

              <p>10%</p>
            </List>
            <List>
            <Image src = "/assets/star.png" alt="star" width={20} height={20} />
            <Image src = "/assets/star.png" alt="star" width={20} height={20} />
            <Image src = "/assets/star.png" alt="star" width={20} height={20} />
            <Image src = "/assets/emptystar.png" alt="star" width={20} height={20} />
            <Image src = "/assets/emptystar.png" alt="star" width={20} height={20} />
              <p>5%</p>
            </List>
            <List>
            <Image src = "/assets/star.png" alt="star" width={20} height={20} />
            <Image src = "/assets/star.png" alt="star" width={20} height={20} />
            <Image src = "/assets/emptystar.png" alt="star" width={20} height={20} />
            <Image src = "/assets/emptystar.png" alt="star" width={20} height={20} />
            <Image src = "/assets/emptystar.png" alt="star" width={20} height={20} />
              <p>3%</p>
            </List>
            <List>
            <Image src = "/assets/star.png" alt="star" width={20} height={20} />
            <Image src = "/assets/emptystar.png" alt="star" width={20} height={20} />
            <Image src = "/assets/emptystar.png" alt="star" width={20} height={20} />
            <Image src = "/assets/emptystar.png" alt="star" width={20} height={20} />
            <Image src = "/assets/emptystar.png" alt="star" width={20} height={20} />
              <p>2%</p>
            </List>
          </ListContainer>
        </LeftSection>

        {/* Right Section */}
        <RightSection>
          {[1, 2, 3].map((_, idx) => (
            <Card key={idx}>
              <LeftCard>
              <Image src = "/assets/boy.jpg" alt="star" width={200} height={0} />
                <p className="name">Mark Doe</p>
              </LeftCard>
              <RightCard>
                <div className="top">
            <Image src = "/assets/star.png" alt="star" width={20} height={20} />
                  <p className="pt">5</p>
                  <p className="date">Reviewed on 22nd March, 2024</p>
                </div>
                <div className="bottom">
                  <p>
                    I was initially apprehensive, having no prior design experience. But the instructor did an amazing job of breaking down complex concepts into easily digestible modules.
                  </p>
                </div>
              </RightCard>
            </Card>
          ))}
          <Button>View more Reviews</Button>
        </RightSection>
      </ReviewContainer>
    </Container>
    </div>
  )
}
