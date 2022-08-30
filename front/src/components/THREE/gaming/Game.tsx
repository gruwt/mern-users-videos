import { Physics } from "@react-three/cannon";
import { CameraShake, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useContext, useState } from "react";
import { Vector3 } from "three";
import "../../THREE/App.css";
import { utilsContext } from "../context/Context";
import { Lights } from "../controls/Lights";
import AttackersSpawner from "./AttackersSpawner";
import BoxPlayer from "./BoxPlayer";
import BulletBox from "./BulletBox";
import HtmlText from "./HtmlText";
import Objetive from "./Objetive";


type props = {
  children?: React.ReactNode;
  vec?: Vector3;
};


export default function planeBoxes() {
  //TODO rojo x, verde y, azul z 
  const utils = useContext(utilsContext);
  
  //TODO Se puede hacer MAS FACIL CON NUMEROS, COMO ESTADO, 1 EN PAUSA, 2 JUGAR, 3 VICTORIA, 4 GAMEOVER
  const [play, setplay] = useState<Boolean>(false)
  const [win, setwin] = useState<Boolean>(false)
  
  // Funcion que permite mantener la camara constantemente
  function Rig({ children }: props) {
    const vec = new Vector3();
    const { camera, mouse } = useThree();
    useFrame(() => {
      camera.position.lerp(vec.set(mouse.x * 3, mouse.y * 3, 7), 0.05);
      utils.objetivePosition = camera.position;
    });
    return <group >{children}</group>;
  }
  
  return (
    <div className="App h-screen">
      <Canvas
        camera={{ position: [0, 0, 3000], fov: 90, rotation: [0, 0, 0] }}
        shadows
      >
        <CameraShake
          yawFrequency={0.1}
          pitchFrequency={0.1}
          rollFrequency={0.1}
        />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        <color attach="background" args={["#94ebd8"]} />
        <Lights />
        <fog attach="fog" args={["#94ebd8", 0, 100]} />

        <HtmlText
          setplay={setplay}
          play={play}
          win={win}
        />

        <Rig>
          <Physics>
            <BulletBox play={play} />
            <BoxPlayer setplay={setplay} />
            <Objetive setplay={setplay} setwin={setwin} />
            <AttackersSpawner play={play} />
          </Physics>
        </Rig>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={40}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}
{
  /* <TransformControls mode="translate">
          <mesh />
        </TransformControls> */
}