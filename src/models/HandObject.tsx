import React, { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { type Group, type Object3DEventMap } from "three";
import { useSpring, a } from "@react-spring/three";
import Card from "./Card";
import { ICard } from "../interface/card.interface";

type HandProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isMyTurn: boolean;
    mana: number;
    setMana: React.Dispatch<React.SetStateAction<number>>;
    healthP1: number;
    setHealthP1: React.Dispatch<React.SetStateAction<number>>;
    healthP2: number;
    setHealthP2: React.Dispatch<React.SetStateAction<number>>;
};

const cardListSetUp: ICard[] = [
    {card_Id: "01", card_Name: "Astrid_Lumira", card_Description: "test", card_Type: "test", cost: 1, attack: 3, rarity: "test", image: "card01Texture.png"},
    {card_Id: "02", card_Name: "Sylvan_Leafwhisper", card_Description: "test", card_Type: "test", cost: 2, attack: 4, rarity: "test", image: "card02Texture.png"},
    {card_Id: "03", card_Name: "Fireball", card_Description: "test", card_Type: "test", cost: 2, attack: 2, rarity: "test", image: "card03Texture.png"},
    {card_Id: "04", card_Name: "Wooden Cannon", card_Description: "test", card_Type: "test", cost: 4, attack: 8, rarity: "test", image: "card04Texture.png"}
];

const HandObject = (handProps: HandProps) => {
    const { camera } = useThree(); // Get the camera
    const groupRef = useRef<Group>(); // Create a reference to the group
    const { open, setOpen, isMyTurn, ...cardProps} = handProps;
    const [cardList, setCardList] = useState(cardListSetUp);

    // Attach the group to the camera when the component mounts
    useEffect(() => {
        if (groupRef.current) {
            camera.add(groupRef.current);
        }
    }, [camera]);

    // Update the position of the group to be at the bottom of the canvas
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.position.set(0, props.location.get(), -1);
        }
    });

    // Use the useSpring hook to animate the scale transition
    const props = useSpring({ scale: open ? 1 : 0.6, location: open ? -0.25 : -0.4 });
  
    return (
        <a.group
            ref={groupRef as React.RefObject<Group<Object3DEventMap>>}     
        >
            <a.group 
                scale={props.scale}
            >
                {cardList.map((card, index) => (
                    console.log(card),
                    <Card 
                        key={card.card_Id}
                        cardInfo={card}
                        scale={0.1}
                        rotation={[1/2 * Math.PI, 0, 0]}
                        onPointerOver={() => setOpen(true)} // Open when the mouse is over the group
                        onPointerOut={() => setOpen(false)} // Close when the mouse is not over the group 
                        isDragable={isMyTurn}
                        setCardList={setCardList}
                        cardList={cardList}
                        order={index}
                        {...cardProps}
                        initialPosition={[((cardList.length/2)-1/2) * -.25 + index*.25, 0, 0]}
                    />
                ))}
            </a.group>
        </a.group>
    );
};

export default HandObject;