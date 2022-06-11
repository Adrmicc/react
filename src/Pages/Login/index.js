import styled from "styled-components";
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-conf";
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;
const Card = styled.div`
  padding: 10px;
  background-color: rgb(40, 40, 40, 60%);
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Element1 = styled(Card)`
  grid-area: a1;
  font-size: 50px;
  font-weight: 200;
  @media (max-width: 780px) {
    font-size: 30px;
  }
  @media (max-width: 398px) {
    font-size: 26px;
  }
`;
const Element2 = styled(Card)`
  grid-area: a2;
  font-size: 50px;
  font-weight: 200;
  @media (max-width: 780px) {
    font-size: 30px;
  }
  @media (max-width: 398px) {
    font-size: 26px;
  }
`;

const GridContainer = styled.div`
  padding: 15px;
  height: 70%;
  width: 80%;
  min-height: 600px;
  max-height: 500px;
  flex-direction: column;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 2% 2%;
  grid-auto-flow: row;
  align-items: stretch;
  grid-template-areas: "a1 a2";
  background-color: rgb(40, 40, 40, 60%);
  border: 4px rgb(13, 13, 13) solid;
  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-height: 780px) {
    height: 60%;
  }
  @media (max-width: 780px) {
    min-height: 400px;
  }
`;
const LoginContainer = styled.div`
  width: 100%;
  text-align: left;
  color: white;
  padding-left: 5%;
  padding-bottom: 2%;
  font-weight: 400;
  @media (max-width: 375px) {
    font-size: 20px;
  }
`;
const Container = styled.div`
  border-top: 3px solid black;
  width: 100%;
  height: 100%;
  padding-left: 5%;
  font-size: 36px;
  display: flex;
  flex-direction: column;
  color: white;
  @media (max-width: 780px) {
    font-size: 22px;
  }
  @media (max-width: 398px) {
    font-size: 19px;
  }
`;
const Input = styled.input`
  max-width: 280px;
  height: 1.6rem;
  margin-top: 6px;
  @media (max-width: 880px) {
    max-width: 180px;
  }
  @media (max-width: 540px) {
    max-width: 140px;
  }
  @media (max-width: 375px) {
    max-width: 100px;
  }
`;
const P = styled.p`
  padding-top: 2%;
`;
const Button = styled.button`
  margin-top: 4%;
  margin-bottom: 7%;
  height: 1.6rem;
  max-width: 280px;
  @media (max-width: 880px) {
    max-width: 180px;
  }
  @media (max-width: 540px) {
    max-width: 140px;
  }
  @media (max-width: 375px) {
    max-width: 100px;
  }
`;

export default function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const translate = (error) => {
    return error
      .replace(".", "")
      .replace("-", " ")
      .replace("Firebase:", "")
      .replace("Error", "")
      .replace("(", "")
      .replace(")", "")
      .replace("auth/", "")
      .replace("internal error", "Nie wypelniono wszystkich pól.")
      .replace("invalid email", "Nieprawidlowy email")
      .replace(
        "Password should be at least 6 characters weak password",
        "Hasło powinno skladac sie z przynajmniej 6 znakow"
              )
      .replace("user not-found", "Nie znaleziono uzytkownika")
      .replace("wrong password", "Nieprawidlowe haslo");
  };
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      alert("Zarejestrowano");
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(translate(error.message));
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      alert("Zalogowano");
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(translate(error.message));
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <HomeContainer>
      <GridContainer>
        <Element1>
          <LoginContainer>Login</LoginContainer>
          <Container>
            <P>Email</P>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
            <P>Password</P>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
            <Button onClick={login}>Zaloguj</Button>
            {user ? (
              <>
                Zalogowano jako: {user.email}
                <Button onClick={logout}>wyloguj</Button>
              </>
            ) : (
              "niezalogowany"
            )}
          </Container>
        </Element1>
        <Element2>
          <LoginContainer>Register</LoginContainer>
          <Container justify-content="right">
            <P>Email</P>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
            />
            <P>Password</P>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
            />
            <Button onClick={register}>Rejestruj</Button>
          </Container>
        </Element2>
      </GridContainer>
    </HomeContainer>
  );
}
