/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/buziraco/model.glb -t 
*/

import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { getModelPath } from '@/helpers/path'

type GLTFResult = GLTF & {
  nodes: {
    Demon_1: THREE.SkinnedMesh
    Demon_2: THREE.SkinnedMesh
    Demon_3: THREE.SkinnedMesh
    Demon_4: THREE.SkinnedMesh
    Trident: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Demon_Main: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Eye_White: THREE.MeshStandardMaterial
    Eye_Black: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'CharacterArmature|Death' | 'CharacterArmature|Duck' | 'CharacterArmature|HitReact' | 'CharacterArmature|Idle' | 'CharacterArmature|Jump' | 'CharacterArmature|Jump_Idle' | 'CharacterArmature|Jump_Land' | 'CharacterArmature|No' | 'CharacterArmature|Punch' | 'CharacterArmature|Run' | 'CharacterArmature|Walk' | 'CharacterArmature|Wave' | 'CharacterArmature|Weapon' | 'CharacterArmature|Yes'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export function Buziraco({ withAnimations = false, ...props }: { withAnimations?: boolean }) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF(getModelPath('buziraco')) as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (withAnimations) {
      actions['CharacterArmature|Idle']?.reset().fadeIn(0.5).play();
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="Demon" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh castShadow name="Demon_1" geometry={nodes.Demon_1.geometry} material={materials.Demon_Main} skeleton={nodes.Demon_1.skeleton} />
            <skinnedMesh castShadow name="Demon_2" geometry={nodes.Demon_2.geometry} material={materials.Black} skeleton={nodes.Demon_2.skeleton} />
            <skinnedMesh castShadow name="Demon_3" geometry={nodes.Demon_3.geometry} material={materials.Eye_White} skeleton={nodes.Demon_3.skeleton} />
            <skinnedMesh castShadow name="Demon_4" geometry={nodes.Demon_4.geometry} material={materials.Eye_Black} skeleton={nodes.Demon_4.skeleton} />
          </group>
          <skinnedMesh castShadow name="Trident" geometry={nodes.Trident.geometry} material={materials.Black} skeleton={nodes.Trident.skeleton} position={[1.895, 1.734, -0.17]} scale={75.326} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(getModelPath('buziraco'))
