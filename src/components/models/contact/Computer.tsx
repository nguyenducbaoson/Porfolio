import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { Mesh, MeshStandardMaterial } from "three";
import type { JSX } from "react";

// Định nghĩa kiểu dữ liệu cho GLTF trả về
type GroupProps = JSX.IntrinsicElements['group'];

type GLTFResult = GLTF & {
  nodes: {
    Cube000_ComputerDesk_0001_1: Mesh;
    Cube000_ComputerDesk_0001_2: Mesh;
  };
  materials: {
    ["ComputerDesk.001"]: MeshStandardMaterial;
    ["FloppyDisk.001"]: MeshStandardMaterial;
  };
};

export function Computer(props: GroupProps) {
const { nodes, materials } = useGLTF(
  "/models/computer-optimized-transformed.glb"
) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
