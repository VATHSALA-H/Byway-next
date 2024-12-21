"use client"
import Teacher from '../../components/Teacher.js'
import Reviews from '../../components/Reviews'
import Syllabus from '../../components/Syllabus.js'
import Aboutus from '../../components/Aboutus.js'
import Morecourse from '../../components/Morecourse.js'
import Description from '../../components/Description.js'

import Image from 'next/image.js'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useRouter} from 'next/navigation'
import { use } from 'react'


export default function Page({ params }) {
  const value = use(params);
  const res = value.id;
  const [course, setCourse] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${res}`)
      .then((response) => {
        console.log(response)
        setCourse(response.data)
      }).catch((error) =>{
        console.error('Error fetching course data:', error)
      });

    window.scrollTo(0, 0);
  }, [res]);


  const handleClick = ()=>{
    router.push('/')
  }

  return(
    <>
    <div>
    <PageContainer>
      <Breadcrumb>
        <p onClick={handleClick}>Home</p>
        <Image src = "/assets/arrownsecond.png" width={20} height={20} alt="arrow" />
        <p>Categories</p>
        <Image src = "/assets/arrownsecond.png" width={20} height={20} alt="arrow" />
        <p className="mainp">{course.title}</p>
      </Breadcrumb>
      <Title>{course.title}</Title>
      <Descriptionn>{course.description}</Descriptionn>
      <SmallDetails>
        <div className="rating">
          <p className="pt">{course.rating?.rate || 0}</p>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              src = "/assets/star.png" 
              width={20} height={20}
              alt="star"
              style={{ opacity: index < course.rating?.rate ? 1 : 0.3 }}
            />
          ))}
          <p>({course.rating?.count || 0} ratings)</p>
        </div>
        <hr/>
        <div className="detail">
          <p>22 Total Hours. 155 Lectures. All levels</p>
        </div>
      </SmallDetails>
      <Creator>
        <Image src = "/assets/teacher.jpg" width={20} height={20} alt="creater" />
        <p>
          Created by <span>Ronal Richards</span>
        </p>
      </Creator>
      <Language>
        <Image src = "/assets/web.png" width={20} height={20} alt="language_icon" />
        <p> English, Spanish, Italian, German</p>
      </Language>
      <Card>
        <div className="top">
          <Image  src = "/assets/mottaboss.jpg" width={300} height={0} alt="title" />
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
          <Image  src = "/assets/social-media.png" width={20} height={20} alt="media" />
        </div>
      </Card>
    </PageContainer>


      <Description/>
      <Teacher/>
      <Syllabus/>
      <Reviews/>
      <Aboutus/>
      <Morecourse/>
    </div>
    </>
  )

}

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

const Descriptionn = styled.p`
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
    @media (max-width: 768px){
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
      color: #2563EB;
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

