import { Fragment } from "react"
import { useForm } from "react-hook-form"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { StyledInpuyt } from "../../components/Input/styles"
import { CardPost, Fields, Form, Main } from "./styles"

export function Post() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    // yupResolver()
  })
  return (
    <Fragment>
      <Header isInPost/>

    <Main>
      <CardPost>
        <h1>Criar postagem</h1>
        <div className="line"></div>

        <Form onSubmit={handleSubmit}>
          <Fields>
            <label>Título</label>
            <StyledInpuyt type="text" {...register("title")}/>
          </Fields>
          <Fields>
            <label>Descrição</label>
            <StyledInpuyt type="text"{...register("description")}/>
          </Fields>
          <Fields>
            <label>Conteúdo</label>
            <textarea type="text" {...register("content")}></textarea>
          </Fields>

          <Button type="submit" variant="BLUE" title="Enviar"/>
        </Form> 
      </CardPost>

    </Main>
    </Fragment>
  )
}