import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';

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
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Biggerbox = styled(motion.div)`
  width: 300px;
  height: 800px;
  border-radius: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`

const Title = styled.h2`
  padding: 20px;
  font-weight: bold;
`

function ScrollAnimations() {
  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get(), scrollYProgress.get());
    });
  }, [scrollY]);

  return (
    <Wrapper>
      <Title>Scroll Animations</Title>
      <AnimationElements>
        <Biggerbox>
          <Box drag="y" dragSnapToOrigin style={{ scale }} />
        </Biggerbox>
      </AnimationElements>
    </Wrapper>
  );
}

export default ScrollAnimations;