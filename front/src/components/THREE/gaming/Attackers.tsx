import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

interface props {
  pos: Vector3;
  wait: number,
  color: string,
  play: Boolean
}

const Attackers = ({ pos, wait, color, play }: props) => {
  // const utils = useContext(utilsContext);

  var zMovement = -40;

  const [ref, api]: [any, any] = useBox(() => ({
    mass: 0,
    position: [pos.x, pos.y, pos.z - wait],
    type: "Dynamic",
    args: [1, 1, 1],
    collisionFilterGroup: 4,
    // No te va a colisionar, sino que vas a colisionar contra el
    collisionFilterMask: 1,
  }));
  
  if (play) {
    useFrame(() => {
      api.position.set(pos.x, pos.y, (zMovement += 0.1) - wait);
    });
    for (let i = 1; i < 12; i++) {
      window.setTimeout(() => {
        zMovement = -50;
        api.position.set(0, 0, -zMovement);
        // 6 segs * i * wait= posicion de cada cubo para hacer que algunos salgan antes que otros
      }, 6 * i * 1000 + wait * 100);
    }
  }
  
  
  return (
    <mesh ref={ref} /* position={pos} */ >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Attackers;