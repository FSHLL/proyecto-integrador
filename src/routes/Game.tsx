import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { Physics } from "@react-three/rapier";
import { Outlet } from "react-router-dom";
import { Health } from "@/components/Health";
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import app from "@/firebase";

export const Game = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User>();

  onAuthStateChanged(auth, (userFirebase) => {
    if(userFirebase) {
      setUser(userFirebase);
      console.log(user?.email, "g");
    } else {
      setUser(undefined);
    }
  });

  return (
    <>
      <div style={{position: 'absolute', marginLeft: '10px', color: 'white', zIndex: '999'}}>
        {user? <p>{user.email}</p>:<p>Sin iniciar sesión</p>}
      </div>
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
