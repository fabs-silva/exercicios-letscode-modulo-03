import styled from 'styled-components';
import { variables } from '../../Styles/variables';

const { colors, fontWeight, fonts, fontSizes } = variables;

const SearchFormContainer = styled.form`
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

const SearchFormFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & label {
    font-weight: ${fontWeight.lg};
  }

  & input {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${colors.mainGray};

    &::placeholder {
      font-family: ${fonts.text};
    }
  }
`;

const SearchFormButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SearchFormButton = styled.button`
  font-family: ${fonts.title};
  color: ${colors.mainYellow};
  background-color: ${colors.mainBlue};
  padding: 0.6rem 1.5rem;
`;

export {
  SearchFormContainer,
  SearchFormFieldset,
  SearchFormButton,
  SearchFormButtonContainer,
};
