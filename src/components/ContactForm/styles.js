import styled from 'styled-components'
import { Input as UnformInput } from "@rocketseat/unform";

export const Input = styled(UnformInput)`
  margin-bottom:15px;
  width: 100%;
  line-height: 1.5;
  padding: 15px 10px;
  border: 1px solid #8a8a8a;
  color: #c7c7c7;
  background: #212121;
  transition: background-color 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25),
  transform 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);

  &&::placeholder {
    color: inherit;
    /*Fix opacity issue on Firefox*/
    opacity: 1;
  }

  &&:focus,
  input[type="checkbox"]:focus + label {
    background: #8a8a8a;
  }

  &&:focus {
    transform: scale(1.02);
  }
  `

export const Container = styled.div`
  margin-top:80px;
  `

export const Button = styled.button`
  display: block;
  margin: 0 0 20px;
  text-align: center;
  margin-bottom:15px;
  width: 100%;
  line-height: 1.5;
  padding: 15px 10px;
  border: 1px solid #8a8a8a;
  color: #c7c7c7;
  background: #212121;
`