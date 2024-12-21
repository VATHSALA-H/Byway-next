"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Link  from 'next/link';
import axios from 'axios';


const BottomSection = styled.div`
font-family:poppins;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 5px auto;
  justify-content: space-between;
  gap: 10px;
  padding: 20px 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CourseCard = styled.div`
  width: 270px;
  height: 300px;
  padding: 15px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items:stretch;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    width: 230px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    height:250px;
  }
`;
const CourseBottom = styled.div`
     display: flex;
     align-items: left;
     bottom: 10px;
     /* position: absolute; */
     flex-direction: column; 

`;
const CourseImage = styled.img`
  width: 100%;
  height: 140px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 130px;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`;

const CourseTitle = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;

 Image{
  width: 100%; /* or any specific width */
  height: auto; /* maintain aspect ratio */
}
    
  

  span {
    font-size: 0.9rem;
    color: #777;
    margin-left: 5px;

    @media (max-width: 768px) {
        
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.7rem;
      
    }
  }
`;

const CourseType = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const CourseCost = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Courses = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
     axios
     .get('https://fakestoreapi.com/products')
      .then((response) => {
        console.log(response.data);
        if (Array.isArray(response.data)) {
            // Shuffle the array
            const shuffledProducts = response.data.sort(() => 0.5 - Math.random());

        setProducts(shuffledProducts.slice(0, 4));
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!products || !Array.isArray(products)) return <p>No products available.</p>;
  return (
    <BottomSection>
      {products.map((product) => (
        <Link href={`/course/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
          <CourseCard>
            <CourseImage src={product.image} alt={product.title} />
            <CourseBottom>
            <CourseTitle>{product.title}</CourseTitle>
            <StarRating>
              {[...Array(5)].map((_, index) => (
                <Image 
                  key={index} 
                  src="/assets/star.png" alt="star" width={20} height={20} style={{ width: "auto", height: "auto" }} />
              ))}
              <span>({product.rating?.rate || 0} ratings)</span>
            </StarRating>
            <CourseType>{product.category || 'General'}</CourseType>
          <CourseCost>${product.price}</CourseCost>
          </CourseBottom>
          </CourseCard>
        </Link>
      ))}
    </BottomSection>
  );
};

export default Courses;