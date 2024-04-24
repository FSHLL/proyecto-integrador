import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Physics } from "@react-three/rapier";
import { Outlet } from "react-router-dom";

export const App = () => {

  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Suspense>
          <Physics debug>
            <Outlet />
          </Physics>
        </Suspense>
    </Canvas>
    </>
  )
}

export default App
