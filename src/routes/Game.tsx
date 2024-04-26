import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Physics } from "@react-three/rapier";
import { Outlet } from "react-router-dom";

export const Game = () => {

  return (
    <>
      <Canvas shadows camera={{ fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Suspense>
          <Physics>
            <Outlet />
          </Physics>
        </Suspense>
    </Canvas>
    </>
  )
}

export default Game
