import { AllButtons, CardContainer } from "./styles";
import more from "../../images/more.svg"
import { Button } from "../Button";
import { Link } from "react-router-dom";
export function Card({ noButton = false, title, description }) {
  return (
    <CardContainer>
      <header>
        <h2>{title}</h2>
        <img src={more} />
      </header>

      <div className="line"></div>

      <p>{description}</p>

      {
        noButton ? 
        <></>
        :
        <AllButtons noButton={noButton}>
          <Link to="/edit">
            <Button variant="BLUE" title="Editar"/>
          </Link>
          <Link to="readmore">
            <Button variant="GREEN"title="Ler mais"/>
          </Link>
          <Button variant="RED" title="Deletar" />
        </AllButtons>
      }
    </CardContainer>
  )
}