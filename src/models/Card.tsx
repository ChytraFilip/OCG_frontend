import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import card from "../assets/3d/card.glb";
import { useThree } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";
import { useGesture } from "react-use-gesture";
import { TextureLoader } from "three";
import { CardProps } from "../interface/cardProps.interface";
import { useEffect } from "react";


type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshPhysicalMaterial;
    ["Material.002"]: THREE.MeshPhysicalMaterial;
    ["Material.003"]: THREE.MeshPhysicalMaterial;
    ["Material.004"]: THREE.MeshPhysicalMaterial;
  };
};

const Card: React.FC<CardProps> = (cardProps) => {
  const { nodes, materials } = useGLTF(card) as GLTFResult;

  const {cardInfo, isDragable, setMana, mana, healthP1, healthP2, setHealthP1, setHealthP2, order, initialPosition, cardList, setCardList, ...props} = cardProps;

  const { size, viewport, raycaster, pointer, scene, camera } = useThree()
  const x_aspect = size.width / viewport.width * 6  ;
  const y_aspect = size.height / viewport.height * 6 ;
  const [spring, setSpring] = useSpring(() => ({ position: initialPosition }));

  const play = (name: string) => {
    if (name === "SandCastle") {
      setHealthP1(healthP1 - cardInfo.attack);
    }
    if (name === "StoneCastle") {
      setHealthP2(healthP2 - cardInfo.attack);
    }
    setCardList(cardList.filter((card) => card.card_Id !== cardInfo.card_Id)); 
  };

  const decrMana = () => {
    setMana(mana - cardInfo.cost);
  }

  const playcard = (name: string) => {
    decrMana();
    play(name);
  };

  const bind = useGesture({
    onDrag: ({ movement: [x, y] }) => {
      if (isDragable) {
        setSpring({ position: [x / x_aspect + initialPosition[0], -y / y_aspect, .01] });
      }
    },
    onDragEnd: () => {
      if (isDragable) {
        raycaster.setFromCamera(pointer, camera);
        const objectSandCastle = scene.getObjectByName('SandCastle');
        const intersectSandCastle = objectSandCastle ? raycaster.intersectObjects([objectSandCastle], true) : [];
        const objectStoneCastle = scene.getObjectByName('StoneCastle');
        const intersectStoneCastle = objectStoneCastle ? raycaster.intersectObjects([objectStoneCastle], true) : [];
        if (intersectSandCastle.length > 0) {
          if (mana >= cardInfo.cost) {
              playcard('SandCastle');
          }
        }
        if (intersectStoneCastle.length > 0) {
          if (mana >= cardInfo.cost) {
            playcard('StoneCastle');
          }
        } 
        setSpring({ position: initialPosition });
      }
    },
  })

  useEffect(() => {
    setSpring({position: initialPosition})
  }, [cardInfo]);


  return (
    <a.group {...props} dispose={null} {...spring} {...bind()}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials[`Material.0${cardInfo.card_Id}` as keyof typeof materials]}
        scale= {[1.344, 1, 2.048]}        
      />
    </a.group>
    
  );
}
useGLTF.preload(card);


export default Card;
