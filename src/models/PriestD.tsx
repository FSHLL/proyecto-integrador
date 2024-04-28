/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/priestD/model.glb -t 
Author: vertigo2604 (https://sketchfab.com/vertigo2604)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/priest-c82a02fcc4494be5ba4aaec8a4e6d477
Title: Priest
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { getModelPath } from '@/helpers/path'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
    Object_6: THREE.Mesh
    Object_7: THREE.Mesh
    Object_8: THREE.Mesh
    Object_9: THREE.Mesh
  }
  materials: {
    Beard_Priest: THREE.MeshStandardMaterial
    Face_Priest: THREE.MeshStandardMaterial
    Hair_Priest: THREE.MeshStandardMaterial
    Material__14: THREE.MeshStandardMaterial
    Book_Priest: THREE.MeshStandardMaterial
    EyeBrows: THREE.MeshStandardMaterial
    Suit_Priest: THREE.MeshStandardMaterial
  }
}

export function PriestD(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(getModelPath('priestD')) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow geometry={nodes.Object_2.geometry} material={materials.Beard_Priest} />
        <mesh castShadow geometry={nodes.Object_3.geometry} material={materials.Face_Priest} />
        <mesh castShadow geometry={nodes.Object_4.geometry} material={materials.Hair_Priest} />
        <mesh castShadow geometry={nodes.Object_5.geometry} material={materials.Material__14} />
        <mesh castShadow geometry={nodes.Object_6.geometry} material={materials.Book_Priest} />
        <mesh castShadow geometry={nodes.Object_7.geometry} material={materials.EyeBrows} />
        <mesh castShadow geometry={nodes.Object_8.geometry} material={materials.Suit_Priest} />
        <mesh castShadow geometry={nodes.Object_9.geometry} material={materials.Suit_Priest} />
      </group>
    </group>
  )
}

useGLTF.preload(getModelPath('priestD'))
