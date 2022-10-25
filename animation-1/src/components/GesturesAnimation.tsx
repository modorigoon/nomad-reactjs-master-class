import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

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

const boxVariants = {
  hover: {
    scale: 1.5, rotateZ: 90
  },
  click: {
    scale: 1, borderRadius: '20px'
  },
  drag: {
    backgroundColor: 'rgb(46, 204, 113)',
    transition: { duration: 10 }
  }
};

const Biggerbox = styled(motion.div)`
  width: 800px;
  height: 300px;
  border-radius: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  padding: 20px;
  font-weight: bold;
`

function GesturesAnimation() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0);
  //const scale = useTransform(x, [-150, 0, 150], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-150, 0, 150], [-360, 0, 360]);
  const color = useTransform(x, [-150, 150], [
    "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
    "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))"
  ])

  useEffect(() => {
    //scale.onChange(() => console.log(scale.get()));
    rotateZ.onChange(() => console.log(rotateZ.get()));
  }, [x]);

  return (
    <Wrapper>
      <Title>Gestures Animations</Title>
      <AnimationElements>
        <button onClick={() => x.set(100)}>Move Box!</button>
        <Biggerbox ref={biggerBoxRef} style={{ background: color }}>
          <Box
            style={{ x, rotateZ }}
            drag="x"
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
