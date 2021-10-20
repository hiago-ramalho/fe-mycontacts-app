import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  appearance: none;

  font-size: 16px;

  transition: border-color .2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => (
    error && css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;

    `
  )}
`;
