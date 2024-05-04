/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/map2/model.glb -t 
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { getModelPath } from '@/helpers/path'

type GLTFResult = GLTF & {
  nodes: {
    Cube003_Cube001: THREE.Mesh
    Cube: THREE.Mesh
    Cylinder: THREE.Mesh
    Cylinder_1: THREE.Mesh
    Cylinder_2: THREE.Mesh
    Cone007: THREE.Mesh
    Cone007_1: THREE.Mesh
    Cone007_2: THREE.Mesh
    Cone002: THREE.Mesh
    Cone002_1: THREE.Mesh
    Icosphere030: THREE.Mesh
    Icosphere030_1: THREE.Mesh
    Icosphere030_2: THREE.Mesh
    Icosphere030_3: THREE.Mesh
    Icosphere003: THREE.Mesh
    Icosphere003_1: THREE.Mesh
    Icosphere003_2: THREE.Mesh
    Cone001: THREE.Mesh
    Cone001_1: THREE.Mesh
    Cone001_2: THREE.Mesh
    Icosphere001: THREE.Mesh
    Icosphere001_1: THREE.Mesh
    Icosphere001_2: THREE.Mesh
    Icosphere002: THREE.Mesh
    Icosphere002_1: THREE.Mesh
    Icosphere002_2: THREE.Mesh
    Icosphere002_3: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cylinder001_1: THREE.Mesh
    Cylinder001_2: THREE.Mesh
    Cone003: THREE.Mesh
    Cone003_1: THREE.Mesh
    Icosphere004: THREE.Mesh
    Icosphere004_1: THREE.Mesh
    Icosphere004_2: THREE.Mesh
    Icosphere005: THREE.Mesh
    Icosphere005_1: THREE.Mesh
    Icosphere005_2: THREE.Mesh
    Icosphere005_3: THREE.Mesh
    Cone004: THREE.Mesh
    Cone004_1: THREE.Mesh
    Icosphere006: THREE.Mesh
    Icosphere006_1: THREE.Mesh
    Icosphere006_2: THREE.Mesh
    Icosphere006_3: THREE.Mesh
    Icosphere007: THREE.Mesh
    Icosphere007_1: THREE.Mesh
    Icosphere007_2: THREE.Mesh
    Icosphere007_3: THREE.Mesh
    Icosphere008: THREE.Mesh
    Icosphere008_1: THREE.Mesh
    Icosphere008_2: THREE.Mesh
    Icosphere008_3: THREE.Mesh
    Cone005: THREE.Mesh
    Cone005_1: THREE.Mesh
    Cone005_2: THREE.Mesh
    Icosphere009: THREE.Mesh
    Icosphere009_1: THREE.Mesh
    Icosphere009_2: THREE.Mesh
    Icosphere009_3: THREE.Mesh
    Cylinder003: THREE.Mesh
    Cylinder003_1: THREE.Mesh
    Cylinder003_2: THREE.Mesh
    Cylinder004: THREE.Mesh
    Cylinder004_1: THREE.Mesh
    Cylinder004_2: THREE.Mesh
    Cone006: THREE.Mesh
    Cone006_1: THREE.Mesh
    Cone008: THREE.Mesh
    Cone008_1: THREE.Mesh
    Cylinder005: THREE.Mesh
    Cylinder005_1: THREE.Mesh
    Cylinder005_2: THREE.Mesh
    Icosphere010: THREE.Mesh
    Icosphere010_1: THREE.Mesh
    Icosphere010_2: THREE.Mesh
    Icosphere010_3: THREE.Mesh
    Cylinder006: THREE.Mesh
    Cylinder006_1: THREE.Mesh
    Cylinder006_2: THREE.Mesh
    Cone009: THREE.Mesh
    Cone009_1: THREE.Mesh
    Cone009_2: THREE.Mesh
    Icosphere011: THREE.Mesh
    Icosphere011_1: THREE.Mesh
    Icosphere011_2: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    Tree5_Leaves2: THREE.MeshStandardMaterial
    Tree5_Leaves1: THREE.MeshStandardMaterial
    Tree5_Trunk: THREE.MeshStandardMaterial
    Tree4_Leaves1: THREE.MeshStandardMaterial
    Tree4_Leaves2: THREE.MeshStandardMaterial
    Tree4_Trunk: THREE.MeshStandardMaterial
    Tree3_Leaves1: THREE.MeshStandardMaterial
    Tree3_Trunk: THREE.MeshStandardMaterial
    Tree2_Leaves1: THREE.MeshStandardMaterial
    Tree2_Leaves2: THREE.MeshStandardMaterial
    Tree2_Leaves3: THREE.MeshStandardMaterial
    Tree2_Trunk: THREE.MeshStandardMaterial
    Tree1_Leaves1: THREE.MeshStandardMaterial
    Tree1_Leaves2: THREE.MeshStandardMaterial
    Tree1_Trunk: THREE.MeshStandardMaterial
    ['Tree4_Leaves1.001']: THREE.MeshStandardMaterial
    ['Tree4_Leaves2.001']: THREE.MeshStandardMaterial
    ['Tree4_Trunk.001']: THREE.MeshStandardMaterial
    ['Tree1_Leaves1.001']: THREE.MeshStandardMaterial
    ['Tree1_Leaves2.001']: THREE.MeshStandardMaterial
    ['Tree1_Trunk.001']: THREE.MeshStandardMaterial
    ['Tree2_Leaves1.001']: THREE.MeshStandardMaterial
    ['Tree2_Leaves2.001']: THREE.MeshStandardMaterial
    ['Tree2_Leaves3.001']: THREE.MeshStandardMaterial
    ['Tree2_Trunk.001']: THREE.MeshStandardMaterial
    ['Tree5_Leaves2.001']: THREE.MeshStandardMaterial
    ['Tree5_Leaves1.001']: THREE.MeshStandardMaterial
    ['Tree5_Trunk.001']: THREE.MeshStandardMaterial
    ['Tree3_Leaves1.001']: THREE.MeshStandardMaterial
    ['Tree3_Trunk.001']: THREE.MeshStandardMaterial
    ['Tree1_Leaves1.002']: THREE.MeshStandardMaterial
    ['Tree1_Leaves2.002']: THREE.MeshStandardMaterial
    ['Tree1_Trunk.002']: THREE.MeshStandardMaterial
    ['Tree2_Leaves1.002']: THREE.MeshStandardMaterial
    ['Tree2_Leaves2.002']: THREE.MeshStandardMaterial
    ['Tree2_Leaves3.002']: THREE.MeshStandardMaterial
    ['Tree2_Trunk.002']: THREE.MeshStandardMaterial
    ['Tree3_Leaves1.002']: THREE.MeshStandardMaterial
    ['Tree3_Trunk.002']: THREE.MeshStandardMaterial
    ['Tree2_Leaves1.003']: THREE.MeshStandardMaterial
    ['Tree2_Leaves2.003']: THREE.MeshStandardMaterial
    ['Tree2_Leaves3.003']: THREE.MeshStandardMaterial
    ['Tree2_Trunk.003']: THREE.MeshStandardMaterial
    ['Tree2_Leaves1.004']: THREE.MeshStandardMaterial
    ['Tree2_Leaves2.004']: THREE.MeshStandardMaterial
    ['Tree2_Leaves3.004']: THREE.MeshStandardMaterial
    ['Tree2_Trunk.004']: THREE.MeshStandardMaterial
    ['Tree2_Leaves1.005']: THREE.MeshStandardMaterial
    ['Tree2_Leaves2.005']: THREE.MeshStandardMaterial
    ['Tree2_Leaves3.005']: THREE.MeshStandardMaterial
    ['Tree2_Trunk.005']: THREE.MeshStandardMaterial
    ['Tree4_Leaves1.002']: THREE.MeshStandardMaterial
    ['Tree4_Leaves2.002']: THREE.MeshStandardMaterial
    ['Tree4_Trunk.002']: THREE.MeshStandardMaterial
    ['Tree2_Leaves1.006']: THREE.MeshStandardMaterial
    ['Tree2_Leaves2.006']: THREE.MeshStandardMaterial
    ['Tree2_Leaves3.006']: THREE.MeshStandardMaterial
    ['Tree2_Trunk.006']: THREE.MeshStandardMaterial
    ['Tree5_Leaves2.002']: THREE.MeshStandardMaterial
    ['Tree5_Leaves1.002']: THREE.MeshStandardMaterial
    ['Tree5_Trunk.002']: THREE.MeshStandardMaterial
    ['Tree5_Leaves2.003']: THREE.MeshStandardMaterial
    ['Tree5_Leaves1.003']: THREE.MeshStandardMaterial
    ['Tree5_Trunk.003']: THREE.MeshStandardMaterial
    ['Tree3_Leaves1.003']: THREE.MeshStandardMaterial
    ['Tree3_Trunk.003']: THREE.MeshStandardMaterial
    ['Tree3_Leaves1.004']: THREE.MeshStandardMaterial
    ['Tree3_Trunk.004']: THREE.MeshStandardMaterial
    ['Tree5_Leaves2.004']: THREE.MeshStandardMaterial
    ['Tree5_Leaves1.004']: THREE.MeshStandardMaterial
    ['Tree5_Trunk.004']: THREE.MeshStandardMaterial
    ['Tree2_Leaves1.007']: THREE.MeshStandardMaterial
    ['Tree2_Leaves2.007']: THREE.MeshStandardMaterial
    ['Tree2_Leaves3.007']: THREE.MeshStandardMaterial
    ['Tree2_Trunk.007']: THREE.MeshStandardMaterial
    ['Tree5_Leaves2.005']: THREE.MeshStandardMaterial
    ['Tree5_Leaves1.005']: THREE.MeshStandardMaterial
    ['Tree5_Trunk.005']: THREE.MeshStandardMaterial
    ['Tree4_Leaves1.003']: THREE.MeshStandardMaterial
    ['Tree4_Leaves2.003']: THREE.MeshStandardMaterial
    ['Tree4_Trunk.003']: THREE.MeshStandardMaterial
    ['Tree1_Leaves1.003']: THREE.MeshStandardMaterial
    ['Tree1_Leaves2.003']: THREE.MeshStandardMaterial
    ['Tree1_Trunk.003']: THREE.MeshStandardMaterial
  }
}

