import styled, { keyframes } from "styled-components";

const ExampleSep = styled.div`
  margin-top: 15px;
  display: block;
`;

const ExampleWrapper = styled.div`
  background-color: ${props => props.theme.backGroundColor};
  color: ${props => props.theme.textColor};
`;

const Father = styled.div`
  display: flex
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Cicle = styled(Box)`
  border-radius: ${(props) => props.radius};
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  display: block;
  background-color: tomato;
`;

const rateationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const AniWrapper = styled.div`
  display: flex;
`;

const AniBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rateationAnimation} 1s linear infinite;

  span {
    color: ${props => props.theme.textColor};
    font-size: 36px;
    &:hover {
      font-size: 72px;
    }
  }
  span:active {
    opacity: 0;
  }
`;

const Emoji = styled.span`
  color: white;
`;

const AniBox2 = styled(AniBox)`
  ${Emoji} {
    font-size: 32px;
    &:hover {
      font-size: 72px;
    }
  }
`;


function App() {
  return <ExampleWrapper>
    <ExampleSep>Use propes and extends examples.</ExampleSep>
    <Father as="header">
      <Box bgColor="teal" />
      <Cicle bgColor="tomato" radius="50px" />
    </Father>

    <ExampleSep>As examples.</ExampleSep>
    <Btn>Login</Btn>
    <Btn as="a" href="/">Login</Btn>

    <ExampleSep>Attribute example.</ExampleSep>
    <Input />
    <Input />

    <ExampleSep>Animatation and Selector example.</ExampleSep>
    <AniWrapper>
      <AniBox>
        <span>$</span>
      </AniBox>
    </AniWrapper>

    <ExampleSep>Selector example.</ExampleSep>
    <AniWrapper>
      <AniBox2>
        <Emoji as="p">*</Emoji>
        <Emoji>%</Emoji>
      </AniBox2>
    </AniWrapper>
  </ExampleWrapper>;
}

export default App;
