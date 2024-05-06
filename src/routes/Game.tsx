import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Physics } from "@react-three/rapier";
import { Outlet } from "react-router-dom";
import { Health } from "@/components/Health";

export const Game = () => {

  return (
    <>
      <Canvas shadows camera={{ fov: 30 }}>
        <Suspense>
          <Physics>
            <Outlet />
          </Physics>
        </Suspense>
      </Canvas>
      <div className="button-container">
        <Health />
      </div>
    </>
  )
}

export default Game
