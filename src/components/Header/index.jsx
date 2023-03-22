import { Link } from "react-router-dom";
import { Button, HeaderContainer } from "./styles";
import backToHomeImg from "../../images/back-button.svg"
import { Fragment } from "react";
export function Header({ isInPost = false }) {
  return (
    <HeaderContainer isInPost={isInPost}>
      {
        isInPost ?
        <Fragment>
          <Link to="/">
            <img src={backToHomeImg} style={{ width: "50px" }}/>
          </Link>
          <div></div>
        </Fragment>
        :
        <Fragment>
          <h1>CRUder</h1>

          <Link to="/post">
            <Button>
              Criar
            </Button>
          </Link>

        </Fragment>
      }
    </HeaderContainer>    
  )
}