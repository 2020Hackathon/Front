import React, {useCallback} from "react";
import * as S from "./style";
import signUpImg from "../../assets/images/signUpIMG.png";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
const SignUp = () => {
    const history = useHistory();
    const goToLogin = useCallback(()=>{history.push('./login')}, [])
  return (
    <S.Container>
      <S.SignUpImg src={signUpImg} />
      <S.SignUpContainer>
        <S.TitleImg src={logo} />
        <S.LoginTitle>회원가입</S.LoginTitle>
        <S.MarginBlock />
        <S.Input placeholder="이름" />
        <S.Input placeholder="아이디" />
        <S.Input placeholder="비밀번호" />
        <S.Input placeholder="비밀번호" />
        <S.Input placeholder="소속(선택)" />
        <S.Button>회원가입</S.Button>
        <S.GoLogin onClick={goToLogin}>이미 계정이 있으신가요?</S.GoLogin>
      </S.SignUpContainer>
    </S.Container>
  );
};
export default SignUp;
