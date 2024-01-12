import type * as THREE from "three";
import React, { useEffect, useState } from "react";
import { useGLTF, Text } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import stoneCastle from "../assets/3d/stoneCastle.glb";
import { type CastleProps } from "../interface/castleProps.interface";

type GLTFResult = GLTF & {
  nodes: {
    Circle_Castle_Base_0: THREE.Mesh;
    Circle_Castle_Pedestal_0: THREE.Mesh;
    Circle_Gold_0: THREE.Mesh;
    Circle_Roof_0: THREE.Mesh;
    Circle_Wood_0: THREE.Mesh;
  };
  materials: {
    Castle_Base: THREE.MeshStandardMaterial;
    Castle_Pedestal: THREE.MeshStandardMaterial;
    Gold: THREE.MeshStandardMaterial;
    Roof: THREE.MeshStandardMaterial;
    Wood: THREE.MeshStandardMaterial;
  };
};

const StoneCastle: React.FC<CastleProps> = (castleProps) => {
  const { nodes, materials } = useGLTF(stoneCastle) as GLTFResult;
  const {totalHealth, health, ...groupProps} = castleProps;

  useEffect(() => {
    if (health && health <= 0) {
      alert("Gane Over!");
    }
  }, [health]);

  return (
    <group {...groupProps} dispose={null} name="StoneCastle" >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={.1}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -.3, 0]}
            scale={[4.86829*1.2, 4.86829*1.2, 4.90009*1.2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_Castle_Base_0.geometry}
              material={materials.Castle_Base}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_Castle_Pedestal_0.geometry}
              material={materials.Castle_Pedestal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_Gold_0.geometry}
              material={materials.Gold}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_Roof_0.geometry}
              material={materials.Roof}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_Wood_0.geometry}
              material={materials.Wood}
            />
          </group>
        </group>
        
      </group>
      <Text
            position={[0, 0.001, -.6]} // Adjust position as needed
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

useGLTF.preload(stoneCastle);

export default StoneCastle;
