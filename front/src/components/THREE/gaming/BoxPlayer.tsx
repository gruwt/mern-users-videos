import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { Dispatch, SetStateAction, useContext } from "react";
import { utilsContext } from "../context/Context";

interface props {
  setplay: Dispatch<SetStateAction<Boolean>>;
}

const BoxPlayer = ({ setplay }: props) => {
  const utils = useContext(utilsContext);

  // let scores: (string | number)[];
  // scores = [ref, api]; 
  
  // var ref = useRef<MutableRefObject<RefObject<Object3D<Event>> | undefined>>();
  // var api = useRef<MutableRefObject<PublicApi | undefined>>();
  
  const [ref, api]:[any,any]= useBox(() => ({
    mass: 0,
    type: "Dynamic",
    args: [2, 2, 2],
    collisionFilterGroup: 1,
    onCollide: (e) => {
      console.log("GAME OVER");
      setplay(false);
    },
  }));

  // Tambien simula el movimiento de la camara (y por lo tnato el del objetivo), para poder tener un collider para el game over
  useFrame(() => {
    api.position.set(
      utils.objetivePosition.x,
      utils.objetivePosition.y,
      utils.objetivePosition.z
    );
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default BoxPlayer;

