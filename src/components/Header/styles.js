import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;

    /* max-width: 1100px; */
    /* margin: 0 auto; */
    height: 100px;

    background: #2F3644;

    ${({ isInPost }) => isInPost && css`
      justify-content: space-around;
    `}

    h1 {
      font-family: Heebo;
      font-weight: 700;
      color: #29EBAA;

      cursor: pointer;
    }
`;

export const Button = styled.button`
    font-size: 1.2rem;
    font-family: Heebo;
    font-weight: 700;

    background-color: #447CE2;
    border: 0;

    color: #fff;

    padding: 10px 20px;
    border-radius: 10px;

    cursor: pointer;

    &:hover {
      background-color: #538af0
    }
`