import styled from 'styled-components';

export const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Задаем 3 колонки с одинаковой шириной */
  grid-gap: 10px;
  padding-top: 20px;
`;
