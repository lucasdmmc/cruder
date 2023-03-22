import styled from "styled-components";

export const Main = styled.main`
  margin-top: 30px;
`;

export const CardPost = styled.div`
  background-color: #2F3644;
  padding: 30px 70px;
  border-radius: 15px;
  max-width: 550px;
  margin: 0 auto;

  h1 {
    font-family: Heebo;
    font-weight: 800;
    text-align: center;

    color: #D2DAF5;

    font-size: 3rem;
    margin-bottom: 5px;
  };
  
  .line {
    height: 2px;
    background-color: #3E445B;
  };
`;

export const Form = styled.form`
  margin-top: 25px;
`

export const Fields = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 7px;
    font-size: 1.2rem;

    color: #D2DAF5;

    font-family: Poppins;
  }

  textarea {
    width: 100%;
    border-radius: 10px;
    border: 0;
    outline: 0;

    font-size: 1.2rem;

    padding-left: 15px;
    height: 190px;
    resize: none;

    padding-top: 10px;
  }
`

