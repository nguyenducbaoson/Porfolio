import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export type ModelProps = {
  modelPath: string;
  name: string;
  scale: number | [number, number, number];
  rotation: [number, number, number];
};

type TechIconCardExperienceProps = {
  model: ModelProps;
};

const TechIconCardExperience = ({ model }: TechIconCardExperienceProps) => {
  const scene = useGLTF(model.modelPath);

  // ✨ Chuyển scale thành tuple nếu là số
  const scale: [number, number, number] = Array.isArray(model.scale)
    ? model.scale
    : [model.scale, model.scale, model.scale];

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh && child.name === "Object_5") {
          (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
            color: "white",
          });
        }
      });
    }
  }, [model.name, scene]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
      <Environment preset="city" />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
