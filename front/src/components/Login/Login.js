import React, { useCallback, useState } from "react";
import * as S from "./style";
import logo from "../../assets/images/logo.png";
import loginIMG from "../../assets/images/loginIMG.png";
import { useHistory } from "react-router-dom";
import { requestAPI } from "../../lib/ApiRequest";
const Login = () => {
  const history = useHistory();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const goToSignUp = useCallback(async () => {
    history.push("./SignUp");
  }, []);
  const login = useCallback(async () => {
    try {
      const res = await requestAPI(
        "/v1/signin/basic",
        { id: id, password: pw },
        {},
        "post"
      );
      if(res.status === 200){
        localStorage.setItem("access_token", res.data.data.tokens.accessToken);
        history.push('./home');
      }
    } catch (err) {
      if(err === 400){
        alert('6글자 이상으로 입력해야합니다.')
      }
      else if(err === 401){
        alert('잘못된 id 혹은 비밀번호입니다.');
      }
    }
  }, [id, pw]);
  const setState = useCallback(
    (e) => {
      e.target.id === "id" ? setId(e.target.value) : setPw(e.target.value);
    },
    [id, pw]
  );
  return (
    <S.MainBox>
      <S.LoginBox>
        <S.TitleImg src={logo}></S.TitleImg>
        <S.LoginTitle>로그인</S.LoginTitle>
        <S.LoginContainer>
          <S.Input
            placeholder="아이디"
            value={id}
            onChange={setState}
            id="id"
          ></S.Input>
          <S.Input
            placeholder="비밀번호"
            value={pw}
            onChange={setState}
            id="pw"
          ></S.Input>
          <S.Button onClick={login}>로그인</S.Button>
          <S.GoSignUp onClick={goToSignUp}>아직 계정이 없으신가요?</S.GoSignUp>
        </S.LoginContainer>
      </S.LoginBox>
      <S.LoginImg src={loginIMG} />
    </S.MainBox>
  );
};
export default Login;
