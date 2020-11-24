import styled from "styled-components";

export const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #6385ff;
`;
export const LoginBox = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
`;
export const TitleImg = styled.img`
  margin-top: 51px;
  margin-left: 50px;
`;
export const LoginTitle = styled.div`
  font-size: 28px;
  margin-top: 50px;
  margin-left: 90px;
  color:#A79595;
`;
export const LoginContainer = styled.div`
  width: 75%;
  height: 50%;
  margin: 0 auto;
  margin-top: 12%;
`;
export const Input = styled.input`
  display: block;
  outline: none;
  width: 90%;
  margin: 0 auto;
  height: 40px;
  border-radius: 5px;
  border: #6385ff 1px solid;
  margin-bottom: 30px;
  &::placeholder {
    padding-left: 10px;
    padding-top: 10px;
    font-size: 15px;
  }
`;
export const Button = styled.button`
  outline: none;
  cursor: pointer;
  background-color: #c2d0ff;
  width: 90%;
  margin: 0 auto;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  font-size: 15px;
  margin-top: 70px;
`;
export const GoSignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #989898;
  cursor: pointer;
  margin: 0 auto;
  font-size: 12px;
  height: 80px;
  width: 80%;
`;
export const LoginImg = styled.img`
  display: block;
  width:45%;
  margin:0 auto;
`;
