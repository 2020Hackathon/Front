import React, { useCallback } from "react";
import * as S from "./style";
import logo from "../../assets/images/logo.png";
import loginIMG from "../../assets/images/loginIMG.png";
import { useHistory } from "react-router-dom";
const Login = () => {
    const history = useHistory();
  const goToSignUp = useCallback(() => {

      history.push('./SignUp');
  }, []);
  return (
    <S.MainBox>
      <S.LoginBox>
        <S.TitleImg src={logo}></S.TitleImg>
        <S.LoginTitle>로그인</S.LoginTitle>
        <S.LoginContainer>
          <S.Input placeholder="아이디"></S.Input>
          <S.Input placeholder="비밀번호"></S.Input>
          <S.Button>로그인</S.Button>
          <S.GoSignUp onClick={goToSignUp}>아직 계정이 없으신가요?</S.GoSignUp>
        </S.LoginContainer>
      </S.LoginBox>
      <S.LoginImg src={loginIMG} />
    </S.MainBox>
  );
};
export default Login;
