import {
  CollisionEnterPayload,
  CylinderCollider,
  RapierRigidBody,
  RigidBody,
  vec3,
} from "@react-three/rapier";
// @ts-expect-error No Types for Ecctrl
import Ecctrl, { EcctrlAnimation, useGame } from "ecctrl";
import {
  Cylinder,
  Html,
  KeyboardControls,
  OrbitControls,
  useKeyboardControls,
} from "@react-three/drei";
import { animationSet, keyboardMap } from "../../constants/joystick";
// import { Priest } from '@/models/Priest';
import { getModelPath } from "@/helpers/path";
import { useEffect, useRef, useState } from "react";
import { playAudio, stopAudio } from "@/helpers/audio";
import { Map3 } from "@/models/Map3";
import { Warrior } from "@/models/Warrior";
// import { getRandomArbitrary } from "@/helpers/random";
import { Trunk } from "@/components/Trunk";
import { Vector3 } from "three";
import { useCheckpoint } from "@/stores/useCheckpoint";
import { LoadingScreen } from "@/components/LoadingScreen";
import { player } from "@/constants/colliders";
import { Bullet } from "@/components/Bullet";
import { Bullet as TypeBullet } from "@/Interfaces/Bullet";
import { Demon } from "@/models/Demon";
// import * as THREE from 'three';
import { CharacterController } from "@/components/CharacterController";
// import { direction2Points } from "@/helpers/distance";
import { Vector } from "@dimforge/rapier3d-compat";
import { gameStates, useGame as useLocalGame } from "@/stores/useGame";
import { GameOver } from "@/components/GameOver";
import { useCharacter } from "@/stores/useCharacter";
import { rewards } from "@/constants/rewards";
import { Reward } from "@/Interfaces/Reward";
import { Cross } from "@/models/Cross";
import { Win } from "@/components/Win";
import { Caiman } from "@/models/Caiman";
import { Ocean } from "@/components/Ocean";
import { CaimanCharacterController } from "@/components/CaimanCharacterController";
import { CircleOfSpheres } from "@/components/CircleOfSpheres";
import Checkpoint from "@/components/Checkpoint";
import { direction2Points } from "@/helpers/distance";
import { Demon2 } from "@/models/Demon2";
// import { rewards } from "./rewards";
// import { Reward } from "@/Interfaces/Reward";
// import { Cross } from "@/models/Cross";
import { charactersAtom, socket } from "@/components/SocketManager";
import { useAtom } from "jotai";
import { ExternalWarrior } from "@/models/ExternalWarrior";
import { useFrame } from "@react-three/fiber";

