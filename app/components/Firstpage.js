"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router"; // useRouter for dynamic URL
import axios from "axios";

const PageContainer = styled.div`
  padding: 20px 100px;
  max-width: 800px;
  margin: 0;

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

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;

  p {
    font-size: 14px;
    color: #334155;
    font-weight: 400;
    cursor: pointer;
  }

  .mainp {
    color: #2563eb;
  }

  img {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #0f172a;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 540px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #334155;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SmallDetails = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 16px;
    font-weight: 500;
    color: #334155;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 10px;

    .pt {
      color: #f4b72a;
    }

    img {
      width: 15px;
      height: auto;
    }
  }

  hr {
    height: 20px;
    border: 1px solid #334155;
    margin: 0 10px;
    @media (max-width: 768px) {
      height: 0;
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Creator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  p {
    font-size: 14px;
    color: #334155;
    font-weight: 500;

    span {
      color: #2563eb;
    }
  }

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  img {
    width: 24px;
    height: auto;
  }

  p {
    font-size: 15px;
    color: #334155;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Card = styled.div`
  position: absolute;
  top: 100px;
  right: 20px;
  padding: 15px;
  width: 300px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px #3b82f61f;
  border-radius: 16px;

  .top {
    padding: 10px;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .pricediv {
      padding: 10px;
      display: flex;
      align-items: center;
      gap: 15px;
      font-weight: 600;

      .offerprice {
        font-size: 24px;
        color: #0f172a;
      }

      .actualprice {
        font-size: 18px;
        text-decoration: line-through;
        color: #94a3b8;
      }

      .offer {
        font-size: 20px;
        color: #16a34a;
      }
    }

    button {
      width: 100%;
      margin: 5px;
      padding: 10px 0;
      border: none;
      border-radius: 8px;
      font-size: 0.9rem;
      cursor: pointer;

      &.add {
        background: #020617;
        color: white;

        &:hover {
          background: #0206175d;
        }
      }

      &.buy {
        background: #fff;
        color: #0f172a;
        border: 1px solid #020617;

        &:hover {
          background: #ffffff48;
        }
      }
    }
  }

  @media (max-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    top: auto;
    right: auto;
    max-width: 100%;
    padding: 10px;
  }

  @media (max-width: 540px) {
    max-width: 100%;
    padding: 10px;
  }
`;

export default function Firstpage() {
  const router = useRouter();
  const { id } = router.query; // Extract the dynamic `id` from the URL

  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!id) return; // If `id` is not available yet, don't make the API call

    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setCourse(response.data))
      .catch((error) => console.error("Error fetching course data:", error));

    window.scrollTo(0, 0);
  }, [id]); // Trigger the effect when `id` changes

  if (!course) return <p>Loading...</p>;

  const back = () => {
    router.push("/"); // Go back to the homepage
  };

  return (
    <div>
      <PageContainer>
        <Breadcrumb>
          <p onClick={back}>Home</p>
          <Image src="/assets/arrownsecond" alt="arrow" width={10} height={0} />
          <p>Categories</p>
          <Image src="/assets/arrownsecond" alt="arrow" width={10} height={0} />
          <p className="mainp">{course.title}</p>
        </Breadcrumb>
        <Title>{course.title}</Title>
        <Description>{course.description}</Description>
        <SmallDetails>
          <div className="rating">
            <p className="pt">{course.rating?.rate || 0}</p>
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src="/assets/star.png"
                alt="star"
                width={20}
                height={20}
                style={{ opacity: index < course.rating?.rate ? 1 : 0.3 }}
              />
            ))}
            <p>({course.rating?.count || 0} ratings)</p>
          </div>
          <hr />
          <div className="detail">
            <p>22 Total Hours. 155 Lectures. All levels</p>
          </div>
        </SmallDetails>
        <Creator>
          <Image src="/assets/teacher.jpg" alt="arrow" width={10} height={0} />
          <p>
            Created by <span>Ronal Richards</span>
          </p>
        </Creator>
        <Language>
          <Image src="/assets/web.png" alt="language_icon" />
          <p>English, Spanish, Italian, German</p>
        </Language>
        <Card>
          <div className="top">
            <Image src={course.image} alt={course.title} />
            <div className="pricediv">
              <p className="offerprice">${course.price}</p>
              <p className="actualprice">$99.5</p>
              <p className="offer">50% Off</p>
            </div>
            <button className="add">Add To Cart</button>
            <button className="buy">Buy Now</button>
          </div>
          <div className="bottom">
            <p className="share">Share</p>
            <Image src="/assets/Group 8.png" alt="media" />
          </div>
        </Card>
      </PageContainer>
    </div>
  );
}
