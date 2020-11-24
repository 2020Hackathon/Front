import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #6385ff;
`;
export const SignUpImg = styled.img`
  display: block;
  width: 40%;
  height: 100%;
  margin: 0 auto;
  padding-right: 10%;
`;
export const SignUpContainer = styled.div`
  background-color: white;
  flex: 1;
`;
export const TitleImg = styled.img`
  margin-top: 40px;
  margin-left: 50px;
`;
export const Input = styled.input`
  display: block;
  outline: none;
  width: 75%;
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
  background-color: #c2d0ff;
  width: 75%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  font-size: 15px;
  margin-top: 40px;
  margin:0 auto;
`;
export const MarginBlock = styled.div`
  width: 100%;
  height: 40px;
`;
export const LoginTitle = styled.div`
  font-size: 28px;
  margin-top: 30px;
  margin-left: 90px;
  color: #a79595;
`;
export const GoLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #989898;
  cursor: pointer;
  margin: 0 auto;
  font-size: 15px;
  height: 80px;
  width: 75%;
`;