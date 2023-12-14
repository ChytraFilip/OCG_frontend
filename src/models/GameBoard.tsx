import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from '@react-spring/three'
import gameboardScene from "../assets/3d/GameBoard.glb";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Plane: THREE.Mesh;
    Torus: THREE.Mesh;
    Torus001: THREE.Mesh;
    HeroEmblem: THREE.Mesh;
    HeroEmblem001: THREE.Mesh;
  };
  materials: {
    EdgeBaked: THREE.MeshStandardMaterial;
    BoardBaked: THREE.MeshStandardMaterial;
    CorodedGoldBaked: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
  };
};

const GameBoard: React.FC<JSX.IntrinsicElements["group"]> = (props) => {
  const gameboardRef = useRef<THREE.Group | null>(null);

  const { nodes, materials } = useGLTF(gameboardScene) as GLTFResult;
  return (
    <a.group ref={gameboardRef} {...props}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.EdgeBaked}
        position={[-7, 0.1, 0]}
        scale={[1, 0.1, 3.822]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.BoardBaked}
        scale={[8, 1, 10]}
      />
      <mesh
        geometry={nodes.Torus.geometry}
        material={materials.CorodedGoldBaked}
        position={[-6, 0.2, 0]}
        scale={[1.5, 1, 1.2]}
      />
      <mesh
        geometry={nodes.Torus001.geometry}
        material={materials.CorodedGoldBaked}
        position={[6.125, 0.2, 0]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.5, 1, 1.2]}
      />
      <mesh
        geometry={nodes.HeroEmblem.geometry}
        material={materials["Material.004"]}
        position={[-6, 0.2, 0]}
        scale={[1.2, 0.1, 1]}
      />
      <mesh
        geometry={nodes.HeroEmblem001.geometry}
        material={materials["Material.004"]}
        position={[6.125, 0.2, 0]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.2, 0.1, 1]}
      />
    </a.group>
  );
}

useGLTF.preload(gameboardScene);

export default GameBoard;