export const Index = () => {
  const [characters] = useAtom(charactersAtom);

  const characterURL = getModelPath("warrior");

  const characterRef = useRef<RapierRigidBody>();

  const water1 = useRef<RapierRigidBody>(null);

  const water2 = useRef<RapierRigidBody>(null);

  const caiman = useRef<RapierRigidBody>(null);

  const curCheckpoint = useCheckpoint((state) => state.curCheckpoint);

  const setCurCheckpoint = useCheckpoint((state) => state.setCurCheckpoint);

  const setCharacterRef = useCharacter((state) => state.setCharacterRef);

  // const [trunksToShow, setTrunksToShow] = useState<JSX.Element[]>([]);

  const [velocity, setVelocity] = useState<number>(2.5);

  const [ecctrlMode, setEcctrlMode] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const [bullets, setBullets] = useState<TypeBullet[]>([]);

  const [waterBalls, setWaterBalls] = useState<Vector3[]>([]);

  // @ts-expect-error State types unavailable
  const curAnimation = useGame((state) => state.curAnimation);

  // @ts-expect-error State types unavailable
  const setMoveToPoint = useGame((state) => state.setMoveToPoint);

  const gameState = useLocalGame((state) => state.gameState);

  const setCurLevel = useLocalGame((state) => state.setCurLevel);

  const [availableRewards, setAvailableRewards] = useState<Reward[]>([]);

  const storeRewards = useLocalGame((state) => state.rewards);

  const [boosDeath, setBoosDeath] = useState(false);

  const onAttack = (position?: Vector) => {
    setTimeout(() => {
      launchBullet(position);
    }, 1000);
  };

  const launchBullet = (position?: Vector) => {
    const demonPosition = position;
    const characterPosition = characterRef.current?.translation();

    if (demonPosition && characterPosition) {
      const bulletPosition = demonPosition;

      const direction = direction2Points(characterPosition, demonPosition);
      const bulletAngle = Math.atan2(direction.x, direction.z);

      const bullet = {
        id: new Date().toTimeString(),
        position: vec3(bulletPosition),
        angle: bulletAngle,
      };
      setBullets((bullets) => [...bullets, bullet]);
    }
  };

  const onHit = (bulletId: string) => {
    setBullets((bullets) => bullets.filter((bullet) => bullet.id !== bulletId));
  };

  const onWaterCollation = (name: string) => {
    if (name === "w1") {
      setWaterBalls((balls) => [...balls, vec3(caiman.current?.translation())]);
    }
  };

  const inCheckpoint = () => {
    setEcctrlMode(null);
    setVelocity(2.5);
    setLoading(false);
  };

  useEffect(() => {
    if (
      [animationSet.walk, animationSet.run].includes(curAnimation) &&
      !loading
    ) {
      playAudio(curAnimation.toLowerCase());
    } else {
      stopAudio();
    }
  }, [curAnimation, loading]);

  useEffect(() => {
    if (curCheckpoint && curCheckpoint.position) {
      setLoading(true);
      setEcctrlMode("PointToMove");
      setVelocity(14);
      setMoveToPoint(
        new Vector3(curCheckpoint.position.x, -0.7, curCheckpoint.position.z)
      );
    }
    setCurLevel(3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCharacterRef(characterRef);
  }, [characterRef, setCharacterRef]);

  useEffect(() => {
    if (storeRewards) {
      const r = rewards.filter((reward) => reward.level === 3);
      setAvailableRewards(
        r.filter(
          (reward) => !storeRewards.some((stored) => stored.id === reward.id)
        )
      );
    }
  }, [storeRewards]);


  useFrame(() => {
    // If any movement key is pressed, emit the player's movement data to the server
    if (
      [animationSet.walk, animationSet.run].includes(curAnimation) &&
      !loading
    ) {
      window.setTimeout(() => {
        socket.emit("player-moving", {
          translation: characterRef.current?.translation(),
          rotation: characterRef.current?.rotation(),
        });
      }, 100);
    }
  });

  return (
    <>
      {/* <color attach="background" args={["#ececec"]} /> */}
      <color attach="background" args={["#333333"]} />

      {/* LIGHTS */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />

      {/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}
      <KeyboardControls map={keyboardMap}>
        <Ecctrl
          ref={characterRef}
          name={player}
          mode={ecctrlMode}
          maxVelLimit={velocity}
          camInitDis={-6}
          animated
        >
          <EcctrlAnimation
            characterURL={characterURL}
            animationSet={animationSet}
          >
            <Warrior position-y={-0.9} />
          </EcctrlAnimation>
        </Ecctrl>
      </KeyboardControls>

      {characters.filter((ch) => ch.id !== socket.id).map((character) => (
        <ExternalWarrior
          key={character.id}
          id={character.id}
          position={
            new Vector3(
              character.position[0],
              -0,
              character.position[2]
            )
          }
        />
      ))}

      {/* {!loading &&
                <RigidBody colliders={false} type="fixed" position={[-42, -6, 37]}>
                    <CylinderCollider args={[0.5, 1000]} />
                    <Cylinder scale={[1000, 1, 1000]} receiveShadow>
                    </Cylinder>
                </RigidBody>
            } */}

      {!loading && (
        <>
          {/* <RigidBody type="fixed" colliders={"trimesh"} ccd>
            <Map3 position={[0, -10, 98]} />
            <mesh
              rotation={[-0.5 * Math.PI, 0, 0]}
              position={[0, 0, 0]}
              receiveShadow
            >
              <planeGeometry args={[0, 0, 1, 1]} />
              <shadowMaterial transparent opacity={0.2} />
            </mesh>
          </RigidBody> */}
          <RigidBody colliders={'trimesh'} type="fixed" position={[-42, -6, 37]}>
            <CylinderCollider args={[0.5, 1000]} />
            <Cylinder scale={[1000, 1, 1000]} receiveShadow>
            </Cylinder>
          </RigidBody>

          <CharacterController
            attack={onAttack}
            position={[40, 37.7, 160]}
            moveSpeed={0}
          >
            <Demon />
          </CharacterController>

          <CharacterController attack={launchBullet} position={[60, 10, 50]}>
            <Demon2 />
          </CharacterController>

          <CharacterController attack={launchBullet} position={[60, 10, 65]}>
            <Demon2 />
          </CharacterController>

          {bullets.map((bullet: TypeBullet, index: number) => (
            <Bullet
              key={index}
              id={bullet.id}
              angle={bullet.angle}
              position={bullet.position}
              onHit={onHit}
            />
          ))}

          {availableRewards.map((reward: Reward) => (
            <Cross
              scale={0.5}
              key={reward.id}
              reward={reward}
              position={reward.position}
            />
          ))}
        </>
      )}

      <Checkpoint
        id={1}
        level={3}
        position={new Vector3(-70, -0.5, 7)}
        onCollision={inCheckpoint}
      />
      <Checkpoint
        id={2}
        level={3}
        position={new Vector3(-45, 4.8, 40)}
        onCollision={inCheckpoint}
      />
      <Checkpoint
        id={3}
        level={3}
        position={new Vector3(30, 2.2, 75)}
        onCollision={inCheckpoint}
      />
      <Checkpoint
        id={4}
        level={3}
        position={new Vector3(65, 20, 127)}
        onCollision={inCheckpoint}
      />

      <Html>
        <LoadingScreen loading={loading} setLoading={setLoading} />
        {gameState === gameStates.GAME_OVER && <GameOver />}
        {boosDeath && <Win level="game" />}
      </Html>

      {/* {trunksToShow} */}
    </>
  );
};
