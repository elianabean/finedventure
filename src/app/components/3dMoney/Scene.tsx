'use client';
import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import {Stage } from "@react-three/drei"
import {OrbitControls} from "@react-three/drei";

export default function index() {
    return (
        <div>
            <div style={{ width: "50vw", height: "100vh"}} className="flex flex-col justify-center">
                <Canvas>
                    <OrbitControls enableZoom={false} enablePan={false}></OrbitControls>
                    <ambientLight intensity={2}/>
                    <directionalLight position={[2, 1, 1]} />
                    <Model />
                </Canvas>
            </div>
        </div>
    )
}