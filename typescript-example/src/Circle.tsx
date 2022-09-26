import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Wrapper = styled.div`
  display: inline-block;
`;

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 2px solid ${props => props.borderColor};
`;

function Circle({ bgColor, borderColor, text = 'D' }: CircleProps) {
  return <Wrapper>
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  </Wrapper>;
}

export default Circle;
