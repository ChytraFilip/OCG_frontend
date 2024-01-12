import React from "react";
import { useGLTF } from "@react-three/drei";
import gameboardDesk from "../assets/3d/Gamedesk.glb";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

const GameBoard: React.FC<JSX.IntrinsicElements["group"]> = (props) => {
  const { nodes, materials } = useGLTF(gameboardDesk) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        scale={[4.736, 1, 2.656]}
        receiveShadow = {true}
      />
    </group>
  );
}

useGLTF.preload(gameboardDesk);

export default GameBoard;
