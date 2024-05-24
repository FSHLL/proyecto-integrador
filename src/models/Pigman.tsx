/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\models\pigman\model.glb -t -s 
Author: 3dprefabs (https://sketchfab.com/3dprefabs)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/big-daddy-pig-26dc6b14eea8473c86094dd7e908f428
Title: Big Daddy Pig
*/

import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { getModelPath } from '@/helpers/path'

type GLTFResult = GLTF & {
  nodes: {
    BatLP_Bat_0: THREE.Mesh
    Object_68: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    material: THREE.MeshStandardMaterial
    Mr_Pig: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'Skeleton|Idle'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export function Pigman(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF(getModelPath('pigman')) as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.013}>
          <group name="Big_Daddyfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Skeleton" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_67" />
                    <skinnedMesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials.Mr_Pig} skeleton={nodes.Object_68.skeleton} />
                  </group>
                </group>
                <group name="Mr_Pig" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(getModelPath('pigman'))