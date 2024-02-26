import React from 'react'
import styled from "styled-components";

const About = () => {
   
  return (
    <Wrapper>
    <div className="container grid grid-two-column">

      {/* for image  */}
      <div className="section-hero-image">
        <picture>
          <img src="./images/about1.png" alt="deuglo image" className="hero-img " />
        </picture>
      </div>

      <div className="section-hero-data">
           
        <h1 >About us</h1>
          <h2>500+ Projects</h2>
          <h2>9+ Years</h2>
        </div>
    </div>
  </Wrapper>
);
};

const Wrapper = styled.section`
padding: 3rem 0;

.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  max-width: 16rem;
}

.hero-top-data {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.helper};
}

.hero-heading {
  text-align: center;
  text-transform: uppercase;
  font-size: 3rem;
}

.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 100rem;
  font-weight: 500;
}

.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

picture {
  text-align: center;
}

.hero-img {
  max-width: 80%;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem;
  }
}
`;

export default About
