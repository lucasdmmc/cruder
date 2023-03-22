import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  background-color: #2F3644;

  padding: 30px 40px;
  width: 600px;

  border-radius: 7px;
  margin-top: 40px;

  > header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 15px;

    img {
      width: 20px;
      margin-left: 40px;

      cursor: pointer;
    }

    h2 {
      display: flex;
      flex-wrap: wrap;
      max-width: 500px;

      font-family: Noto Sans;
      font-weight: 700;

      color: #D2DAF5;

      font-size: 1.7rem;
    }
  }

  .line {
    background-color: #3E445B;
    height: 2px;
  }

  p {
    margin-top: 20px;
    font-size: 1.2rem;
    
    max-width: 500px;

    font-family: Noto Sans;
    font-weight: 500;

    color: #B3BACF;
  }
`

export const AllButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  ${({ noButton }) => noButton && css`
    display: none;
  `}
`