// import { useFrame, useThree } from '@react-three/fiber'
// import { useState, useRef } from 'react'
// import Card from './Card'

// const DraggableCard = () => {
//   const [active, setActive] = useState(false)
//   const { camera, raycaster, mouse } = useThree()
//   const meshRef = useRef()

//   useFrame(() => {
//     if (active) {
//       raycaster.setFromCamera(mouse, camera)
//       const intersects = meshRef.current ? raycaster.intersectObject(meshRef.current) : []
//       if (intersects.length > 0) {
//         if (meshRef.current) {
//           meshRef.current.position.copy(intersects[0].point)
//         }
//       }
//     }
//   })

//   return (
//     <Card
//       ref={meshRef}
//       onPointerDown={() => setActive(true)}
//       onPointerUp={() => setActive(false)}
//     />
//   )
// }

// export default DraggableCard

import type * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import cardModel from "../assets/3d/CardModel.glb";

type GLTFResult = GLTF & {
  nodes: {
    Cosmic_Material004_0: THREE.Mesh;
    Crystal_Material001_0: THREE.Mesh;
    Frame_Material006_0: THREE.Mesh;
    Gold_Material007_0: THREE.Mesh;
    Mirror_Material008_0: THREE.Mesh;
    Side_Material009_0: THREE.Mesh;
    Silver_Material002_0: THREE.Mesh;
    Stone_Material010_0: THREE.Mesh;
  };
  materials: {
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshPhysicalMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
  };
};

const Card: React.FC<JSX.IntrinsicElements["group"]> = (props) => {
  const { nodes, materials } = useGLTF(cardModel) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[-8.802, 2.5, -4.2]}
        rotation={[-Math.PI / 2, Math.PI / 2.8, Math.PI / 2]}
        scale={0.008}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[23.026, 243.102, 23.491]} scale={17.707}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cosmic_Material004_0.geometry}
              material={materials["Material.007"]}
              position={[-26.894, -8.25, -0.881]}
            />
          </group>
          <group position={[-46.186, 88.211, 16.178]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Crystal_Material001_0.geometry}
              material={materials["Material.004"]}
              position={[-4.762, -1.461, -0.156]}
            />
          </group>
          <group
            position={[-46.186, 88.211, 14.863]}
            scale={[100, 65.656, 5.256]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Material006_0.geometry}
              material={materials["Material.006"]}
              position={[-4.762, -2.225, -2.967]}
            />
          </group>
          <group
            position={[-46.186, 88.211, 14.863]}
            scale={[100, 100, 74.281]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Gold_Material007_0.geometry}
              material={materials["Material.011"]}
              position={[-4.762, -1.461, -0.21]}
            />
          </group>
          <group
            position={[-46.186, 88.211, 14.863]}
            scale={[100, 65.656, 5.256]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mirror_Material008_0.geometry}
              material={materials["Material.008"]}
              position={[-4.762, -2.225, -2.967]}
            />
          </group>
          <group
            position={[-46.186, 88.211, 14.863]}
            scale={[100, 65.656, 5.256]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Side_Material009_0.geometry}
              material={materials["Material.009"]}
              position={[-4.762, -2.225, -2.967]}
            />
          </group>
          <group position={[23.026, 243.102, 23.491]} scale={17.707}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Silver_Material002_0.geometry}
              material={materials["Material.002"]}
              position={[-26.894, -8.25, -0.881]}
            />
          </group>
          <group position={[-46.186, 178.719, 19.171]} scale={141.79}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Stone_Material010_0.geometry}
              material={materials["Material.010"]}
              position={[-3.359, -1.03, -0.11]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(cardModel);

export default Card;
