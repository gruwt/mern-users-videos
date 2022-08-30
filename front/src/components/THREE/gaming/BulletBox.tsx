import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useContext } from "react";
import { utilsContext } from "../context/Context";

interface props {
  play: Boolean;
}

const BulletBox = ({play}:props) => {
  const utils = useContext(utilsContext);

  const [ref, api]: [any, any] = useBox(() => ({
    mass: 0,
    position: [0, 0, 0],
    type: "Dynamic",
    args: [2, 2, 2],
    collisionFilterGroup: 3,
    // No te va a colisionar, sino que vas a colisionar contra el
    collisionFilterMask: 2,
    // isTrigger: true
  }));
  
  var defaultColor = "blue";
  // if(api.isTrigger) return defaultColor= "orange"
  
  var isShoot = false;
  var increase = 1.3;

  useFrame(() => {
    api.rotation.set(0 + 0.005, 0 + 0.01, 0);
    if (isShoot) {
      increase = increase * 1.1;
      api.position.set(0, 0, 0 - 0.0005 * increase);
    }
  });

  const shootBox = (e: any /* ThreeEvent<MouseEvent> */) => {
    if (play){
      isShoot = true;
      window.setTimeout(() => {
        isShoot = false;
        increase = 1.3;
        api.position.set(0, 0, 0);
        utils.has.collide = false;
      }, 2000);
    } 
  };

  return (
    <mesh ref={ref} onClick={shootBox}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial color={defaultColor} />
    </mesh>
  );
};

export default BulletBox;