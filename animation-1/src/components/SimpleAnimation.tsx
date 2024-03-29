import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h2`
  padding: 20px;
  font-weight: bold;
`

function SimpleAnimation() {
  return (
    <Wrapper>
      <Title>Simple Animations</Title>
      <AnimationElements>
        <Box
          transition={{ duration: 3 }}
          animate={{ borderRadius: '100px' }}
        />
        <Box
          transition={{ type: 'spring', delay: 0.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        />
      </AnimationElements>
    </Wrapper>
  );
}

export default SimpleAnimation;
