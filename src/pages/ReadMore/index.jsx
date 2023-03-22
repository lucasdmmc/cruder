import { Fragment } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header"
import { CardsContainer } from "../feed/styles";

export function ReadMore() {
  return (
    <Fragment>
      <Header isInPost/>

      <CardsContainer>
        <Card
          noButton
          title="Consumindo API"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat inventore maiores deleniti? Reiciendis"
        />
      </CardsContainer>
    </Fragment>
  )
}