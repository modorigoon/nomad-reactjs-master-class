import React, { useState } from 'react';
import styled from 'styled-components';
import Circle from './Circle';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const SubmitBtn = styled.button`
  padding: 10px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.btnColor};
`;

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = event;
    setValue(value);
  };

  const [greet, setGreet] = useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGreet(`Greeting, ${value}`)
  };

  return <Container>
    <H1>Type-Script Examples.</H1>
    <Circle bgColor="teal" borderColor="blue" />
    <Circle bgColor="tomato" text="T" />

    <form onSubmit={onSubmit} style={{ marginTop: 15 }}>
      <input style={{ padding: 10, borderRadius: 20 }} value={value} onChange={onChange} type="text" placeholder="username" />
      <SubmitBtn>Log in</SubmitBtn>
    </form>
    {(greet) ? greet : null}
  </Container>;
}

export default App;
