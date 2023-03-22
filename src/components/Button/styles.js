import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  font-size: 1.3rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  
  font-family: Heebo;
  font-weight: 700;
  
  cursor: pointer;
  
  padding: 5px 40px;

  transition: filter 0.4s;
  
  color: rgba(255, 255, 255, 0.938);

  ${({ variant = "RED"}) => 
    variant === "RED" && css`
    background: rgb(241, 45, 45);
  `}
  ${({ variant = "GREEN"}) => 
    variant === "GREEN" && css`
    background: #3DEC81;
  `}
  ${({ variant = "BLUE"}) => 
    variant === "BLUE" && css`
    background: #80D8FF;
  `}


  &:hover {
    filter: brightness(0.9)
  }
`