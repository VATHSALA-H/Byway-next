"use client"

import styled from 'styled-components';
import Image from 'next/image';

const Categories = styled.div`
  padding: 0px;
  font-family:poppins;
  width: 80%;
  margin: 30px auto;
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
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1rem;
    color: #007bff;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #0056b3;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
  @media (max-width: 420px) {
    justify-content: center;
  }
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e2e8f0;
  padding: 20px;
  width: 200px;
  height: auto;
  margin: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 8px 0px #3b82f61f;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 12px 0px #3b82f680;
  }
  @media (max-width: 768px) {
    width: 150px;
  }
  

  h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #0f172a;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }


  p {
    font-size: 0.9rem;
    color: #334155;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const ImageCon = styled.div`
 background: #E0F2FE;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  width: 80px;
  height: 80px;

  Image {
    width: 50px;
    height: 50px;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;

const Category = () => {
  return (
    <Categories>
      <TopSection>
        <h3>Top Categories</h3>
        <p>See All</p>
      </TopSection>
      <BottomSection>
        <CategoryCard>
          <ImageCon>
            <Image src= '/assets/Icon.png' alt="Astrology" width={70} height={70}/>
          </ImageCon>
          <h4>Astrology</h4>
          <p>11 Courses</p>
        </CategoryCard>
        <CategoryCard>
          <ImageCon>
            <Image src='/assets/Icon.png' alt="Development" width={70} height={70} />
          </ImageCon>
          <h4>Development</h4>
          <p>12 Courses</p>
        </CategoryCard>
        <CategoryCard>
          <ImageCon>
            <Image src='/assets/Icon.png' alt="Marketing" width={70} height={70} />
          </ImageCon>
          <h4>Marketing</h4>
          <p>12 Courses</p>
        </CategoryCard>
        <CategoryCard>
          <ImageCon>
            <Image src='/assets/Icon.png' alt="Physics" width={70} height={70}/>
          </ImageCon>
          <h4>Physics</h4>
          <p>14 Courses</p>
        </CategoryCard>
      </BottomSection>
    </Categories>
  );
};

export default Category;