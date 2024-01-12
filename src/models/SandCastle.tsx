import type * as THREE from "three";
import React, { useEffect, useState } from "react";
import { useGLTF, Text } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import sandCastle from "../assets/3d/low_poly_sand_castle.glb";
import { type CastleProps } from "../interface/castleProps.interface";


type GLTFResult = GLTF & {
  nodes: {
    Cylinder001_Material001_0: THREE.Mesh;
    Cylinder002_Material001_0: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};


const SandCastle: React.FC<CastleProps> = (castleProps) => {
  const { nodes, materials } = useGLTF(sandCastle) as GLTFResult;
  const {totalHealth, health, ...groupProps} = castleProps;

  useEffect(() => {
    if (health && health <= 0) {
      alert("You Won!");
    }
  }, [health]);

  return (
    <group {...groupProps} dispose={null} name="SandCastle" >
        <group scale={0.001}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[0, -133.426, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[0, 229.132, -0.985]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
        <Text
            position={[0, -.14, .6]} // Adjust position as needed
            rotation={[-1/2*Math.PI, 0, 0]} // Adjust rotation as needed
            fontSize={.2} // Adjust fontSize as needed
            color="black" // Adjust color as needed
            anchorX="center" // Horizontal anchor point
            anchorY="middle" // Vertical anchor point
          >
            {totalHealth + "/"+ health }
          </Text>
      </group>
  );
}

useGLTF.preload(sandCastle);

export default SandCastle;
