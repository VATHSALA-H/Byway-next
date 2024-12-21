"use client"

import styled from 'styled-components';

import Image from 'next/image';



const Container = styled.div`
font-family:poppins;
  padding: 30px 150px;
  max-width: 100%;
  background-color: #F8FAFC;
  overflow-x: hidden;

  @media (max-width: 1280px) {
    padding: 20px 130px;
  }
  @media (max-width: 1080px) {
    padding: 20px 100px;
  }
  @media (max-width: 900px) {
    padding: 20px 50px;
  }
  @media (max-width: 768px) {
    padding: 15px 30px;
  }
  @media (max-width: 640px) {
    padding: 15px 20px;
  }
  @media (max-width: 480px) {
    padding: 10px 15px;
  }
  @media (max-width: 360px) {
    padding: 10px 10px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    color: #000;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .arrow {
    display: flex;

    .arrow-btn {
      background-color: #94A3B8;
      border: none;
      border-radius: 8px;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 0 10px;

      Image {
        width: 12px;
        height: 12px;

        @media (max-width: 480px) {
          width: 10px;
          height: 10px;
        }
      }
    }
  }
`;

const Card = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin: 0px;
  flex: 1 0 auto;
  max-width: 300px;

  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CardQuote = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  justify-content: flex-start;

Image {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 10px;

    @media (max-width: 768px) {
      width: 60px;
      height: 50px;
    }
    @media (max-width: 480px) {
      width: 50px;
      height: 45px;
    }
  }

  .details {
    .name {
      font-size: 1.1rem;
      font-weight: bold;
      color: #000;
      margin-bottom: 0;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
      @media (max-width: 480px) {
        font-size: 0.875rem;
      }
    }

    .role {
      font-size: 0.9rem;
      color: #334155;
      margin-top: 10px;

      @media (max-width: 768px) {
        font-size: 0.75rem;
      }
      @media (max-width: 480px) {
        font-size: 0.625rem;
      }
    }
  }
`;
const SliderWrapper = styled.div`
display:flex;
justify-content: space-evenly;
gap:20px;
flex-wrap: wrap;
`;
const Slider = styled.div``;
export default function Aboutus() {
  return (
    <div>
        <Container>
      <TopSection>
        <h2>
          What Our Customers Say <br /> About Us
        </h2>
        <div className="arrow">
          <button className="arrow-btn" >
            <Image src='/assets/prev.png' alt="Previous" width={8} height={0}  />
          </button>
          <button className="arrow-btn" >
            <Image src='/assets/next.png' alt="Next" width={8} height={0}  />
          </button>
        </div>
      </TopSection>
      <SliderWrapper>
        <Slider>
            <Card>
              <CardQuote src='/assets/Vector.png' alt="comma" />
              <CardText>
                Byways tech courses are top-notch! As someone who always
                looking to stay ahead in the rapidly evolving tech world, I
                appreciate the up-to-date content and engaging multimedia.
              </CardText>
              <CustomerInfo>
                <Image src='/assets/girl.png' alt="Customer" width={55} height={55}/>
                <div className="details">
                  <p className="name">Jane Doe</p>
                  <p className="role">Designer</p>
                </div>
              </CustomerInfo>
            </Card>

        </Slider>
        <Slider>
            <Card>
              <CardQuote src='/assets/Vector.png' alt="comma" />
              <CardText>
                Byways tech courses are top-notch! As someone who always
                looking to stay ahead in the rapidly evolving tech world, I
                appreciate the up-to-date content and engaging multimedia.
              </CardText>
              <CustomerInfo>
                <Image src='/assets/girl.png' alt="Customer" width={55} height={55}/>
                <div className="details">
                  <p className="name">Jane Doe</p>
                  <p className="role">Designer</p>
                </div>
              </CustomerInfo>
            </Card>

        </Slider>
        <Slider>
            <Card>
              <CardQuote src='/assets/Vector.png' alt="comma" />
              <CardText>
                Byways tech courses are top-notch! As someone who always
                looking to stay ahead in the rapidly evolving tech world, I
                appreciate the up-to-date content and engaging multimedia.
              </CardText>
              <CustomerInfo>
                <Image src='/assets/girl.png' alt="Customer" width={55} height={55}/>
                <div className="details">
                  <p className="name">Jane Doe</p>
                  <p className="role">Designer</p>
                </div>
              </CustomerInfo>
            </Card>

        </Slider>
      </SliderWrapper>
    </Container>
    </div>
  )
}

