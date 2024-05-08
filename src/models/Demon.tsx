/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/demon/model.glb -t 
*/

import * as THREE from 'three'
import { forwardRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { getModelPath } from '@/helpers/path'

type GLTFResult = GLTF & {
  nodes: {
    Demon: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Atlas: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'EnemyArmature|EnemyArmature|EnemyArmature|Attack' | 'EnemyArmature|EnemyArmature|EnemyArmature|Death' | 'EnemyArmature|EnemyArmature|EnemyArmature|HitRecieve' | 'EnemyArmature|EnemyArmature|EnemyArmature|Idle' | 'EnemyArmature|EnemyArmature|EnemyArmature|Jump' | 'EnemyArmature|EnemyArmature|EnemyArmature|Run' | 'EnemyArmature|EnemyArmature|EnemyArmature|Walk'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export const Demon = forwardRef<THREE.Group>(({ attack = false, ...props }: { attack?: boolean }, ref) => {
  // const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF(getModelPath('demon')) as GLTFResult
  // @ts-expect-error No error work
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    if (attack) {
      actions['EnemyArmature|EnemyArmature|EnemyArmature|Attack']?.reset().fadeIn(0.5).play();
    } else {
      actions['EnemyArmature|EnemyArmature|EnemyArmature|Attack']?.reset().fadeOut(0.5).stop();
    }
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="EnemyArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <skinnedMesh name="Demon" geometry={nodes.Demon.geometry} material={materials.Atlas} skeleton={nodes.Demon.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={47.878} />
        </group>
      </group>
    </group>
  )
})

useGLTF.preload(getModelPath('demon'))
