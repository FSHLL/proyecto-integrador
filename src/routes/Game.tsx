import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { Physics } from "@react-three/rapier";
import { Outlet } from "react-router-dom";
import appFirebase from './firebaseConfig';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export const Game = () => {
  const auth = getAuth(appFirebase)
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (userFirebase) => {
    if(userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });

  return (
    <>
      <Canvas shadows camera={{ fov: 30 }}>
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
