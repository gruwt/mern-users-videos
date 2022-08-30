import { useGLTF } from "@react-three/drei";

type url = {
    url: string
}

export function Model({ url }: url) {
  const gltf = useGLTF(url, "/draco-gltf"); 
  useGLTF.preload(url);
  // TODO con gltf.*  -> animaciones, asset, cameras, parser, userData, scenes (plural)

  return (
    <primitive 
      scale={0.06}
      object={gltf.scene}
      dispose={null}
      position={[0, -2, 0]}
      onClick={()=>{console.log('SELECCIONASTE LA SILLA ')}}
      /* ... no se porque, no suggestions */
    />
  );

}