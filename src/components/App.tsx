import { Canvas } from "@react-three/fiber"

export const App = () => {

  return (
    <>
      Project
      <Canvas>
        <mesh>
          <boxGeometry></boxGeometry>
        </mesh>
      </Canvas>
    </>
  )
}

export default App
