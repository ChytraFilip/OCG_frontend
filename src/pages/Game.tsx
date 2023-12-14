import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../components/Loader';

import GameBoard from '../models/GameBoard';
import { Environment, OrbitControls } from '@react-three/drei';
import DraggableCard from '../models/DraggableCard';
import Card from '../models/Card';
import arena from '../assets/astral.jpg'


const Game = () => {
  return (
    <section className="flex items-center justify-center h-screen text-white" > {/*  style={{ backgroundImage: `url(${arena})`, backgroundSize: 'cover', fontFamily: 'Libre Baskerville, serif' }}>     <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        popup
      </div>  */}
      <Canvas className='w-full h-screen bg-transparent' camera={{ position: [-15, 15, 0], near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
        </Suspense>
        <Environment
            background={true}
            blur={0.8}
            preset='night'
          />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={10}
          maxDistance={Infinity}
          target={[0, 0, 0]}
        />
        <ambientLight intensity={2} />
        <pointLight position={[0, 10, 0]} intensity={100} />
        <directionalLight position={[0, 10, 0]} intensity={1}/>
        <GameBoard />
        {/* <DraggableCard /> */}
        <DraggableCard />
        {/* <Card /> */}
      </Canvas>
    </section>
  );
};

export default Game;
        