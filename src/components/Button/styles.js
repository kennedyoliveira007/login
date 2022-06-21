import { hover } from '@testing-library/user-event/dist/hover';
import styled from 'styled-components';

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #4488da;
  background-size: 200% auto;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  background-image: linear-gradient(
    to right,
    #0174df 0%,
    #26a0da 51%,
    #314755 100%
  );
  transition: 0.5s;
`;
