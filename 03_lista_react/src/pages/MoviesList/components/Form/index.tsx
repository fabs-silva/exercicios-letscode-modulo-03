import styled from "styled-components";
import { variables } from "../../../../Theme/Theme";

const { colors, fontSizes, fontWeight } = variables;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FormTitle = styled.p`
  color: ${colors.mainBlue};
  font-size: ${fontSizes.xl};
  font-weight: ${fontWeight.xl};
`;

const InputContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: none;
`;

export function Form() {
  return (
    <FormContainer>
      <FormTitle>Cadastrar Novo Filme</FormTitle>
      <InputContainer>
        <label>Nome do Filme:</label>
        <input type="text" placeholder="Nome do Filme" />
      </InputContainer>
      <InputContainer>
        <label>Ano do Filme:</label>
        <input type="number" placeholder="Ano do Filme" />
      </InputContainer>
    </FormContainer>
  );
}
