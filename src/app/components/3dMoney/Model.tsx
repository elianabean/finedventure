import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, MathUtils } from "three";
import {useMotionValue, useSpring} from "framer-motion";

useGLTF.preload("/bag_of_money.glb");

export default function Model() {
  const group = useRef<Group>(null)

  useFrame(({camera}) => {
    group.current?.rotateY(MathUtils.degToRad(0.2));
  });

  const { scene } = useGLTF(
    "/bag_of_money.glb"
  )

  return (
    <group ref={group} scale={[4, 4, 4]}>
      <primitive object={scene}/>
    </group>
  )
}