export function Map2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(getModelPath('map2')) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube003_Cube001.geometry} material={materials.Material} position={[71.526, 47.412, 55.258]} rotation={[0, -1.531, 0]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} />
      <group position={[-24.891, -9.851, -11.178]}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials.Tree5_Leaves2} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Tree5_Leaves1} />
        <mesh geometry={nodes.Cylinder_2.geometry} material={materials.Tree5_Trunk} />
      </group>
      <group position={[32.017, 22.719, 6.742]}>
        <mesh geometry={nodes.Cone007.geometry} material={materials.Tree4_Leaves1} />
        <mesh geometry={nodes.Cone007_1.geometry} material={materials.Tree4_Leaves2} />
        <mesh geometry={nodes.Cone007_2.geometry} material={materials.Tree4_Trunk} />
      </group>
      <group position={[-8.235, 14.139, 41.317]}>
        <mesh geometry={nodes.Cone002.geometry} material={materials.Tree3_Leaves1} />
        <mesh geometry={nodes.Cone002_1.geometry} material={materials.Tree3_Trunk} />
      </group>
      <group position={[0, 0.427, 17.893]}>
        <mesh geometry={nodes.Icosphere030.geometry} material={materials.Tree2_Leaves1} />
        <mesh geometry={nodes.Icosphere030_1.geometry} material={materials.Tree2_Leaves2} />
        <mesh geometry={nodes.Icosphere030_2.geometry} material={materials.Tree2_Leaves3} />
        <mesh geometry={nodes.Icosphere030_3.geometry} material={materials.Tree2_Trunk} />
      </group>
      <group position={[0, 9.943, 0]}>
        <mesh geometry={nodes.Icosphere003.geometry} material={materials.Tree1_Leaves1} />
        <mesh geometry={nodes.Icosphere003_1.geometry} material={materials.Tree1_Leaves2} />
        <mesh geometry={nodes.Icosphere003_2.geometry} material={materials.Tree1_Trunk} />
      </group>
      <group position={[-11.921, 6.97, -52.162]}>
        <mesh geometry={nodes.Cone001.geometry} material={materials['Tree4_Leaves1.001']} />
        <mesh geometry={nodes.Cone001_1.geometry} material={materials['Tree4_Leaves2.001']} />
        <mesh geometry={nodes.Cone001_2.geometry} material={materials['Tree4_Trunk.001']} />
      </group>
      <group position={[0.528, 0.387, -0.831]}>
        <mesh geometry={nodes.Icosphere001.geometry} material={materials['Tree1_Leaves1.001']} />
        <mesh geometry={nodes.Icosphere001_1.geometry} material={materials['Tree1_Leaves2.001']} />
        <mesh geometry={nodes.Icosphere001_2.geometry} material={materials['Tree1_Trunk.001']} />
      </group>
      <group position={[16.319, -2.077, 0]}>
        <mesh geometry={nodes.Icosphere002.geometry} material={materials['Tree2_Leaves1.001']} />
        <mesh geometry={nodes.Icosphere002_1.geometry} material={materials['Tree2_Leaves2.001']} />
        <mesh geometry={nodes.Icosphere002_2.geometry} material={materials['Tree2_Leaves3.001']} />
        <mesh geometry={nodes.Icosphere002_3.geometry} material={materials['Tree2_Trunk.001']} />
      </group>
      <group position={[-18.41, 0.603, 69.213]} scale={1.126}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Tree5_Leaves2.001']} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Tree5_Leaves1.001']} />
        <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['Tree5_Trunk.001']} />
      </group>
      <group position={[35.745, 6.131, -21.891]}>
        <mesh geometry={nodes.Cone003.geometry} material={materials['Tree3_Leaves1.001']} />
        <mesh geometry={nodes.Cone003_1.geometry} material={materials['Tree3_Trunk.001']} />
      </group>
      <group position={[0, -8.253, 0]}>
        <mesh geometry={nodes.Icosphere004.geometry} material={materials['Tree1_Leaves1.002']} />
        <mesh geometry={nodes.Icosphere004_1.geometry} material={materials['Tree1_Leaves2.002']} />
        <mesh geometry={nodes.Icosphere004_2.geometry} material={materials['Tree1_Trunk.002']} />
      </group>
      <group position={[0, -2.122, 0]}>
        <mesh geometry={nodes.Icosphere005.geometry} material={materials['Tree2_Leaves1.002']} />
        <mesh geometry={nodes.Icosphere005_1.geometry} material={materials['Tree2_Leaves2.002']} />
        <mesh geometry={nodes.Icosphere005_2.geometry} material={materials['Tree2_Leaves3.002']} />
        <mesh geometry={nodes.Icosphere005_3.geometry} material={materials['Tree2_Trunk.002']} />
      </group>
      <group position={[-16.535, -0.267, 4.992]}>
        <mesh geometry={nodes.Cone004.geometry} material={materials['Tree3_Leaves1.002']} />
        <mesh geometry={nodes.Cone004_1.geometry} material={materials['Tree3_Trunk.002']} />
      </group>
      <group position={[49.048, -0.1, 10.756]}>
        <mesh geometry={nodes.Icosphere006.geometry} material={materials['Tree2_Leaves1.003']} />
        <mesh geometry={nodes.Icosphere006_1.geometry} material={materials['Tree2_Leaves2.003']} />
        <mesh geometry={nodes.Icosphere006_2.geometry} material={materials['Tree2_Leaves3.003']} />
        <mesh geometry={nodes.Icosphere006_3.geometry} material={materials['Tree2_Trunk.003']} />
      </group>
      <group position={[-31.559, 26.897, 96.754]}>
        <mesh geometry={nodes.Icosphere007.geometry} material={materials['Tree2_Leaves1.004']} />
        <mesh geometry={nodes.Icosphere007_1.geometry} material={materials['Tree2_Leaves2.004']} />
        <mesh geometry={nodes.Icosphere007_2.geometry} material={materials['Tree2_Leaves3.004']} />
        <mesh geometry={nodes.Icosphere007_3.geometry} material={materials['Tree2_Trunk.004']} />
      </group>
      <group position={[76.774, 2.655, 45.376]}>
        <mesh geometry={nodes.Icosphere008.geometry} material={materials['Tree2_Leaves1.005']} />
        <mesh geometry={nodes.Icosphere008_1.geometry} material={materials['Tree2_Leaves2.005']} />
        <mesh geometry={nodes.Icosphere008_2.geometry} material={materials['Tree2_Leaves3.005']} />
        <mesh geometry={nodes.Icosphere008_3.geometry} material={materials['Tree2_Trunk.005']} />
      </group>
      <group position={[38.153, 34.008, -0.058]}>
        <mesh geometry={nodes.Cone005.geometry} material={materials['Tree4_Leaves1.002']} />
        <mesh geometry={nodes.Cone005_1.geometry} material={materials['Tree4_Leaves2.002']} />
        <mesh geometry={nodes.Cone005_2.geometry} material={materials['Tree4_Trunk.002']} />
      </group>
      <group position={[70.677, 3.081, 58.148]}>
        <mesh geometry={nodes.Icosphere009.geometry} material={materials['Tree2_Leaves1.006']} />
        <mesh geometry={nodes.Icosphere009_1.geometry} material={materials['Tree2_Leaves2.006']} />
        <mesh geometry={nodes.Icosphere009_2.geometry} material={materials['Tree2_Leaves3.006']} />
        <mesh geometry={nodes.Icosphere009_3.geometry} material={materials['Tree2_Trunk.006']} />
      </group>
      <group position={[109.84, 40.779, 154.469]}>
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Tree5_Leaves2.002']} />
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials['Tree5_Leaves1.002']} />
        <mesh geometry={nodes.Cylinder003_2.geometry} material={materials['Tree5_Trunk.002']} />
      </group>
      <group position={[39.252, 37.689, 107.444]}>
        <mesh geometry={nodes.Cylinder004.geometry} material={materials['Tree5_Leaves2.003']} />
        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials['Tree5_Leaves1.003']} />
        <mesh geometry={nodes.Cylinder004_2.geometry} material={materials['Tree5_Trunk.003']} />
      </group>
      <group position={[21.662, 7.223, 0]}>
        <mesh geometry={nodes.Cone006.geometry} material={materials['Tree3_Leaves1.003']} />
        <mesh geometry={nodes.Cone006_1.geometry} material={materials['Tree3_Trunk.003']} />
      </group>
      <group position={[87.771, -3.136, -94.276]}>
        <mesh geometry={nodes.Cone008.geometry} material={materials['Tree3_Leaves1.004']} />
        <mesh geometry={nodes.Cone008_1.geometry} material={materials['Tree3_Trunk.004']} />
      </group>
      <group position={[18.029, 31.459, 148.758]}>
        <mesh geometry={nodes.Cylinder005.geometry} material={materials['Tree5_Leaves2.004']} />
        <mesh geometry={nodes.Cylinder005_1.geometry} material={materials['Tree5_Leaves1.004']} />
        <mesh geometry={nodes.Cylinder005_2.geometry} material={materials['Tree5_Trunk.004']} />
      </group>
      <group position={[77.793, 42.035, 104.373]}>
        <mesh geometry={nodes.Icosphere010.geometry} material={materials['Tree2_Leaves1.007']} />
        <mesh geometry={nodes.Icosphere010_1.geometry} material={materials['Tree2_Leaves2.007']} />
        <mesh geometry={nodes.Icosphere010_2.geometry} material={materials['Tree2_Leaves3.007']} />
        <mesh geometry={nodes.Icosphere010_3.geometry} material={materials['Tree2_Trunk.007']} />
      </group>
      <group position={[-124.438, 31.414, 144.225]} scale={1.126}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Tree5_Leaves2.005']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Tree5_Leaves1.005']} />
        <mesh geometry={nodes.Cylinder006_2.geometry} material={materials['Tree5_Trunk.005']} />
      </group>
      <group position={[51.915, -6.742, -142.364]}>
        <mesh geometry={nodes.Cone009.geometry} material={materials['Tree4_Leaves1.003']} />
        <mesh geometry={nodes.Cone009_1.geometry} material={materials['Tree4_Leaves2.003']} />
        <mesh geometry={nodes.Cone009_2.geometry} material={materials['Tree4_Trunk.003']} />
      </group>
      <group position={[97.454, 5.541, 82.159]}>
        <mesh geometry={nodes.Icosphere011.geometry} material={materials['Tree1_Leaves1.003']} />
        <mesh geometry={nodes.Icosphere011_1.geometry} material={materials['Tree1_Leaves2.003']} />
        <mesh geometry={nodes.Icosphere011_2.geometry} material={materials['Tree1_Trunk.003']} />
      </group>
    </group>
  )
}

useGLTF.preload(getModelPath('map2'))
