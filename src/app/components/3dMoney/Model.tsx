import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, MathUtils } from "three";

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
    <group ref={group} scale={[30, 30, 30]} position={[0, -1, 0]} >
      <primitive object={scene} />
    </group>
  )
}