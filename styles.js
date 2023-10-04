import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  h1 {
    display: flex;
    justify-content: center;
    font-family: tahoma;
    color: #340d61;
    padding: 2rem;
    
  }
  a {
    text-decoration: none;
    color: #340d61;
&:hover {
  color:pink;
}
  }
  .section--comments{
    display:flex;
    flex-direction:column;
    gap: 2rem;
  }
  form {
    width: 10rem;
    display:flex;
    flex-direction:column;
    gap: 1rem;
  }
  
button {
    display: inline-block;
    padding: 5px 10px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #dbff33;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
  }
  
button:hover {background-color: #340d61}
  
button:active {
    background-color: #340d61;
    box-shadow: 0 5px #666;
    transform: translateY(4px);}
  h3{
    color: #340d61;
  }
  li {
    list-style:circle;
  }
  input {
    width: 200px;
  }
`;
