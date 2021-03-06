import React, { useCallback, useState } from "react";
import * as S from "./style";
import signUpImg from "../../assets/images/signUpIMG.png";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { requestAPI } from "../../lib/ApiRequest";
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
          switch (e.target.value) {
            case "대전":
              setUserData({ ...userData, belong: "Daejeon" });
              break;
            case "대구":
              setUserData({ ...userData, belong: "Daegu" });
              break;
            case "광주":
              setUserData({ ...userData, belong: "Gwangju" });
              break;
            default:
              break;
          }

          break;
        default:
          break;
      }
    },
    [userData]
  );
  const signUp = useCallback(
    async (e) => {
      console.log(e);
      e.preventDefault();
      if (userData.PW === userData.PWcheck) {
        try {
          const res = await requestAPI(
            "/v1/signUp/basic",
            {
              name: userData.name,
              id: userData.ID,
              password: userData.PW,
              userinfo: userData.belong,
            },
            {},
            "post"
          );
          if (res.status === 200) {
            alert("회원가입 되었습니다.");
            history.push("./login");
          }
        } catch (err) {
          if (err === 400) {
            alert("이미 있는 유저입니다.");
          }
        }
      } else {
        alert("비밀번호가 서로 다릅니다.");
      }
    },
    [userData]
  );
  return (
    <S.Container>
      <S.SignUpImg src={signUpImg} />
      <S.SignUpContainer>
        <S.TitleImg src={logo} />
        <S.LoginTitle>회원가입</S.LoginTitle>
        <S.MarginBlock />
        <form onSubmit={signUp}>
          <S.Input
            placeholder="이름"
            value={userData.name}
            id="name"
            onChange={setState}
            required
          />
          <S.Input
            placeholder="아이디"
            value={userData.ID}
            id="id"
            onChange={setState}
            required
          />
          <S.Input
            placeholder="비밀번호"
            value={userData.PW}
            id="pw"
            onChange={setState}
            required
          />
          <S.Input
            placeholder="비밀번호 확인"
            value={userData.PWcheck}
            id="checkPW"
            onChange={setState}
            required
          />
          <S.Select id="belong" onChange={setState} required>
            <option>소속(선택)</option>
            <option>대전</option>
            <option>대구</option>
            <option>광주</option>
          </S.Select>
          <S.Button onSubmit={signUp} type="submit">
            회원가입
          </S.Button>
        </form>

        <S.GoLogin onClick={goToLogin}>이미 계정이 있으신가요?</S.GoLogin>
      </S.SignUpContainer>
    </S.Container>
  );
};
export default SignUp;
