import { type GroupProps } from "@react-three/fiber";
import { type ICard } from "./card.interface";

export interface CardProps extends GroupProps{
    cardInfo: ICard;
    isDragable: boolean;
    setMana: React.Dispatch<React.SetStateAction<number>>;
    mana: number;
    healthP1: number;
    setHealthP1: React.Dispatch<React.SetStateAction<number>>;
    healthP2: number;
    setHealthP2: React.Dispatch<React.SetStateAction<number>>;
    setCardList: React.Dispatch<React.SetStateAction<ICard[]>>;
    cardList: ICard[];
    order: number;
    initialPosition: number[];
}