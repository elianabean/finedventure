'use client';
import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { useProgress, Html, ScrollControls, Stage } from "@react-three/drei"
import {OrbitControls} from "@react-three/drei";

export default function index() {
    function Loader() {
        const { progress, active } = useProgress()
      
        return <Html center>{progress.toFixed(1)} % loaded</Html>
      }

    return (
        <div>
            <div style={{ width: "50vw", height: "100vh"}}>
                <Canvas flat linear>
                <OrbitControls enableZoom={false} enablePan={false}></OrbitControls>
                <Stage preset="rembrandt" intensity={1} environment="city">
                    <ambientLight intensity={2}/>
                    <directionalLight position={[2, 1, 1]}/>
                    <Model />
                    </Stage>
                </Canvas>
            </div>
        </div>
    )
}