// impact-at-glance-style.js
import styled from "styled-components";

export const ImpactAtStyle = styled.section`
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;

  .impact-at-glance {
    width: 100%;
    max-width: 1100px;  
    margin: 0 auto;
  }

  .impact-at-glance__container__title {
    text-align: center;
    margin-bottom: 2.5rem;
    font-size: 2.4rem;
    font-weight: 600;
    color: #222;
    font-family: Inter, sans-serif;
  }
    .impact-at-glance__container__title h2 span{
        color: red;
    }
  .impact-at-glance__container__title span {
    color: #ff3b6a;
  }

  .impact-at-glance__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem 2rem;
  }

  .card {
    flex: 0 0 calc(50% - 1rem);   /* 2 in a row */
    padding: 1.5rem 2rem;
    border-radius: 16px;
    font-family: Inter, sans-serif;
    box-sizing: border-box;
  }

  .element1 {
    background-color: rgb(255, 223, 228);
  }
  .element2 {
    background-color: rgb(226, 240, 250);
  }
  .element3 {
    background-color: rgb(222, 255, 236);
  }
  .element4 {
    background-color: rgb(255, 230, 199);
  }

  @media (max-width: 768px) {
    .card {
      flex: 0 0 100%;
    }
  }
`;
