import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';

import GameBoard from '../models/GameBoard';
import SandCastle from '../models/SandCastle';
import StoneCastle from '../models/StoneCastle';
import HandObject from '../models/HandObject';



const Game = () => {
  const [open, setOpen] = useState(false);
  const [yourRound, setYourRound] = useState(false);
  const [manaTier, setManaTier] = useState(0);
  const [mana, setMana] = useState(0);
  const totalHealthP1= 1;
  const totalHealthP2= 15;

  const [healthP1, setHealthP1] = useState(totalHealthP1);
  const [healthP2, setHealthP2] = useState(totalHealthP2);



  useEffect(() => {
    setManaTier(!yourRound && manaTier <= 9 ? manaTier + 1 : manaTier)
    setMana(yourRound ? manaTier : mana)
  }, [yourRound]);

  return (
    <section className="flex items-center justify-center h-screen text-white" >
      <Canvas className='w-full h-screen bg-transparent' >
        <Suspense fallback={<Loader />}>
        </Suspense>

        <Environment
            background={true}
            blur={0.8}
            preset='night'
          />
        <OrbitControls enabled={!open} />
        <ambientLight intensity={1.3} />
        <directionalLight position={[0, 10, 0]} intensity={1.2}/>
        <PerspectiveCamera makeDefault position={[0, 6, 0]} rotation={[-Math.PI / 2, 0, 0]}  />
        <GameBoard />
        <SandCastle position={[0, .15, -1.4]} totalHealth={totalHealthP1} health={healthP1} />
        <StoneCastle position={[0, 0, 1.4]} totalHealth={totalHealthP2} health={healthP2} />
        <HandObject open={open} setOpen={setOpen} isMyTurn={yourRound} setMana={setMana} mana={mana} healthP1={healthP1} healthP2={healthP2} setHealthP1={setHealthP1} setHealthP2={setHealthP2}/>
      </Canvas>
      <button onClick={() => setYourRound(!yourRound) } className='absolute left-3 top-1/2 translate-y-1/2 px-10 py-10 bg-center bg-contain bg-no-repeat text-3xl' style={{backgroundImage: 'url(/components_assets/button-removebg-preview.png)'}}>Next Round</button>
      <div className='absolute left-3 top-3/4 translate-y-1/2 px-10 py-10 text-5xl bg-center bg-contain bg-no-repeat w-40 h-40 text-center font-black' style={{backgroundImage: 'url(/components_assets/manaCrystal.png)'}}><div className='w-20 h-20 flex align-middle items-center justify-center'>{mana}</div></div>
    </section>
  );
};

export default Game;