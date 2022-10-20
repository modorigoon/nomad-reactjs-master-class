import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef } from 'react';

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

const boxVariants = {
  hover: {
    scale: 1.5, rotateZ: 90
  },
  click: {
    scale: 1, borderRadius: '100px'
  },
  drag: {
    backgroundColor: 'rgb(46, 204, 113)',
    transition: { duration: 10 }
  }
};

const Biggerbox = styled.div`
  width: 300px;
  height: 300px;
  background-color: yellow;
  border-radius: 40px;
  overflow: hidden;
`

const Title = styled.h2`
  padding: 20px;
  font-weight: bold;
`

function GesturesAnimation() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  return (
    <Wrapper>
      <Title>Gestures Animations</Title>
      <AnimationElements>
        <Biggerbox ref={biggerBoxRef}>
          <Box
            drag
            dragSnapToOrigin
            dragElastic={0}
            dragConstraints={biggerBoxRef}
            variants={boxVariants}
            whileHover="hover"
            whileDrag="drag"
            whileTap="click" />
        </Biggerbox>
      </AnimationElements>
    </Wrapper>
  );
}

export default GesturesAnimation;
