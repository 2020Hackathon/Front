import React, { useCallback, useState } from "react";
import * as S from "./style";
import signUpImg from "../../assets/images/signUpIMG.png";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import {requestAPI} from '../../lib/ApiRequest';
const SignUp = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: "",
    ID: "",
    PW: "",
    PWcheck: "",
    belong: "",
  });
  const goToLogin = useCallback(() => {
    history.push("./login");
  }, []);
  const setState = useCallback(
    (e) => {
      switch (e.target.id) {
        case "name":
          setUserData({ ...userData, name: e.target.value });
          break;
        case "id":
          setUserData({ ...userData, ID: e.target.value });
          break;
        case "pw":
          setUserData({ ...userData, PW: e.target.value });
          break;
        case "checkPW":
          setUserData({ ...userData, PWcheck: e.target.value });
          break;
        case "belong":
          setUserData({ ...userData, belong: e.target.value });
          break;
        default:
          break;
      }
    },
    [userData]
  );
  const signUp = useCallback(() => {
      if(userData.PW === userData.PWcheck){
        requestAPI('')
      }
      else{
          alert('비밀번호가 서로 다릅니다.')
      }
  }, [userData]);
  return (
    <S.Container>
      <S.SignUpImg src={signUpImg} />
      <S.SignUpContainer>
        <S.TitleImg src={logo} />
        <S.LoginTitle>회원가입</S.LoginTitle>
        <S.MarginBlock />
        <S.Input
          placeholder="이름"
          value={userData.name}
          id="name"
          onChange={setState}
        />
        <S.Input placeholder="아이디" value={userData.ID} id="id" />
        <S.Input placeholder="비밀번호" value={userData.PW} id="pw" />
        <S.Input
          placeholder="비밀번호 확인"
          value={userData.PWcheck}
          id="checkPW"
        />
        <S.Input placeholder="소속(선택)" value={userData.belong} id="belong" />
        <S.Button onCLick={signUp}>회원가입</S.Button>
        <S.GoLogin onClick={goToLogin}>이미 계정이 있으신가요?</S.GoLogin>
      </S.SignUpContainer>
    </S.Container>
  );
};
export default SignUp;
