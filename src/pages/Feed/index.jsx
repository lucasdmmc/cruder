import { Fragment } from "react"
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { CardsContainer } from "./styles"

export function Feed() {
  return (
    <Fragment>
      <Header />

      <CardsContainer>
        <Card 
          title="Consumindo API"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat inventore maiores deleniti? Reiciendis"
        />
      </CardsContainer>
    </Fragment>
  )
}