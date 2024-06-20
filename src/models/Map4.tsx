/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\models\map3\model.glb -t 
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { getModelPath } from '@/helpers/path'

type GLTFResult = GLTF & {
  nodes: {
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
    montaña: THREE.Mesh
  }
  materials: {
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
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export function Map4(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(getModelPath('map4')) as GLTFResult
  return (
    <>
       <group {...props} dispose={null}>
        <group>
          <mesh
            geometry={nodes.Node001.geometry}
            material={materials['Mat.001']}
            position={[-49.693, 6.26, -9.938]}
            rotation={[-0.062, -0.016, 0.254]}
            scale={[0.011, 0.092, 0.09]}
          />
          <mesh
            geometry={nodes.Node.geometry}
            material={materials.Mat}
            position={[84.647, 0.673, -9.289]}
            scale={[0.015, 0.09, 0.09]}
          />
          <mesh
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
            position={[24.352, 47.455, 66.697]}
            rotation={[0.086, 0.069, -3.112]}
            scale={[-22.711, -4.531, -16.616]}
          />
          <mesh geometry={nodes.Cube.geometry} material={materials['Material.004']} />
          <group position={[-18.58, 2.986, -11.725]}>
            <mesh geometry={nodes.Cylinder011.geometry} material={materials['Tree5_Leaves2.011']} />
            <mesh geometry={nodes.Cylinder011_1.geometry} material={materials['Tree5_Leaves1.011']} />
            <mesh geometry={nodes.Cylinder011_2.geometry} material={materials['Tree5_Trunk.011']} />
          </group>
          <group position={[77.278, 40.336, -22.629]}>
            <mesh geometry={nodes.Cone012.geometry} material={materials['Tree4_Leaves1.007']} />
            <mesh geometry={nodes.Cone012_1.geometry} material={materials['Tree4_Leaves2.007']} />
            <mesh geometry={nodes.Cone012_2.geometry} material={materials['Tree4_Trunk.007']} />
          </group>
          <group position={[-8.235, 40.365, 41.317]}>
            <mesh geometry={nodes.Cone017.geometry} material={materials['Tree3_Leaves1.009']} />
            <mesh geometry={nodes.Cone017_1.geometry} material={materials['Tree3_Trunk.009']} />
          </group>
          <group position={[0, 8.593, 17.893]}>
            <mesh geometry={nodes.Icosphere012.geometry} material={materials['Tree2_Leaves1.015']} />
            <mesh
              geometry={nodes.Icosphere012_1.geometry}
              material={materials['Tree2_Leaves2.015']}
            />
            <mesh
              geometry={nodes.Icosphere012_2.geometry}
              material={materials['Tree2_Leaves3.015']}
            />
            <mesh geometry={nodes.Icosphere012_3.geometry} material={materials['Tree2_Trunk.015']} />
          </group>
          <group position={[0, 17.117, 0]}>
            <mesh geometry={nodes.Icosphere021.geometry} material={materials['Tree1_Leaves1.007']} />
            <mesh
              geometry={nodes.Icosphere021_1.geometry}
              material={materials['Tree1_Leaves2.007']}
            />
            <mesh geometry={nodes.Icosphere021_2.geometry} material={materials['Tree1_Trunk.007']} />
          </group>
          <group position={[-11.921, 20.895, -52.162]}>
            <mesh geometry={nodes.Cone018.geometry} material={materials['Tree4_Leaves1.006']} />
            <mesh geometry={nodes.Cone018_1.geometry} material={materials['Tree4_Leaves2.006']} />
            <mesh geometry={nodes.Cone018_2.geometry} material={materials['Tree4_Trunk.006']} />
          </group>
          <group position={[0.528, 14.151, -0.831]}>
            <mesh geometry={nodes.Icosphere023.geometry} material={materials['Tree1_Leaves1.006']} />
            <mesh
              geometry={nodes.Icosphere023_1.geometry}
              material={materials['Tree1_Leaves2.006']}
            />
            <mesh geometry={nodes.Icosphere023_2.geometry} material={materials['Tree1_Trunk.006']} />
          </group>
          <group position={[16.319, 8.58, 5.82]}>
            <mesh geometry={nodes.Icosphere022.geometry} material={materials['Tree2_Leaves1.014']} />
            <mesh
              geometry={nodes.Icosphere022_1.geometry}
              material={materials['Tree2_Leaves2.014']}
            />
            <mesh
              geometry={nodes.Icosphere022_2.geometry}
              material={materials['Tree2_Leaves3.014']}
            />
            <mesh geometry={nodes.Icosphere022_3.geometry} material={materials['Tree2_Trunk.014']} />
          </group>
          <group position={[-18.41, 18.432, 69.213]} scale={1.126}>
            <mesh geometry={nodes.Cylinder010.geometry} material={materials['Tree5_Leaves2.010']} />
            <mesh geometry={nodes.Cylinder010_1.geometry} material={materials['Tree5_Leaves1.010']} />
            <mesh geometry={nodes.Cylinder010_2.geometry} material={materials['Tree5_Trunk.010']} />
          </group>
          <group position={[35.745, 14.347, -21.891]}>
            <mesh geometry={nodes.Cone016.geometry} material={materials['Tree3_Leaves1.008']} />
            <mesh geometry={nodes.Cone016_1.geometry} material={materials['Tree3_Trunk.008']} />
          </group>
          <group position={[0, 4.766, 0]}>
            <mesh geometry={nodes.Icosphere020.geometry} material={materials['Tree1_Leaves1.005']} />
            <mesh
              geometry={nodes.Icosphere020_1.geometry}
              material={materials['Tree1_Leaves2.005']}
            />
            <mesh geometry={nodes.Icosphere020_2.geometry} material={materials['Tree1_Trunk.005']} />
          </group>
          <group position={[-2.939, 4.106, 0]}>
            <mesh geometry={nodes.Icosphere019.geometry} material={materials['Tree2_Leaves1.013']} />
            <mesh
              geometry={nodes.Icosphere019_1.geometry}
              material={materials['Tree2_Leaves2.013']}
            />
            <mesh
              geometry={nodes.Icosphere019_2.geometry}
              material={materials['Tree2_Leaves3.013']}
            />
            <mesh geometry={nodes.Icosphere019_3.geometry} material={materials['Tree2_Trunk.013']} />
          </group>
          <group position={[-16.535, 0.579, 4.992]}>
            <mesh geometry={nodes.Cone015.geometry} material={materials['Tree3_Leaves1.007']} />
            <mesh geometry={nodes.Cone015_1.geometry} material={materials['Tree3_Trunk.007']} />
          </group>
          <group position={[49.048, 3.398, 10.756]}>
            <mesh geometry={nodes.Icosphere018.geometry} material={materials['Tree2_Leaves1.012']} />
            <mesh
              geometry={nodes.Icosphere018_1.geometry}
              material={materials['Tree2_Leaves2.012']}
            />
            <mesh
              geometry={nodes.Icosphere018_2.geometry}
              material={materials['Tree2_Leaves3.012']}
            />
            <mesh geometry={nodes.Icosphere018_3.geometry} material={materials['Tree2_Trunk.012']} />
          </group>
          <group position={[-31.559, 37.168, 96.754]}>
            <mesh geometry={nodes.Icosphere017.geometry} material={materials['Tree2_Leaves1.011']} />
            <mesh
              geometry={nodes.Icosphere017_1.geometry}
              material={materials['Tree2_Leaves2.011']}
            />
            <mesh
              geometry={nodes.Icosphere017_2.geometry}
              material={materials['Tree2_Leaves3.011']}
            />
            <mesh geometry={nodes.Icosphere017_3.geometry} material={materials['Tree2_Trunk.011']} />
          </group>
          <group position={[76.774, 5.416, 45.376]}>
            <mesh geometry={nodes.Icosphere016.geometry} material={materials['Tree2_Leaves1.010']} />
            <mesh
              geometry={nodes.Icosphere016_1.geometry}
              material={materials['Tree2_Leaves2.010']}
            />
            <mesh
              geometry={nodes.Icosphere016_2.geometry}
              material={materials['Tree2_Leaves3.010']}
            />
            <mesh geometry={nodes.Icosphere016_3.geometry} material={materials['Tree2_Trunk.010']} />
          </group>
          <group position={[38.211, 34.217, 35.535]}>
            <mesh geometry={nodes.Cone014.geometry} material={materials['Tree4_Leaves1.005']} />
            <mesh geometry={nodes.Cone014_1.geometry} material={materials['Tree4_Leaves2.005']} />
            <mesh geometry={nodes.Cone014_2.geometry} material={materials['Tree4_Trunk.005']} />
          </group>
          <group position={[70.677, 13.25, 58.148]}>
            <mesh geometry={nodes.Icosphere015.geometry} material={materials['Tree2_Leaves1.009']} />
            <mesh
              geometry={nodes.Icosphere015_1.geometry}
              material={materials['Tree2_Leaves2.009']}
            />
            <mesh
              geometry={nodes.Icosphere015_2.geometry}
              material={materials['Tree2_Leaves3.009']}
            />
            <mesh geometry={nodes.Icosphere015_3.geometry} material={materials['Tree2_Trunk.009']} />
          </group>
          <group position={[109.84, 39.239, 154.469]}>
            <mesh geometry={nodes.Cylinder009.geometry} material={materials['Tree5_Leaves2.009']} />
            <mesh geometry={nodes.Cylinder009_1.geometry} material={materials['Tree5_Leaves1.009']} />
            <mesh geometry={nodes.Cylinder009_2.geometry} material={materials['Tree5_Trunk.009']} />
          </group>
          <group position={[39.252, 33.804, 107.444]}>
            <mesh geometry={nodes.Cylinder008.geometry} material={materials['Tree5_Leaves2.008']} />
            <mesh geometry={nodes.Cylinder008_1.geometry} material={materials['Tree5_Leaves1.008']} />
            <mesh geometry={nodes.Cylinder008_2.geometry} material={materials['Tree5_Trunk.008']} />
          </group>
          <group position={[26.511, 23.547, -0.458]}>
            <mesh geometry={nodes.Cone013.geometry} material={materials['Tree3_Leaves1.006']} />
            <mesh geometry={nodes.Cone013_1.geometry} material={materials['Tree3_Trunk.006']} />
          </group>
          <group position={[87.771, -0.662, -94.276]}>
            <mesh geometry={nodes.Cone011.geometry} material={materials['Tree3_Leaves1.005']} />
            <mesh geometry={nodes.Cone011_1.geometry} material={materials['Tree3_Trunk.005']} />
          </group>
          <group position={[18.029, 40.393, 142.199]}>
            <mesh geometry={nodes.Cylinder007.geometry} material={materials['Tree5_Leaves2.007']} />
            <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Tree5_Leaves1.007']} />
            <mesh geometry={nodes.Cylinder007_2.geometry} material={materials['Tree5_Trunk.007']} />
          </group>
          <group position={[77.793, 40.896, 104.373]}>
            <mesh geometry={nodes.Icosphere014.geometry} material={materials['Tree2_Leaves1.008']} />
            <mesh
              geometry={nodes.Icosphere014_1.geometry}
              material={materials['Tree2_Leaves2.008']}
            />
            <mesh
              geometry={nodes.Icosphere014_2.geometry}
              material={materials['Tree2_Leaves3.008']}
            />
            <mesh geometry={nodes.Icosphere014_3.geometry} material={materials['Tree2_Trunk.008']} />
          </group>
          <group position={[-124.438, 36.389, 144.225]} scale={1.126}>
            <mesh geometry={nodes.Cylinder002.geometry} material={materials['Tree5_Leaves2.006']} />
            <mesh geometry={nodes.Cylinder002_1.geometry} material={materials['Tree5_Leaves1.006']} />
            <mesh geometry={nodes.Cylinder002_2.geometry} material={materials['Tree5_Trunk.006']} />
          </group>
          <group position={[-35.626, 34.305, 42.136]}>
            <mesh geometry={nodes.Cone010.geometry} material={materials['Tree4_Leaves1.004']} />
            <mesh geometry={nodes.Cone010_1.geometry} material={materials['Tree4_Leaves2.004']} />
            <mesh geometry={nodes.Cone010_2.geometry} material={materials['Tree4_Trunk.004']} />
          </group>
          <group position={[98.362, 26.285, 81.148]}>
            <mesh geometry={nodes.Icosphere013.geometry} material={materials['Tree1_Leaves1.004']} />
            <mesh
              geometry={nodes.Icosphere013_1.geometry}
              material={materials['Tree1_Leaves2.004']}
            />
            <mesh geometry={nodes.Icosphere013_2.geometry} material={materials['Tree1_Trunk.004']} />
          </group>
          <mesh geometry={nodes.Cube001.geometry} material={materials['Material.003']} />
        </group>
      </group>
    </>
  )
}

useGLTF.preload(getModelPath('map4'))
