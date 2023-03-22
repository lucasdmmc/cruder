import { ButtonContainer } from "./styles";

export function Button({ title, variant, ...rest}) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {title}
    </ButtonContainer>
  )
}