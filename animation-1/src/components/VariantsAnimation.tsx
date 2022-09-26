import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const Wrapper = styled.div`
  display: block;
  text-align: center;
`;

const AnimationElements = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  place-self: center;
`

const Title = styled.h2`
  padding: 20px;
  font-weight: bold;
`

const boxVariants: Variants = {
  start: {
    opacity: 0,
    scale: 0.5
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}

const circleVariants: Variants = {
  start: {
    opacity: 0,
    y: 10
  },
  end: {
    opacity: 1,
    y: 0
  }
}


function VariantsAnimation() {
  return (
    <Wrapper>
      <Title>Variants Animations</Title>
      <AnimationElements>
        <Box variants={boxVariants} initial="start" animate="end">
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
        </Box>
      </AnimationElements>
    </Wrapper>
  );
}

export default VariantsAnimation;